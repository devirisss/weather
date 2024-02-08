const WeatherForecast = ({ data }) => {

    return (
        <div className='weatherCurrent'>
            <p className='weatherTemp'>{Math.floor(data.main.temp - 273.15)} &deg;C</p>
            <p className='weatherFeel'>Feels like {Math.floor(data.main.feels_like - 273.15)} &deg;C</p>
            <p className='weatherCondition'>{data.weather[0].main}</p>
        </div>
    )
}

export default WeatherForecast;