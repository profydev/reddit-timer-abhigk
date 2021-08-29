import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  StyledWrapper, StyledHeroSection, StyledHeadingH1 as h1, StyledHeroBtn,
} from './GlobalStyledComponents';

const StyledInput = styled.input`
    margin:0 .5rem;
    width: 21.5rem;
    height: 2rem;
    padding-left: 1rem;
`;
const StyledHeadingH1 = styled(h1)`
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  font-size:1.2rem;
`;

const StyledSearchBtn = styled(StyledHeroBtn)`
      
      width: 6rem;
      height: 2.5rem;
      margin-bottom:0;
`;

function Search() {
  const { subreddit } = useParams();
  const [searchInput, setSearchInput] = useState(subreddit);
  const history = useHistory();

  useEffect(() => {
    setSearchInput(subreddit);
  }, [subreddit]);

  function handleInput(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line quotes
    history.push(`/search/${searchInput}`);
  }

  return (
    <StyledWrapper>
      <StyledHeroSection>
        <StyledHeadingH1>Find the best time for the subreddit</StyledHeadingH1>
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="search-form">r/</StyledLabel>
          <StyledInput type="text" name="search-form" value={searchInput} onChange={handleInput} />
          <StyledSearchBtn type="submit" value="submit">Search</StyledSearchBtn>
        </form>
      </StyledHeroSection>
    </StyledWrapper>
  );
}
export default Search;
