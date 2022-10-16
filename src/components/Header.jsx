import React from "react";
import { DefaultLayout } from "./layout/layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaBars } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Header({ leftIcon }) {
  return (
    <HeaderLayout>
      <DefaultLayout>
        {leftIcon ? (
          <Link to="/">
            <FaChevronLeft />
          </Link>
        ) : (
          <Link to="/calendar"></Link>
        )}
        <div className="title">
          <Link to="/">3Line Diary</Link>
        </div>
        <Link to="/">
          <IoSettingsOutline />
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
