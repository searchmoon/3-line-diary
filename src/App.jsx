import Home from "./pages/Home";
import CalendarPage from "./pages/CalendarPage";
import DiaryDetail from "./pages/DiaryDetail";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/diaryDetail/:id" element={<DiaryDetail />} />
      </Routes>
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
`;
export default App;
