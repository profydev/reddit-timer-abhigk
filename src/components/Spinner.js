import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: 5px solid ${(props) => props.theme.color.accentColorLight};
  border-top: 5px solid ${(props) => props.theme.color.accentColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.5s linear infinite;
  margin: 20px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
