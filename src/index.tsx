import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import translation from "./common/i18/resources";
import LanguageDetector from "i18next-browser-languagedetector";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

i18next
  .use(LanguageDetector)
  .init({ resources: translation, debug: true });

root.render(
  <I18nextProvider i18n={i18next}>
    <Router>
      <Routes>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </Router>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
