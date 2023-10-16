import Home from "./pages/Home";
import CalendarPage from "./pages/CalendarPage";
import DiaryDetail from "./pages/DiaryDetail";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import "../src/styles/webfont.scss";
import theme from "./styles/theme";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={mode ? theme.darkTheme : theme.lightTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/diaryDetail/:id" element={<DiaryDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
      box-sizing: border-box;
    }
    button {
      cursor: pointer;
    }
    ol, ul, li{
      list-style: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    div, p, span, h1, h2, h3, h4, h5, h6, input, button, textarea {
      font-family: "EF_Diary", "Sans-serif";
    }
`;
export default App;
