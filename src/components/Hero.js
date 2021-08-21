import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heatmap from '../assets/heatmap.png';

const StyledWrapper = styled.section`
  margin: 0 2rem;
`;

const StyledHeroSection = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const StyledHeadingH1 = styled.h1`
     font-family:bitter;
        font-size: 2.3rem;
        margin-top: .8rem;
        margin-bottom:.5rem;
        font-weight:300;
        color:black;
`;

const StyledSubtitle = styled.div`
    margin-bottom:2.5rem;
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

const HeroImg = styled.img`
  height: auto;
  margin: 0 auto;
  max-width:100%;
`;

const StyledRedditText = styled(Link)`
  margin-bottom:2rem;
  text-decoration:none;
  color:inherit;
`;

function Hero() {
  return (
    <StyledWrapper>
      <StyledHeroSection>
        <StyledHeadingH1>No reactions to your reddit posts?</StyledHeadingH1>
        { /* eslint-disable-next-line max-len */ }
        <StyledSubtitle> Great timing, great results! Find the best time to post on your subreddit. </StyledSubtitle>
        <StyledHeroBtn type="button">SHOW ME THE BEST TIME</StyledHeroBtn>
        <StyledRedditText to="/search/javascript">r/javascript</StyledRedditText>
        <Link to="/search/javascript"><HeroImg src={heatmap} alt="heatmap" /></Link>
      </StyledHeroSection>
    </StyledWrapper>
  );
}

export default Hero;
