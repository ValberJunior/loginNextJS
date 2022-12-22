import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  scroll-bar-width: none;
}
body{
  overflow-x: hidden;
  font-size: 16px;
}
`;

export default GlobalStyle;
