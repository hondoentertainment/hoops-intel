import { useState, useRef, useEffect, useCallback, type ReactElement } from "react";
import { searchContext, getSuggestedQuestions } from "../lib/hoopsSearch";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// ═══════════════════════════════════════════════════════════
// MARKDOWN RENDERER (lightweight)
// ═══════════════════════════════════════════════════════════

function renderMarkdown(text: string): ReactElement[] {
  const lines = text.split("\n");
  const elements: ReactElement[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Bold: **text**
    const parts: (string | ReactElement)[] = [];
    const boldRegex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = boldRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }
      parts.push(
        <strong key={`b-${i}-${match.index}`} className="font-semibold text-white">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }

    // Bullet list
    if (line.match(/^[-•]\s/)) {
      elements.push(
        <li key={i} className="ml-4 list-disc" style={{ color: "rgba(255,255,255,0.8)" }}>
          {parts.length > 1 ? parts : line.replace(/^[-•]\s/, "")}
        </li>
      );
      continue;
    }

    // Numbered list
    if (line.match(/^\d+\.\s/)) {
      elements.push(
        <li key={i} className="ml-4 list-decimal" style={{ color: "rgba(255,255,255,0.8)" }}>
          {parts.length > 1 ? parts : line.replace(/^\d+\.\s/, "")}
        </li>
      );
      continue;
    }

    // Empty line = paragraph break
    if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
      continue;
    }

    elements.push(
      <p key={i} style={{ color: "rgba(255,255,255,0.8)" }}>
        {parts.length > 1 ? parts : line}
      </p>
    );
  }

  return elements;
}

// ═══════════════════════════════════════════════════════════
// CHAT CORE (shared between floating + full page)
// ═══════════════════════════════════════════════════════════

export function useChatEngine() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (text?: string) => {
      const question = (text || input).trim();
      if (!question || isLoading) return;

      setInput("");

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: question,
      };

      const assistantMsg: Message = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: "",
      };

      setMessages((prev) => {
        const next = [...prev, userMsg, assistantMsg];
        // Keep max 10 messages
        if (next.length > 10) return next.slice(next.length - 10);
        return next;
      });

      setIsLoading(true);

      try {
        // Build context from search
        const context = searchContext(question);

        abortRef.current = new AbortController();

        const res = await fetch("/api/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit": `client-${Math.random().toString(36).slice(2, 8)}`,
          },
          body: JSON.stringify({ question, context }),
          signal: abortRef.current.signal,
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: "Request failed" }));
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsg.id
                ? { ...m, content: `Error: ${err.error || "Something went wrong. Please try again."}` }
                : m
            )
          );
          setIsLoading(false);
          return;
        }

        // Stream response
        const reader = res.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsg.id
                ? { ...m, content: "Error: No response stream" }
                : m
            )
          );
          setIsLoading(false);
          return;
        }

        let fullText = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          fullText += chunk;
          const captured = fullText;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsg.id ? { ...m, content: captured } : m
            )
          );
        }
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, content: "Error: Failed to get a response. Please try again." }
              : m
          )
        );
      } finally {
        setIsLoading(false);
        abortRef.current = null;
      }
    },
    [input, isLoading]
  );

  return { messages, input, setInput, isLoading, sendMessage };
}

// ═══════════════════════════════════════════════════════════
// CHAT MESSAGES UI
// ═══════════════════════════════════════════════════════════

