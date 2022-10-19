
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@ui5/webcomponents-react";

const rootElem = document.getElementById("root") as HTMLElement;
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}
