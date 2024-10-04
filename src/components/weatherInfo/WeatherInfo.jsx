/* eslint-disable react/prop-types */
import '../weatherInfo/WeatherInfo.css'

export function WeatherInfo({ weather }) {
    if (!weather || !weather.weather || !weather.weather) {
        return null;
    }
    console.log(weather)
    const srcImagens = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={srcImagens} alt="Weather Icon" />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {weather.main.humidity}</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    );
};
