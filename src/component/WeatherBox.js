import React from 'react';

const weatherBox = ({ weather }) => {
  console.log("weather?", weather);

  // Check if weather data and description exist before accessing
  const temp = weather ? weather.main.temp : null;
  const tempChange = temp * 1.8 + 32;
  const dcp = weather ? weather.weather[0].description: null; 

  const dcpColor = () => {
    if (dcp && dcp.includes("clear")) {
      return { color: 'blue' }; 
    } else if (dcp && dcp.includes("rain")) {
      return { color: 'red' }; 
    } else if (dcp && dcp.includes("clouds")) {
      return { color: 'gray' }; 
    } else {
      return { color: 'black' }; 
    }
  }

  const boxColor = () => {
    if (dcp && dcp.includes("clear")) {
      return { border: '4px solid blue' }; 
    } else if (dcp && dcp.includes("rain")) {
      return { border: '4px solid red' }; 
    } else if (dcp && dcp.includes("clouds")) {
      return { border: '4px solid gray' }; 
    } else {
      return { border: '4ps solid black' }; 
    }
  }

  return (
    <div className="weatherBox" style={boxColor()}>
      <h1>{weather ? weather.name : null}</h1>
      <h2>{temp && temp.toFixed(2)}℃ / {tempChange.toFixed(2)}℉</h2>
      <h3 style={dcpColor()}>{dcp}</h3>
    </div>
  );
}

export default weatherBox;
