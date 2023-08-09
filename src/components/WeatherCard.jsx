import React, { useState } from 'react'

const WeatherCard = ({weather,temperature}) => {


const [isCelsius, setIsCelsius] = useState(true)
const handleChangeTemperature=()=>{
    setIsCelsius(!isCelsius)
  }
  const ulr1="/icons/animated/01d.svg"

  return (
    <div className='container'>
     <h1> <span>W</span>EATHE<span>R</span></h1>
     <h4> App </h4>
   
    {/* ************   TITULO DE LA LOCALIDAD *************  */}
     <header className='card__titles'>
          <h2>{weather?.name} |  {weather?.sys.country}  </h2>
     </header>

    <article className='card'>
         
            
            <section className='card__body'>
                 <header className='card__body--icon-temp'> {/* CONTENEDOR ICONO Y DESCRIPCION DEL CLIMA */}
                     
                       <footer>
                            {isCelsius
                            ? <h2><span>{temperature?.celsius} °C</span></h2>
                            : <h2><span>{temperature?.fahrenheit} °F</span></h2>
                            }
                            
                            <button onClick={handleChangeTemperature}>Change to {isCelsius ? "°F" : "°C"}</button>
                       </footer>

                       <div>
                          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                         
                          {<h3>{weather?.weather[0].description}</h3>}
                      </div>
                </header> 
                
                <article className='card__body-info'>
                     
                    
                    <ul>
                            

                            <li><img src="/public/icons/weather-2_icon-icons.com_67742.svg" alt="" />Clouds: <span>{weather?.clouds.all} %</span></li>
                            <li><img src="/public/icons/mdi_weather-windy.svg" alt="" />Wind speed: <span>{weather?.wind.speed} m/s </span></li>
                            {/* <li><span>Direc./viento: {weather?.wind.deg}°</span></li> */}
                            {/* <li><span>Sens. Termica:{weather?.main.feels_like} °K</span></li> */}
                            <li><img src="/public/icons/uil_raindrops-alt.svg" alt="" />Humidity:<span>{weather?.main.humidity} %</span></li>
                            <li><img src="/public/icons/tabler_arrow-wave-right-down.svg" alt="" />Pressure: <span>{weather?.main.pressure} hPa </span></li>
                            <li><span>------------</span></li>
                            <li>Visibility: <span>{weather?.visibility} mts.</span></li>
                             
                    </ul>
                
                </article>

            </section>
            
      
    </article>
    </div>
  )
}

export default WeatherCard