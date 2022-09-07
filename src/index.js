import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import "./index.css";
import App from "./App";
import theme from "./theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import axios from "axios";

axios.defaults.baseURL = 'http://10.250.1.121/osp-server/api/';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
