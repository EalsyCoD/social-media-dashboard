import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${(props) => props.theme.colors.text};
    
  }
`