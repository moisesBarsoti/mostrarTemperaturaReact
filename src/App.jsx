import { useState, useRef } from 'react'
import axios from 'axios';
import './App.css'
import { WeatherInfo } from './components/weatherInfo/weatherInfo';

export const App = () => {
  const [weather, setWeather] = useState({});
  const inputRef = useRef();

  async function searchCity() {
      const city = inputRef.current.value;
      const key = "a284ab0ca0c63358d03072e03084f94c";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
      const apiData = await axios.get(url);
      setWeather(apiData.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      
      <input 
      type="text" 
      placeholder='Digite o nome da cidade'
      required
      autoFocus
      ref={inputRef}
      />
      
      <button 
      onClick={searchCity}
      title='Buscar cidade'
      >
        Buscar
      </button>

      {weather && <WeatherInfo weather={weather} />}
    </div>
  )
}