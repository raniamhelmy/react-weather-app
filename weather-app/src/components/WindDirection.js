import React ,{useState,useEffect} from 'react'
import './WindDirection.css'

function WindDirection({wind}) {

    const [direction,setDirectoin]=useState('');
    const [arrowDirection,setArrowDirectoin]=useState('');
    const [style,setStyle]=useState('');

    const getWindDirection = {
        North: "N",
        NorthNorthEast: "N/NE",
        NorthEast: "NE",
        EastNorthEast: "E/NE",
        East: "E",
        EastSouthEast: "E/SE",
        SouthEast: "SE",
        SouthSouthEast: "S/SE",
        South:"S",
        SouthSouthWest:"S/SW",
        SouthWest:"SW",
        WestSouthWest:"W/SW",
        West:"W",
        WestNorthWest:"W/NW",
        NorthWest:"NW",
        NorthNorthWest:"N/NW",
      };

      const get_Direction=(degree)=> {
        switch (true) {
          case ((degree >= 350 && degree <= 360) || (degree >=0 && degree < 12)):
            setDirectoin(getWindDirection.North);
            setArrowDirectoin('fas fa-long-arrow-alt-down');
            setStyle('');
            
            break;
          case degree >= 12 && degree < 35:
            setDirectoin(getWindDirection.NorthNorthEast);
            setArrowDirectoin('fas fa-long-arrow-alt-down');
            setStyle('fa-rotate-25');
            
            break;
          case degree >= 35 && degree <57:
            setDirectoin(getWindDirection.NorthEast);
            setArrowDirectoin('fas fa-long-arrow-alt-down');
            setStyle('fa-rotate-45');
            
            break;
          case degree >= 57 && degree <80:
            setDirectoin(getWindDirection.EastNorthEast);
            setArrowDirectoin('fas fa-long-arrow-alt-down');
            setStyle('fa-rotate-65');
            
            break;
          case degree >= 80 && degree < 102:
            setDirectoin(getWindDirection.East);
            setArrowDirectoin('fas fa-long-arrow-alt-left');
            setStyle('');
            
            break;
            case degree >= 102 && degree < 125:
                setDirectoin(getWindDirection.EastSouthEast);
                setArrowDirectoin('fas fa-long-arrow-alt-left');
                setStyle('fa-rotate-25');
            
            break;
          case degree >= 125 && degree <147:
            setDirectoin(getWindDirection.SouthEast);
            setArrowDirectoin('fas fa-long-arrow-alt-left');
            setStyle('fa-rotate-45');
            
            
            break;
          case degree >= 147 && degree <170:
            setDirectoin(getWindDirection.SouthSouthEast);
            setArrowDirectoin('fas fa-long-arrow-alt-left');
            setStyle('fa-rotate-65');
            
            break;
          case degree >= 170 && degree <192:
            setDirectoin(getWindDirection.South);
            setArrowDirectoin('fas fa-long-arrow-alt-up');
            setStyle('');
            
            break;
          case degree >= 192 && degree <215:
            setDirectoin(getWindDirection.SouthSouthWest);
            setArrowDirectoin('fas fa-long-arrow-alt-up');
            setStyle('fa-rotate-25');
            
            break;
          case degree >= 215 && degree <237:
            setDirectoin(getWindDirection.SouthWest);
            setArrowDirectoin('fas fa-long-arrow-alt-up');
            setStyle('fa-rotate-45');
            
            break;
          case degree >= 237 && degree <260:
            setDirectoin(getWindDirection.WestSouthWest);
            setArrowDirectoin('fas fa-long-arrow-alt-up');
            setStyle('fa-rotate-65');
            
            break;
          case degree >= 260 && degree <282:
            setDirectoin(getWindDirection.West);
            setArrowDirectoin('fas fa-long-arrow-alt-right');
            setStyle('');
            
            break;
          case degree >= 282 && degree <305:
            setDirectoin(getWindDirection.WestNorthWest);
            setArrowDirectoin('fas fa-long-arrow-alt-right');
            setStyle('fa-rotate-25');
            
            break;
          case degree >= 305 && degree <327:
            setDirectoin(getWindDirection.NorthWest);
            setArrowDirectoin('fas fa-long-arrow-alt-right');
            setStyle('fa-rotate-45');
            
            break;
          case degree >= 327 && degree <=349:
            setDirectoin(getWindDirection.NorthNorthWest);
            setArrowDirectoin('fas fa-long-arrow-alt-right');
            setStyle('fa-rotate-65');
            
            break;
          default:
            setDirectoin('');
            setStyle('');
            break;
           
        }
      }

      useEffect(()=>{
        get_Direction(wind);
      },[wind])

    return (
        <span>
            <b style={{color:'#fff'}}><i className={`${arrowDirection} ${style}`}  ></i> {direction} </b>
        </span>
    )
}

export default WindDirection