export function ChatMessages({
  messages,
  isLoading,
  onSuggestion,
}: {
  messages: Message[];
  isLoading: boolean;
  onSuggestion: (q: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const suggestions = getSuggestedQuestions();

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
      style={{ scrollBehavior: "smooth" }}
    >
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
              style={{ background: "rgba(14,165,233,0.15)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">Ask Hoops Intel</h3>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Ask anything about NBA games, players, standings, and more
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            {suggestions.map((q) => (
              <button
                key={q}
                onClick={() => onSuggestion(q)}
                className="w-full text-left px-3 py-2 rounded-lg text-xs transition-all hover:scale-[1.01]"
                style={{
                  background: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.15)",
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(14,165,233,0.15)";
                  e.currentTarget.style.color = "#0EA5E9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(14,165,233,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      ) : (
        messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                msg.role === "user" ? "" : "glass-card"
              }`}
              style={
                msg.role === "user"
                  ? {
                      background: "rgba(14,165,233,0.2)",
                      border: "1px solid rgba(14,165,233,0.3)",
                      color: "white",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }
              }
            >
              {msg.role === "user" ? (
                <p className="text-white">{msg.content}</p>
              ) : msg.content === "" && isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-bounce"
                      style={{ background: "#0EA5E9", animationDelay: "0ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-bounce"
                      style={{ background: "#0EA5E9", animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-bounce"
                      style={{ background: "#0EA5E9", animationDelay: "300ms" }}
                    />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>Analyzing...</span>
                </div>
              ) : (
                <div className="space-y-1">{renderMarkdown(msg.content)}</div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// CHAT INPUT
// ═══════════════════════════════════════════════════════════

export function ChatInput({
  input,
  setInput,
  isLoading,
  onSend,
}: {
  input: string;
  setInput: (v: string) => void;
  isLoading: boolean;
  onSend: () => void;
}) {
  return (
    <div
      className="px-3 py-3 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div
        className="flex items-center gap-2 rounded-lg px-3 py-2"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          placeholder="Ask about NBA games, players, stats..."
          maxLength={500}
          className="flex-1 bg-transparent text-xs text-white placeholder-white/30 outline-none"
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={onSend}
          disabled={isLoading || !input.trim()}
          aria-label="Send message"
          className="flex-shrink-0 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-all"
          style={{
            background:
              isLoading || !input.trim()
                ? "rgba(255,255,255,0.05)"
                : "rgba(14,165,233,0.2)",
            color:
              isLoading || !input.trim()
                ? "rgba(255,255,255,0.2)"
                : "#0EA5E9",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
      <div
        className="text-center mt-1.5"
        style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.6rem" }}
      >
        Powered by Hoops Intel AI
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// FLOATING CHAT WIDGET
// ═══════════════════════════════════════════════════════════

export default function AskHoopsIntel() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, setInput, isLoading, sendMessage } = useChatEngine();

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed z-50 flex items-center gap-2 min-h-[48px] px-4 py-3 rounded-full shadow-lg transition-all hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
            color: "white",
            boxShadow: "0 4px 20px rgba(14,165,233,0.4)",
            bottom: "max(1.25rem, env(safe-area-inset-bottom))",
            right: "max(1.25rem, env(safe-area-inset-right))",
          }}
          aria-haspopup="dialog"
          aria-label="Open Hoops Intel AI assistant"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <span className="text-sm font-semibold">Ask AI</span>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div
          className="fixed z-50 flex flex-col"
          role="dialog"
          aria-labelledby="floating-chat-title"
          aria-modal="true"
          style={{
            /* Mobile: full width bottom sheet. Desktop: side panel */
            bottom: 0,
            right: 0,
            width: "100%",
            maxWidth: "420px",
            height: "min(600px, 85vh)",
            paddingBottom: "env(safe-area-inset-bottom)",
            background: "#0A1628",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px 16px 0 0",
            boxShadow: "0 -4px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(14,165,233,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div>
                <div id="floating-chat-title" className="text-white text-xs font-semibold">
                  Ask Hoops Intel
                </div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>
                  NBA AI Assistant
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/ask"
                className="text-xs min-h-[44px] min-w-[44px] flex items-center justify-center px-2 py-2 rounded-lg transition-colors hover:text-sky-400"
                style={{ color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.05)" }}
                title="Open full page"
                aria-label="Open full Ask AI page"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-xs transition-colors hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.6)" }}
                aria-label="Close assistant"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            onSuggestion={(q) => sendMessage(q)}
          />

          {/* Input */}
          <ChatInput
            input={input}
            setInput={setInput}
            isLoading={isLoading}
            onSend={() => sendMessage()}
          />
        </div>
      )}
    </>
  );
}
