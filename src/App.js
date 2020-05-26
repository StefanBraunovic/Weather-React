import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

const App = () => {
  return (
    <div className="App">
      <WeatherEngine location="Podgorica, me" />
      <WeatherEngine location="Belgrade,rs" />
      <WeatherEngine location="Amsterdam,nl" />
    </div>
  );
};

export default App;
