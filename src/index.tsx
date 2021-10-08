import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./view/UI/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import theme from "./view/UI/theme";
import { RouterProvider } from "react-router5";
import createAppRouter from "./router";
import { viewModels } from "./store";

const { worker } = require("./libs/mocks/browser");

worker.start({
  onUnhandledRequest: "bypass",
});

export const router = createAppRouter({ store: viewModels });

router.start();

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* @ts-ignore */}
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
