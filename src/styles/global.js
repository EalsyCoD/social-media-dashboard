import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --facebook: hsl(208, 92%, 53%);
  --twitter: hsl(203, 89%, 53%);
  --instagram: linear-gradient(
    to right,
    hsl(37, 97%, 70%) 0%,
    hsl(329, 70%, 58%) 100%
  );
  --youtube: hsl(348, 97%, 39%);
  --LimeGreen: hsl(163, 72%, 41%);
  --BrightRed: hsl(356, 69%, 56%);
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    display: block;
    max-width: 1440px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
  }
`