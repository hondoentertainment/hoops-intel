/* Hoops Intel — embeddable widget loader.
 *
 *   <div data-hoops-intel="pulse" data-theme="dark" data-size="medium"></div>
 *   <script async src="https://hoopsintel.net/embed.js"></script>
 *
 * The loader scans for elements carrying a `data-hoops-intel` attribute and
 * injects an iframe pointing at /embed/:id with the requested theme + size.
 * Iframes auto-resize in response to the child page posting
 * `{ type: "hoops-intel-resize", height }` via postMessage.
 */
(function () {
  "use strict";
  var ORIGIN = (function () {
    // Prefer the script's own origin so staging + localhost embeds work.
    var currentScript = document.currentScript;
    if (currentScript && currentScript.src) {
      try {
        return new URL(currentScript.src).origin;
      } catch (err) {
        // fall through
      }
    }
    return "https://hoopsintel.net";
  })();

  var SIZE_DEFAULTS = {
    pulse: { width: 360, height: 420 },
    ticker: { width: 480, height: 48 },
    injury: { width: 360, height: 460 }
  };

  function mount(el) {
    if (el.__hoopsIntelMounted) return;
    el.__hoopsIntelMounted = true;

    var id = el.getAttribute("data-hoops-intel");
    var theme = el.getAttribute("data-theme") === "light" ? "light" : "dark";
    var size = el.getAttribute("data-size") || "medium";
    var defaults = SIZE_DEFAULTS[id] || { width: 360, height: 420 };

    var iframe = document.createElement("iframe");
    iframe.src = ORIGIN + "/embed/" + encodeURIComponent(id) + "?theme=" + theme + "&size=" + size;
    iframe.title = "Hoops Intel — " + id;
    iframe.loading = "lazy";
    iframe.style.width = "100%";
    iframe.style.maxWidth = defaults.width + "px";
    iframe.style.height = defaults.height + "px";
    iframe.style.border = "0";
    iframe.style.display = "block";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups");
    el.appendChild(iframe);

    el.__hoopsIntelIframe = iframe;
  }

  function mountAll() {
    var nodes = document.querySelectorAll("[data-hoops-intel]");
    for (var i = 0; i < nodes.length; i++) mount(nodes[i]);
  }

  window.addEventListener("message", function (event) {
    if (!event.data || event.data.type !== "hoops-intel-resize") return;
    if (typeof event.data.height !== "number") return;
    var nodes = document.querySelectorAll("[data-hoops-intel]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!el.__hoopsIntelIframe) continue;
      if (el.__hoopsIntelIframe.contentWindow === event.source) {
        el.__hoopsIntelIframe.style.height = Math.min(Math.max(event.data.height, 40), 1200) + "px";
      }
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountAll);
  } else {
    mountAll();
  }

  // Expose a manual hook so apps that inject `data-hoops-intel` dynamically
  // can trigger a rescan: window.HoopsIntel.mount()
  window.HoopsIntel = { mount: mountAll };
})();
