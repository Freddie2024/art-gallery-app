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
    background-color: #ffffff; 
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

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #0056b3; 
    color: white; 
    border: none; 
    border-radius: 5px; 
    font-size: 1em; 
    cursor: pointer; 
    transition: background-color 0.3s; 
    
    &:hover {
      background-color: #5a6268; 
    }

    &:focus {
      outline: none; 
    }
  }
`;




