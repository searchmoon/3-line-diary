import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../styles/webfont.scss";

const GlobalStyles = createGlobalStyle`
  ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, hr,
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        vertical-align: baseline;
        letter-spacing: 1px;
    }
    body{
        line-height: 1;
        font-family: "EF_Diary", "Sans-serif";
        // font-family: 'Noto Sans KR', sans-serif;
        // background-color: ${(props) => props.theme.bgBody};
        // color: ${(props) => props.theme.bgText};
        margin-bottom: 100px;
        letter-spacing: 2px;
    }
    ol, ul, li{
        list-style: none;
    }
    button {
        border: 0;
        cursor: pointer;
        background-color: inherit;
    }
`;

export default GlobalStyles;
