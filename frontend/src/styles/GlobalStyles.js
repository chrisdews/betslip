import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Trebuchet MS, Arial, Open-Sans, Helvetica, Sans-Serif;
    background-color: rgb(0, 24, 46);
    color: white;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        max-width: 768px;
  }
  }

  button {
    background-color: rgb(30, 213, 96);
  }
`;
 
export default GlobalStyle;