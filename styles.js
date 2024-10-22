import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif; 
    background-color: #f8f9fa; 
    color: #333; 
  }

  h3 {
    font-size: 1.5em; 
    color: #333; 
    margin: 15px 0; 
    text-align: center;
  }

  p {
    margin: 5px 0; 
    color: #555; 
    font-size: 1em; 
    text-align: center;
  }
`;


