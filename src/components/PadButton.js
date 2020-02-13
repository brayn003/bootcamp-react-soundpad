import React from 'react';
import styled from 'styled-components';
import {node, string} from 'prop-types';

const PadButton = ({
  children,
  track
}) => {

  const handleClick = async () => {
    const audio = new Audio(track);
    audio.play();
  }

  return (
    <BoxContainer>
      <BoxButton onClick={handleClick} >
        {children}
      </BoxButton>
    </BoxContainer>
  )
}

PadButton.propTypes = {
  children: node,
  track: string.isRequired,
}

PadButton.defaultProps = {
  children: null
}

const BoxContainer = styled.div`
  height: 25%;
  width: 25%;
  display: inline-block;
  box-sizing: border-box;
  background-color: #444;
  /* padding: 2px; */
  border: 1px solid #222;
`;

const BoxButton = styled.button`
  height: 100%;
  width: 100%;
  background-color: #666;
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
  box-shadow: 0 0 8px #222 inset;
  font-family: sans-serif;
  transition: background-color 0.1s linear;
  text-shadow: 0px 1px 1px #4d4d4d;
  color: rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: #39ff14;
  }

  &:focus, &:active {
    outline: 0;
  }
`;

export default PadButton;