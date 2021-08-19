import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

const GlobalStyles = createGlobalStyle`
${normalize}
    *{
    font-family: 'Bitter', serif;
    font-family: 'Montserrat', sans-serif; 
    }
    html, body {
    max-width: 100%;
    overflow-x: hidden;
}
`;

export default GlobalStyles;
