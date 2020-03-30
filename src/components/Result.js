import React from 'react'

export default class Result extends React.Component {

  render() {
    const { name, weather, main, wind } = this.props.weatherData
    const curWeather = weather[0]

    return(
      <div>
        <div className='result-wrapper'>
          <div className='general'>
            <h4>{name}</h4>
            <img src={`http://openweathermap.org/img/wn/${curWeather.icon}@2x.png`} alt={`current weather of ${name}`}/>
            <p>{curWeather.description}</p>
            <p>{`${main.temp} °C`}</p>
          </div>
          <div className='more-info'>
            <div>
              <div>{wind.speed}</div>
              <h5>Wind</h5>
            </div>
            <div>
              <div>{main.humidity}</div>
              <h5>Humidity</h5>
            </div>
            <div>
              <div>{main.temp_max}</div>
              <h5>Max</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}