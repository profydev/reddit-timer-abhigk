import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;

    h1{
        font-family:bitter;
        font-size: 2.3rem;
        margin-top: .8rem;
        margin-bottom:.5rem;
        font-weight:300;
    }
    .subtitle{
        margin-bottom:2.5rem;
    }
    button{
      padding: .5rem 2rem;
      background-color:#FDB755;
      color:white;
      border:none;
      width: 14rem;
      height: 2.4rem;
      border-radius: 5px;
    }
`;

function Hero() {
  return (
    <StyledHeroSection>
      <h1>No reactions to your reddit posts?</h1>
      <div className="subtitle">Great timing, great results! Find the best time to post on your subreddit.</div>
      <button type="button">SHOW ME THE BEST TIME</button>
    </StyledHeroSection>
  );
}

export default Hero;
