import React from "react";
import styled from "@emotion/styled";

const Vrijeme = (props) => {
  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;
  const Temp = styled.h1`
    font-family: "Fira sans", sans-serif;
    font-size: 2em;
    font-weight: 200;
  `;

  return (
    <>
      <Temp>20 °C</Temp>
      <State className="condition">Suncano</State>
    </>
  );
};

export default Vrijeme;
