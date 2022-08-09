import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    font-family: "NotoSans", sans-serif;
    color: ${theme.black};
  }

  body {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: "NotoSans", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  button,
  input,
  textarea,
  select {
    font-family: "NotoSans", sans-serif;
    border: none;
    outline: none;
    background-color: transparent;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .hidden {
    display: none;
  }
`;

export default GlobalStyles;
