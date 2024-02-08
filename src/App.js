import './App.css';
import { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherForecast from './components/WeatherForecast';
import WeatherImages from './components/WeatherImages';


function App() {

  const [weatherData, setWeatherData] = useState(null);


  async function getWeather(selected) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selected.lat}&lon=${selected.lon}&appid=61b912c1dd4a0fd404e779f01415b784`);
    setWeatherData(response.data);
  }


  const switching = (e) => {
    e.preventDefault();
    setWeatherData(null);
  }

  return (
    <>
      {
        weatherData ?
          <div className='weatherContainer'>
            <WeatherImages info={weatherData} />
            <h1>{weatherData.name}</h1>
            <WeatherForecast data={weatherData} />
            <div onClick={switching} className='button'>
              <p>Return</p>
            </div>
          </div>
          :
          <div className='weatherContainer'>
            <h1>Weather</h1>
            <WeatherForm get={getWeather} />
          </div>
      }
    </>
  );
}

export default App;
