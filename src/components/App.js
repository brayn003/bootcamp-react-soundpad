import React from 'react';
import styled from 'styled-components';

import PadButton from './PadButton';
import PADS from '../constants/tracks.json';

function App() {
  return (
    <>
      <PageTitle>Sound Pad</PageTitle>
      <PadContainer>
        {PADS.map(pad => (
          <PadButton 
            key={pad.track} 
            track={pad.track}
          >
            {pad.title}
          </PadButton>
        ))}
      </PadContainer>
    </>
  );
}

const PageTitle = styled.h1`
  font-family: 'Odibee Sans', cursive;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #FFF;
  letter-spacing: 1px;
  font-size: 2.5em;
`;

const PadContainer = styled.main`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #222;
`;

export default App;
