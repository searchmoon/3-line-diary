import Home from "./pages/Home";
import CalendarPage from "./pages/CalendarPage";
import DiaryDetail from "./pages/DiaryDetail";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "../src/styles/webfont.scss";
import theme from "./styles/theme";
import { useSelector } from "react-redux";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={mode ? theme.darkTheme : theme.lightTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/diaryDetail/:id" element={<DiaryDetail />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
