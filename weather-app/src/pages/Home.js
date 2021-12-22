import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import WeatherIcon from '../components/WeatherIcon'
import TimeDate from '../components/TimeDate'
import WindDirection from '../components/WindDirection'
import SunRiseSet from '../components/SunRiseSet'
import Loading from '../components/Loading'
import './Home.css'

function Home() {
  
    /*Variables to set longitude & latitude  */
    const [longitude,setLongitude]=useState();
    const [latitude,setLatitude]=useState();

     /*Variable for loading  */
    const [loading,setLoading]=useState(' ');

     /*Variables to get data from user  */
    const [query,setQuery]=useState('');
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');

     /*Variables to set response data from weatherapi  */
    const [data,setData]=useState([]);
    
    const [main,setMain]=useState('');
    const [sys,setSys]=useState('');
    const [weather,setWeather]=useState('');
    const [wind,setWind]=useState('');

    /*Variables to set background image  */
    const [backGround,setBackGround]=useState('');



    /*******Put your access key in the .env file and call it here ********/
    const accessKey = process.env.REACT_APP_WEATHER_KEY;

    /*Convert fahrenheit to celsius function  */
    const getCelsius=(temp)=>{
        let celsius=0; 
        celsius= Math.floor(temp - 273.15);
        return celsius;
    }

    /*fetch API function  */
      const getWeather= async()=>{
        try{
          if(city){
          let response= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${accessKey}`);
           const {main,sys,wind}=response.data;
           const weather=response.data.weather[0];
           setMain(main);
           setSys(sys);
           setWeather(weather);
           setWind(wind);
           setData(response.data);
          } 
        }
        catch(e){
            console.log('Error happened:',e);
        }
           
      }

    /*Get Location function  */
      const getMyLocation=async()=> {
        setLoading(true);
        const location =  (window.navigator && window.navigator.geolocation);
        
        if (location) {
          
          location.getCurrentPosition((position) => {
           
            setLatitude( position.coords.latitude)
            setLongitude(position.coords.longitude)

            
          }, (error) => {
            console.log('Error happened:',error);
            alert('You have disabled location service. To use this application please allow it to use your location. ')
            setLatitude(0);
            setLongitude(0);
            return;

          })
        }
        try{
        if(latitude){
        let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${accessKey}`);
        const {main,sys,wind}=response.data;
           const weather=response.data.weather[0];
           setMain(main);
           setSys(sys);
           setWeather(weather);
           setWind(wind);
          
           setData(response.data);
           setLoading(false);
        }
      }catch(error){
        console.log('Error happened:',error);
      }
      }


    /*Handle user submission function */
      const handleSubmit =()=>{
        if (query.indexOf(',') !== -1){
          let strs = query.split(',');
          
          setCity(strs[0]);
          setCountry(strs[1]);
          
        }
        else{
          setCity(query);
          setCountry('')
        
        }
            
    }

    /*Get Background function  */
      const getBackGround = {
        ClearSkyDay: "home-container-clear-day",
        ClearSkyNight: "home-container-clear-night",
        FewCloudsDay: "home-container-clouds-day",
        FewCloudsNight: "home-container-clouds-night",
        ScatteredClouds: "home-container-clouds",
        BrokenClouds: "home-container-broken-clouds",
        ShowerRain: "home-container-shower-rain",
        RainDay: "home-container-rain-day",
        RainNight:"home-container-rain-night",
        Thunderstorm:"home-container-thunderstorm",
        Snow:"home-container-snow",
        Mist:"home-container-mist",
        blank:"home-container-blank",
        
      };

      const get_BackGround=(icon)=> {
        switch (true) {
          case (icon === "01d"):
            setBackGround(getBackGround.ClearSkyDay);
            
            
            break;
            case (icon === "01n"):
            setBackGround(getBackGround.ClearSkyNight);
            
            break;
            case (icon === "02d"):
            setBackGround(getBackGround.FewCloudsDay);
            
            break;
            case (icon === "02n"):
            setBackGround(getBackGround.FewCloudsNight);
            
            break;
            case (icon === "03d" || icon === "03n"):
            setBackGround(getBackGround.ScatteredClouds);
            
            break;
            case (icon === "04d" || icon === "04n"):
            setBackGround(getBackGround.BrokenClouds);
            
            break;
            case (icon === "09d" || icon === "09n"):
            setBackGround(getBackGround.ShowerRain);
            
            
            break;
            case (icon === "10d" ):
            setBackGround(getBackGround.RainDay);
            
            break;
            case (icon === "10n"):
            setBackGround(getBackGround.RainNight);
            
            break;
            case (icon === "11d" || icon === "11n"):
            setBackGround(getBackGround.Thunderstorm);
            
            break;
            case (icon === "13d" || icon === "13n"):
            setBackGround(getBackGround.Snow);
            
            break;
            case (icon === "50d" || icon === "50n"):
            setBackGround(getBackGround.Mist);
            
            break;
       
            default:
            setBackGround(getBackGround.blank);
            break;
           
        }
      }


      useEffect(()=>{
          getMyLocation()
        },[(latitude, longitude)])

      useEffect(()=>{
       getWeather();
      },[query,city,country])

      useEffect(()=>{
        get_BackGround(weather.icon);
      },[weather.icon])

     
    
  

    return (
    <>
  
    {loading ? <Loading/> : 
        <>                      
          

            <div className={backGround} >
                
              <div className='home-wrap'>
                  
                    <div className='city'>
                      <div className='city-info'>
                        <h2 style={{margin:'10px auto',color:'#fff'}}>{`${data.name}, ${sys.country}`}</h2>
                        
                        </div>
                        <SunRiseSet data={sys} timeZone={data.timezone}/>
                        
                    </div>
                        
                    <div className='home-date-time'>
                        <TimeDate timeZone={data.timezone}/> 
                        
                        <div className='temp-wrap'> 
                            <p className='temperature'>{!isNaN(main.temp) ? getCelsius(main.temp) : 0}<sup>o</sup>c</p>
                        </div>
                        
                    </div>
                        
              </div>
              <div className='weather-details'> 
                    <div className='weather-details-wrap'>
                        <WeatherIcon id={weather.id} icon={weather.icon}/>
                        <p  className='current-weather-state'> {weather.main} </p>
                        <div className='search-bar'>
                            <input className='input' placeholder="Search any city..." value={query} onChange={(e)=>setQuery(e.target.value)}  />
                           
                            <button  type='submit' className='submit-button' onClick={handleSubmit} ><i className="fas fa-search" ></i></button>
                        </div>
        
                        
                        <div className='summery-item'>
                            <span className='summery-item-text'style={{marginTop:'3px'}}><i className="fas fa-thermometer-half"></i> Temperature</span>
                            <span className='summery-item-temp'><b style={{color:'#fff', fontSize:'16px'}}>{!isNaN(main.temp_max) ?getCelsius(main.temp_max): 0}<sup>o</sup> / {!isNaN(main.temp_min)? getCelsius(main.temp_min):0}<sup>o</sup></b></span>

                        </div>
                        <hr className='border-color'/>
                        <div className='summery-item'>
                            <span className='summery-item-text'><i className="fas fa-tint"></i> Humidity</span>
                            <span className='summery-item-temp'><b style={{color:'#fff'}}>{main.humidity} %</b></span>

                        </div>
                        <hr className='border-color'/>
                        <div className='summery-item'>
                            <span className='summery-item-text'><i className="fas fa-eye"></i> Visibility</span>
                            <span className='summery-item-temp'><b style={{color:'#fff'}}>{data.visibility} mi</b></span>

                        </div>
                        <hr className='border-color'/>
                        <div className='summery-item'>
                            <span className='summery-item-text'><i className="fas fa-wind"></i> Wind Speed</span>
                            <span className='summery-item-temp'><b style={{color:'#fff'}}>{wind.speed} Km/h</b></span>

                        </div>
                        <hr className='border-color'/>
                        <div className='summery-item'>
                            <span className='summery-item-text'><i className="fas fa-compass"></i> Wind Direction</span>
                            <span className='summery-item-temp'><WindDirection wind={wind.deg}/></span>

                        </div>
                    
                    </div>  
                
                      


              </div>
                
              
              
            </div> 
        </>
    }
    
    </>)
}

export default Home



            