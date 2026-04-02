import { useEffect } from "react";
import {
  useChatEngine,
  ChatMessages,
  ChatInput,
} from "../components/AskHoopsIntel";
import { pulseEdition, narrative } from "../lib/pulseData";

export default function AskAI() {
  const { messages, input, setInput, isLoading, sendMessage } = useChatEngine();

  useEffect(() => {
    document.title = "Ask Hoops Intel — AI NBA Assistant";
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#050D1A" }}
    >
      {/* Header */}
      <header
        className="border-b flex-shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container max-w-3xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-3">
            <a
              href="/"
              className="text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </a>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div>
              <h1 className="display-heading text-white text-xl leading-none">
                Ask Hoops Intel
              </h1>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                AI-powered NBA analysis from daily editions
              </p>
            </div>
          </div>

          {/* Current Edition Context */}
          <div
            className="rounded-lg px-4 py-3 mt-3"
            style={{
              background: "rgba(14,165,233,0.06)",
              border: "1px solid rgba(14,165,233,0.12)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#0EA5E9" }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: "#0EA5E9" }}
              >
                Latest Edition — {pulseEdition.date}
              </span>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {pulseEdition.edition}
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {narrative.subhead.length > 200
                ? narrative.subhead.slice(0, 200) + "..."
                : narrative.subhead}
            </p>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto" style={{ minHeight: 0 }}>
        <div className="flex-1 flex flex-col" style={{ minHeight: "50vh" }}>
          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            onSuggestion={(q) => sendMessage(q)}
          />
        </div>

        {/* Input at bottom */}
        <div className="sticky bottom-0" style={{ background: "#050D1A" }}>
          <ChatInput
            input={input}
            setInput={setInput}
            isLoading={isLoading}
            onSend={() => sendMessage()}
          />
        </div>
      </div>
    </div>
  );
}
