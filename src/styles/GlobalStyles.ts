import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    font-family: "Noto Sans KR", sans-serif;
    color: #191a20;
  }

  body {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
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
    font-family: "Noto Sans KR", sans-serif;
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
