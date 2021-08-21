import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sign from '../assets/sign.svg';

const StyledFooter = styled.footer`
   
    width: 100%; /* tries to take up the complete space */
  max-width: 940px; /* prevents growing larger than 940px */
  margin: auto; /* centers footer on screens wider than 940px */
  padding: 0 20px; /* ensures some horizontal space on small devices */
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
        ul li:not(:nth-child(2)){
          flex:1;
        }
    }

`;

function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li><a href="https://profy.dev/employers">profy.dev</a></li>
        <li>
          <Link to="/"><img src={sign} alt="footer logo" /></Link>
        </li>
        <li><Link to="/terms">Terms & Privacy</Link></li>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
