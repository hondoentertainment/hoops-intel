import { useEffect } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import {
  useChatEngine,
  ChatMessages,
  ChatInput,
  AskPromptChips,
} from "../components/AskHoopsIntel";
import { dispatchAskPrompt } from "../lib/askShortcuts";
import { pulseEdition, narrative } from "../lib/pulseData";

export default function AskAI() {
  const { messages, input, setInput, isLoading, sendMessage } = useChatEngine();

  useEffect(() => {
    document.title = "Ask Hoops Intel — AI NBA Assistant";
  }, []);

  return (
    <ToolPageLayout
      subtitle="ASK HOOPS INTEL"
      contentOnly
      shellClassName="flex flex-col has-mobile-tabbar"
      showBreadcrumbs={false}
      showRelated={false}
    >
      <div
        className="border-b flex-shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container max-w-3xl mx-auto px-4 py-6">
          <p className="enhanced-kicker mb-2">Ask Hoops Intel</p>
          <h1 className="editorial-heading text-[var(--hi-text,#f2f5fa)] text-[28px] leading-8 mb-2 max-md:text-[1.5rem]">
            Shorts into the desk
          </h1>
          <p className="text-sm mb-4" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
            AI-powered NBA analysis from daily editions
          </p>
          <div className="enhanced-card px-4 py-3">
            <div className="flex items-center gap-2 mb-1 min-w-0">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--hi-accent,#1ec8f5)" }}
              />
              <span
                className="text-xs font-medium truncate"
                style={{ color: "var(--hi-accent,#1ec8f5)" }}
              >
                Latest edition — {pulseEdition.date}
              </span>
              <span
                className="text-xs shrink-0"
                style={{ color: "var(--hi-text-secondary,#8594a8)" }}
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
            <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--hi-border-soft, rgba(255,255,255,0.06))" }}>
              <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                Quick prompts
              </p>
              <AskPromptChips onSelect={dispatchAskPrompt} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto" style={{ minHeight: 0 }}>
        <div className="flex-1 flex flex-col" style={{ minHeight: "50vh" }}>
          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            onSuggestion={(q) => sendMessage(q)}
          />
        </div>

        <div className="sticky bottom-0 ask-page-composer" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
          <ChatInput
            input={input}
            setInput={setInput}
            isLoading={isLoading}
            onSend={() => sendMessage()}
            inputId="ask-hoops-intel-page"
          />
        </div>
      </div>
    </ToolPageLayout>
  );
}
