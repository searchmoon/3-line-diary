import React from "react";
import { DefaultLayout } from "./layout/layout";
import styled from "styled-components";

function Header() {
  return (
    <HeaderLayout>
      <DefaultLayout>헤더</DefaultLayout>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.div`
  width: 100%;
  max-width: 1920px;
  background-color: green;
  // ${DefaultLayout} {
  //   background-color: pink;
  // }
`;
export default Header;
