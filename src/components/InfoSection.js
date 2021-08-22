import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin-left: 22em;
    margin-right: 22em;
    margin-top: 7em;
    margin-bottom: 7.5rem;

    @media screen and (max-width:480px){
        margin-left: 2em;
        margin-right: 2em;
    }

    a{
        text-decoration:none;
    }
`;

const StyledTitle = styled.h2`
    color:black;
    font-family:'Bitter';
    margin-bottom:0;
    font-weight:300;
`;

const StyledUl = styled.ul`
    padding-left: 1em;
    margin-bottom: 6em;
`;

function InfoSection({ refWorks, refAbout }) {
  return (
    <StyledWrapper>
      <StyledTitle id="how-it-works" ref={refWorks}>
        How it works
      </StyledTitle>
      <StyledUl>
        <li>We find the 500 top posts from the past year for a subreddit. </li>
        <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
        <li>See immediately when to submit your reddit post.</li>
      </StyledUl>
      <StyledTitle id="about" ref={refAbout}>
        About
      </StyledTitle>
      <p>
        This app was created during a course on
        <a href="https://profy.dev">profy.dev</a>
        { /* eslint-disable-next-line max-len */ }
        with the goal to implement a pixel-perfect real-world application with professional workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code reviews.
        <a href="https://profy.dev/employers"> Click here for more information.</a>
        {' '}
      </p>
    </StyledWrapper>
  );
}

InfoSection.propTypes = {
  refWorks: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  refAbout: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

InfoSection.defaultProps = {
  refWorks: null,
  refAbout: null,
};

export default InfoSection;
