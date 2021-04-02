import React from 'react';
import './App.css';
import { RecoilRoot } from "recoil";
import styled from "styled-components";

const StyledDiv = styled.div.attrs({
  className: "bg-gray-100 text-red-400 text-3xl"
})``;

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <StyledDiv>
          Hello React!
        </StyledDiv>
      </div>
    </RecoilRoot>
  );
}

export default App;
