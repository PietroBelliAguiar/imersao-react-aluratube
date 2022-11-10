import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar{
        background: transparent;
        height: 10px;
        width: 10px;
      }
      ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: ${({ theme }) => theme.borderBase};
      }
      ::-webkit-scrollbar-corner{
        border-radius: 10px;
        background: lightgray;
      }
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
    overflow: overlay;

  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;