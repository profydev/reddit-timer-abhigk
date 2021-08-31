import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  StyledWrapper, StyledHeroSection, StyledHeadingH1, StyledHeroBtn,
} from './GlobalStyledComponents';
import heatmap from '../assets/heatmap.png';

const StyledSubtitle = styled.div`
    margin-bottom:2.5rem;
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
        <Link to="/search/javascript"><StyledHeroBtn type="button">SHOW ME THE BEST TIME</StyledHeroBtn></Link>
        <StyledRedditText to="/search/javascript">r/javascript</StyledRedditText>
        <Link to="/search/javascript"><HeroImg src={heatmap} alt="heatmap" /></Link>
      </StyledHeroSection>
    </StyledWrapper>
  );
}

export default Hero;
