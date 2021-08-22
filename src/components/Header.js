import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../assets/logo.svg';

const StyledHeader = styled.header`
  padding:2rem 5rem;

  @media screen and (max-width:480px){
    padding:1.5rem 1rem;

    .desktopNav{
      display: none;
    }

  }
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
    .burgerBtn div{
        display: none;
      }

      @media screen and (max-width:480px){
        .burgerBtn div{
          display: flex;
          height: .4rem;
          width: 2rem;
          background-color: black;
          color: black;
          margin-bottom: 4px;
          border-radius: 4px;
        }
      } 

`;

const StyledMenu = styled.div`

  display:flex;
  justify-content:flex-end;
 
  
  
  a{
    text-decoration:none;
    color:inherit;
  }


  ul{
    display:none;
  }

  @media screen and (max-width:480px){

    div{
      position:absolute;
    }
   ul{
      display: flex;
      flex-direction:column;
      list-style:none;
      padding:0;
      margin:0;
      width:max-content;
      background-color: #e0e0e0;
      padding: 3rem 2rem;
      text-align:right;
      font-size:2rem;
      text-transform:uppercase;
      transform: ${(props) => (props.isClicked ? 'translateX(0)' : 'translateX(100%)')};
      transition: transform 0.3s ease-in-out;
   }
   ul li:not(:last-child){
     margin-bottom:1rem;
   }
  }
`;

function Menu({ isClicked }) {
  return (
    <StyledMenu isClicked={isClicked}>
      <div>
        <ul>
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
      </div>
    </StyledMenu>
  );
}

Menu.propTypes = {
  isClicked: PropTypes.bool,
};
Menu.defaultProps = {
  isClicked: false,
};

function Header({ scrollToWorks, scrollToAbout }) {
  const [btnClicked, setBtnClicked] = useState(false);

  function handleClick() {
    // console.log(btnClicked);
    setBtnClicked(!btnClicked);
  }

  return (
    <>
      <StyledHeader>
        <StyledContent>
          <div>
            <Link to="/">
              <img src={Logo} alt="Application Logo" />
            </Link>
          </div>
          <nav>
            <div className="burgerBtn" onClick={handleClick} role="button" tabIndex={0} onKeyDown={handleClick}>
              <div />
              <div />
              <div />
            </div>

            <ul className="desktopNav">
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/search/javascript">Search</Link>
              </li>
              <li>
                <Link to="/#how-it-works" onClick={scrollToWorks}>How it works</Link>
              </li>
              <li>
                <Link to="/#about" onClick={scrollToAbout}>About</Link>
              </li>
            </ul>
          </nav>
        </StyledContent>
      </StyledHeader>
      <Menu isClicked={btnClicked} />
    </>
  );
}

Header.propTypes = {
  scrollToWorks: PropTypes.func,
  scrollToAbout: PropTypes.func,
};

Header.defaultProps = {
  scrollToWorks: () => {

  },
  scrollToAbout: () => {

  },
};

export default Header;
