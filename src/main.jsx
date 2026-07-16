import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// NOTE: StrictMode intentionally omitted. Its dev-only double-invoke of effects
// leaves GSAP `from`/timeline intro animations frozen at their start state
// (the hero would render half-hidden). Production is unaffected either way.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
