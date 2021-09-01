import styled from 'styled-components';

const StyledWrapper = styled.section`
  margin: 0 2rem;
`;

const StyledHeroSection = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const StyledHeadingH1 = styled.h1`
     font-family:Bitter;
        font-size: 2.3rem;
        margin-top: .8rem;
        margin-bottom:.5rem;
        font-weight:300;
        color:black;
`;

const StyledHeroBtn = styled.button`
  background-color: ${(props) => props.theme.color.accentColor};
      color: white;
      border: none;
      width: 13.8rem;
      height: 2.3rem;
      border-radius: 5px;
      font-size: .9rem;
      vertical-align: middle;
      line-height: 38px;
      white-space: nowrap;
      cursor:pointer;
      margin-bottom: 2.8rem;
`;

export {
  StyledWrapper,
  StyledHeroSection,
  StyledHeadingH1,
  StyledHeroBtn,
};
