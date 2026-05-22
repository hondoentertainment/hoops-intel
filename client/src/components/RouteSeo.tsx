import { useMemo } from "react";
import { useLocation } from "wouter";
import { useMetaTags } from "../lib/useMetaTags";
import { isPageLevelSeoRoute, resolveRouteSeo, toMetaTags } from "../lib/seoConfig";

/** Applies route-level title, description, canonical, and JSON-LD for static pages. */
export default function RouteSeo() {
  const [location] = useLocation();

  const meta = useMemo(() => {
    if (isPageLevelSeoRoute(location)) return null;
    const seo = resolveRouteSeo(location);
    return seo ? toMetaTags(seo) : null;
  }, [location]);

  useMetaTags({
    enabled: Boolean(meta),
    ...meta,
  });

  return null;
}
