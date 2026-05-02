import { useEffect } from "react";
import SiteHeader from "../components/SiteHeader";
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
      style={{ background: "var(--hi-bg-page, #050D1A)" }}
    >
      <SiteHeader subtitle="ASK HOOPS INTEL" />

      <div
        className="border-b flex-shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container max-w-3xl mx-auto px-4 py-6">
          <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            AI-powered NBA analysis from daily editions
          </p>
          <div
            className="rounded-lg px-4 py-3"
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
      </div>

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
        <div className="sticky bottom-0" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
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
