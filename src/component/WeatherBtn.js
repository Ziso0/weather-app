import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const WeatherBtn = ({cities, setCity}) => {
  console.log("cities?" , cities);
  return (
    <div className="weatherBtn">
        <Button variant="outline-primary" onClick={()=>setCity("")}>Current</Button>
        
        {cities.map((item, index) => (
             <Button variant="outline-secondary" key={index} onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherBtn