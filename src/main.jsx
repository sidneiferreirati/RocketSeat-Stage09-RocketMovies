import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { Preview } from "./pages/Preview";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import { Routes } from "./routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
