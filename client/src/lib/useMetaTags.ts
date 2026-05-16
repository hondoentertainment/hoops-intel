import { useEffect } from "react";

// ═══════════════════════════════════════════════════════════
// useMetaTags — Dynamically update OG/meta tags for SPA pages
// ═══════════════════════════════════════════════════════════

interface MetaTags {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown>;
}

const DEFAULTS = {
  title: "Hoops Intel — Daily NBA Scores & Analysis",
  description:
    "Your daily NBA intelligence briefing. Box scores, Pulse Index™ player rankings, injury wire, media reactions, fantasy alerts, and tonight's game previews — updated every morning.",
  ogImage: "https://hoopsintel.net/api/og?type=edition",
  ogUrl: "https://hoopsintel.net",
};

function setMeta(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement | null;
  }
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(property.startsWith("og:") || property.startsWith("twitter:") ? "property" : "name", property);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(jsonLd: Record<string, unknown>) {
  let el = document.querySelector('script[data-hi-json-ld="page"]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.hiJsonLd = "page";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(jsonLd);
}

export function useMetaTags({ title, description, ogImage, ogUrl, canonicalUrl, jsonLd }: MetaTags) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevCanonical = (document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null)?.href;

    if (title) {
      document.title = title;
      setMeta("og:title", title);
      setMeta("twitter:title", title);
    }
    if (description) {
      setMeta("description", description);
      setMeta("og:description", description);
      setMeta("twitter:description", description);
    }
    if (ogImage) {
      setMeta("og:image", ogImage);
      setMeta("twitter:image", ogImage);
    }
    if (ogUrl) {
      setMeta("og:url", ogUrl);
    }
    if (canonicalUrl || ogUrl) {
      setCanonical(canonicalUrl || ogUrl || DEFAULTS.ogUrl);
    }
    if (jsonLd) {
      setJsonLd(jsonLd);
    }

    // Restore defaults on unmount
    return () => {
      document.title = prevTitle;
      setMeta("og:title", DEFAULTS.title);
      setMeta("og:description", DEFAULTS.description);
      setMeta("og:image", DEFAULTS.ogImage);
      setMeta("og:url", DEFAULTS.ogUrl);
      setMeta("twitter:title", DEFAULTS.title);
      setMeta("twitter:description", DEFAULTS.description);
      setMeta("twitter:image", DEFAULTS.ogImage);
      setCanonical(prevCanonical || DEFAULTS.ogUrl);
      document.querySelector('script[data-hi-json-ld="page"]')?.remove();
    };
  }, [title, description, ogImage, ogUrl, canonicalUrl, jsonLd]);
}
