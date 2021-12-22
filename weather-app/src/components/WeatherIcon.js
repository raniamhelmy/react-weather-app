import React ,{useState,useEffect} from 'react'

import ClearNight from './weather-icons/ClearNight'
import Cloud from './weather-icons/Cloud'
import CloudNight from './weather-icons/CloudNight'
import CloudDay from './weather-icons/CloudDay'
import CloudBroken from './weather-icons/CloudBroken'
import Mist from './weather-icons/Mist'
import Wind from './weather-icons/Wind'
import ClearDay from './weather-icons/ClearDay'
import Thunderstorm from './weather-icons/Thunderstorm'
import Drizzle from './weather-icons/Drizzle'
import Rain from './weather-icons/Rain'
import Tornado from './weather-icons/Tornado'
import Snow from './weather-icons/Snow'

import './WeatherIcon.css'

function WeatherIcon({icon,id}) {

    

    const [iconType,setIconType]=useState('');

    const getWeatherIcon = {
        Thunderstorm: <Thunderstorm/>,
        Drizzle: <Drizzle/>,
        Rain: <Rain/>,
        Snow: <Snow/>,
        ClearDay: <ClearDay/>,
        ClearNight: <ClearNight/>,
        CloudDay:<CloudDay/>,
        CloudNight:<CloudNight/>,
        CloudScattered:<Cloud/>,
        CloudBroken:<CloudBroken/>,
        Horcans:<Tornado/>,
        Windy:<Wind/>,
        Atmosphere: <Mist/>,  
        None: '',  
      };

      const get_WeatherIcon=(rangeId,icon)=> {
        switch (true) {
          case rangeId >= 200 && rangeId < 232:
          setIconType(getWeatherIcon.Thunderstorm); 
          break;

          case rangeId >= 300 && rangeId <= 321:
          setIconType(getWeatherIcon.Drizzle);
          break;

          case rangeId >= 500 && rangeId <= 521:
          setIconType(getWeatherIcon.Rain);
          break;

          case rangeId >= 600 && rangeId <= 622:
          setIconType(getWeatherIcon.Snow);
          break;

          case ((rangeId === 741) || (rangeId >= 751 && rangeId <= 761)):
          setIconType(getWeatherIcon.Windy);
          break;

          case ((rangeId === 731) || (rangeId >= 701 && rangeId < 741) ||  (rangeId >= 762 && rangeId <= 771) ):
          setIconType(getWeatherIcon.Atmosphere);
          break;

          case (rangeId === 781):
          setIconType(getWeatherIcon.Horcans);
          break;

          case (rangeId === 800 && icon === "01d"):
          setIconType(getWeatherIcon.ClearDay);
          break;

          case (rangeId === 800 && icon === "01n"):
          setIconType(getWeatherIcon.ClearNight);
          break;

          case (rangeId === 801 && icon === "02d"):
          setIconType(getWeatherIcon.CloudDay);
          break;

          case (rangeId === 801 && icon === "02n"):
          setIconType(getWeatherIcon.CloudNight);
          break;

          case (rangeId === 802):
          setIconType(getWeatherIcon.CloudScattered);
          break;

          case rangeId === 803 || rangeId === 804:
          setIconType(getWeatherIcon.CloudBroken);
          break;
          
          default:
          setIconType(getWeatherIcon.None);
          break;
           
        }
      }

     

      useEffect(()=>{
        get_WeatherIcon(id,icon);
      },[id,icon])

    return (
        <>
           {iconType}
        </>
    )
}

export default WeatherIcon
