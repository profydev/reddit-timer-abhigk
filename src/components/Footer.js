import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sign from '../assets/sign.svg';

const StyledFooter = styled.footer`
    padding: 0 5rem;
    ul{
        display:flex;
    flex-direction:row;
    justify-content:space-around;
        list-style:none;
        padding:0;
    }

    a{
        color:inherit;
        text-decoration:none;
    }

    @media screen and (max-width:480px){
        ul{
            flex-direction:column;
            align-items: center;
        }
        ul li:not(:last-child){
            margin-bottom: 1rem;
        }
    }

`;

function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li><Link to="https://ooloo.io/employers">profy.dev</Link></li>
        <li>
          <Link to="/"><img src={sign} alt="footer logo" /></Link>
        </li>
        <li><Link to="/terms">Terms & Privacy</Link></li>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
