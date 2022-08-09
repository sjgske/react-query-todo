import { createGlobalStyle } from "styled-components";
import NotoSansRegular from "../assets/fonts/NotoSansKR-Regular.woff";
import NotoSansBold from "../assets/fonts/NotoSansKR-Bold.woff";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "NotoSans";
    src: url(${NotoSansRegular}) format("woff");
    font-weight: 400;
  }
  @font-face {
    font-family: "NotoSans";
    src: url(${NotoSansBold}) format("woff");
    font-weight: 700;
  }
`;

export default GlobalFonts;
