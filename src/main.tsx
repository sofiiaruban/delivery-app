import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "normalize.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
