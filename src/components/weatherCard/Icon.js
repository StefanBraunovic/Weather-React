import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 50%;
  `;

  return (
    <Icon className="icon" src="./img/sunny.png" alf="weather-icon"></Icon>
  );
};

export default Icon;
