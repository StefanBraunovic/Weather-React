//ovo je komponent
import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Vrijeme from "./Vrijeme";

const WeatherCard = (props) => {
  const red = 200;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, rgb(${red}, 200, 200), red);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 50px;
  `;

  return (
    <Card>
      <Location />
      <Icon />
      <Vrijeme />
    </Card>
  );
};

export default WeatherCard;
