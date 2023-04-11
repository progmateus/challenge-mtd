import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root{
    --input-gradient-border: linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%));
    --white: hsl(0, 0%, 100%);
    --light-grayish-violet:  hsl(270, 3%, 87%);
    --dark-grayish-violet: hsl(279, 6%, 55%);
    --very-dark-violet: hsl(278, 68%, 11%);
    --danger: hsl(0, 100%, 66%);
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
  }

  P{
    font-size: 18px;
    color: #FFFFFF;
  }

  p, button, input{
    font-family: 'Space Grotesk', sans-serif;
  }
`;

export default GlobalStyle;