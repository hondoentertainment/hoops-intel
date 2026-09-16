import { useEffect } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import { PageHero } from "../components/enhanced/EnhancedUi";
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
        style={{ borderColor: "var(--hi-border-soft, rgba(10,10,10,0.06))" }}
      >
        <div className="max-w-3xl mx-auto px-[var(--hi-desk-pad-x,1rem)] md:px-[var(--hi-desk-pad-x-md,1.75rem)] py-6">
          <div className="mb-4">
            <PageHero
              kicker="Ask Hoops Intel"
              title="Shorts into the desk"
              description="AI-powered NBA analysis from daily editions"
            />
          </div>
          <div className="enhanced-card px-4 py-3">
            <div className="flex items-center gap-2 mb-1 min-w-0">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--hi-accent,#8ec8f0)" }}
              />
              <span
                className="text-xs font-medium hi-title"
                style={{ color: "var(--hi-accent-text,#146a8c)" }}
              >
                Latest edition — {pulseEdition.date}
              </span>
              <span
                className="text-xs shrink-0"
                style={{ color: "var(--hi-text-secondary,#5c5c58)" }}
              >
                {pulseEdition.edition}
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--hi-muted,#5c5c58)" }}
            >
              {narrative.subhead.length > 200
                ? narrative.subhead.slice(0, 200) + "..."
                : narrative.subhead}
            </p>
            <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--hi-border-soft, rgba(255,255,255,0.06))" }}>
              <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
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

        <div className="sticky bottom-0 ask-page-composer" style={{ background: "var(--hi-bg-page, #f7f7f5)" }}>
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
