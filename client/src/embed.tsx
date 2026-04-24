// Standalone embed entry — built to /dist/embed.js for third-party `<script>` injection.
import { createRoot } from "react-dom/client";
import PulseWidget from "./components/widgets/PulseWidget";

const el = document.getElementById("hoops-intel-embed-root");
if (el) {
  createRoot(el).render(<PulseWidget theme="dark" size="medium" />);
}
