import { useEffect , useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("navy");
  const cities = ['paris','new york', 'tokyo', 'seoul'];

  const getCurrentLocation = () => { 
    
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치",lat,lon);
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat,lon) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8f4e651833dd6077a47a6734c9d47673&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f4e651833dd6077a47a6734c9d47673&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  }

  useEffect(() => {
    if(city ==""){
      getCurrentLocation()
    } else {
      getWeatherByCity();
    }
  },[city])


  return (
    // 1. 현재 위치기반의 날씨가  보인다.
    // 2. 날씨정보(도시,섭씨,화씨)
    // 3. 5개의 버튼이 있다. (1개는 현재도시, 4가지는 각 다른 도시)
    // 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
    // 5. 현재위치버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
    // 6. 데이터를 들고오는동안 로딩 스피너가 돈다.
    <div>
        
          {loading ? (
            <div className="container">
                <ClipLoader color={color} loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/>
            </div>
          ) : (
            <div className="container">
              <WeatherBox weather={weather}/>
              <WeatherBtn cities={cities} setCity={setCity}/>
            </div>
          )}
          
        
    </div>
  );
}

export default App;
