import React from "react";
import { DefaultLayout } from "./layout/layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderLayout>
      <DefaultLayout>
        <Link to="/calendar">
          <img src="/icon/hambur_gray.svg" alt="hamburger" />
        </Link>
        <div className="title">
          <Link to="/">3Line Diary</Link>
        </div>
        <Link to="/">
          <img src="/icon/hambur_gray.svg" alt="hamburger" />
        </Link>
        {/* <ul className="navbar">
          <li>How to use</li>
          <li>My diary</li>
          <li>Login</li>
          <li>Contact us</li>
        </ul> */}
      </DefaultLayout>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.div`
  width: 100%;
  background-color: green;
  margin: 0 auto;
  ${DefaultLayout} {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: pink;
  }
`;
export default Header;
