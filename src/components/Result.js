import React from 'react'

export default class Result extends React.Component {

  render() {
    const { name, weather, main, wind } = this.props.weatherData
    const curWeather = weather[0]

    return(
      <div>
        <div className='result-wrapper'>
          <h4 className='name'>{name}</h4>
          <div className='general'>
            <img src={`http://openweathermap.org/img/wn/${curWeather.icon}@2x.png`} alt={`current weather of ${name}`}/>
            <p>{curWeather.description}</p>
            <p>{`${main.temp}°`}</p>
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