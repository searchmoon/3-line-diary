import React, { useCallback, useState } from "react";
import { DefaultLayout } from "./layout/Layout";
import styled from "styled-components";

function Footer() {
  return (
    <FooterLayout>
      <DefaultLayout>
        <div className="inline-footer"></div>
      </DefaultLayout>
    </FooterLayout>
  );
}
const FooterLayout = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.bgText};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  border-top: 2px dashed ${(props) => props.theme.dashed};
  ${DefaultLayout} {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bgText};
  }
  .inline-footer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Footer;
