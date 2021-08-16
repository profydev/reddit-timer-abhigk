import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}
    *{
    font-family: 'Bitter', serif;
    font-family: 'Montserrat', sans-serif; 
    }
`;

export default GlobalStyles;
