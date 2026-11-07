import { editionFallbackState, type EditionGeneration } from "../lib/editionFallback";
import { pulseEdition } from "../lib/pulseData";

/** Small status line when the desk is still on the last finished edition. */
export default function EditionFallbackBanner({
  editionDate = pulseEdition.date,
  now = new Date(),
  generation = "ok",
}: {
  editionDate?: string;
  now?: Date;
  generation?: EditionGeneration;
}) {
  const state = editionFallbackState({ editionDate, now, generation });
  if (!state.banner) return null;

  return (
    <div className="container pt-4">
      <p role="status" data-testid="edition-fallback-banner" className="hi-notice-info text-sm leading-relaxed">
        {state.banner}
      </p>
    </div>
  );
}
