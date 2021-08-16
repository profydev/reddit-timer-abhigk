import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

const StyledHeader = styled.header`
  padding:2rem 5rem;

`;

const StyledContent = styled.div`
    display: flex;
    justify-content:space-between;
    
      ul{
      list-style:none;
      display:flex;
      padding:0;
      margin:0;
    }
    li{
      margin-left:2rem;
      margin-top:.5rem;
      
    }

    a{
      text-decoration:none;
      color:inherit;
    }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledContent>
        <div>
          <Link to="/">
            <img src={Logo} alt="Application Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/#how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
          </ul>
        </nav>
      </StyledContent>
    </StyledHeader>
  );
}

export default Header;
