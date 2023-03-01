/* stylelint-disable font-family-no-missing-generic-family-keyword */
/* stylelint-disable indentation */
/* stylelint-disable value-list-comma-newline-after */
/* stylelint-disable string-quotes */
/* stylelint-disable selector-id-pattern */
/* stylelint-disable selector-max-id */
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "BW Gradual DEMO", "Helvetica Neue", "Trebuchet MS", Verdana, Arial;
    height: 100%;
    overflow-x: clip;
  }

  #__next {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  /* stylelint-disable-next-line selector-list-comma-newline-after */
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  .centered {
    margin: 0 auto;
  }

  .mb-80 {
    margin-bottom: 80px;
    ${mediaQuery("xs", "margin-bottom: 40px;")}
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mt-80 {
    margin-top: 80px;
  }

  .hidden {
    /* stylelint-disable-next-line declaration-no-important */
  display: none !important;
  }
`;
