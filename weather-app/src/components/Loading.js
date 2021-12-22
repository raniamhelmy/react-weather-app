import React from 'react'
import './Loading.css' 
function Loading() {
    return (
        <div className='loading-container'>
            <div className='loading-container-wrap'>
             <svg version="1.1" id="cloudFogAlt" className="climacon climacon_cloudFogAlt" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px"viewBox="15 15 70 70" enableBackground="new 15 15 70 70" xmlSpace="preserve"  width="230" height="170">
                    <g className="climacon_iconWrap climacon_iconWrap-cloudFogAlt" fill='#fff'>
                    <g className="climacon_wrapperComponent climacon_wrapperComponent-Fog">
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M29.177,55.641c-0.262-0.646-0.473-1.314-0.648-2h43.47c0,0.685-0.069,1.349-0.181,2H29.177z"/>
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M36.263,35.643c2.294-1.271,4.93-1.999,7.738-1.999c2.806,0,5.436,0.73,7.728,1.999H36.263z"/>
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M28.142,47.642c0.085-0.682,0.218-1.347,0.387-1.999h40.396c0.552,0.613,1.039,1.281,1.455,1.999H28.142z"/>
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M29.177,43.643c0.281-0.693,0.613-1.359,0.984-2h27.682c0.04,0.068,0.084,0.135,0.123,0.205c0.664-0.114,1.339-0.205,2.033-0.205c2.451,0,4.729,0.738,6.627,2H29.177z"/>
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M31.524,39.643c0.58-0.723,1.225-1.388,1.92-2h21.123c0.689,0.61,1.326,1.28,1.902,2H31.524z"/>
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M71.816,51.641H28.142c-0.082-0.656-0.139-1.32-0.139-1.999h43.298C71.527,50.285,71.702,50.953,71.816,51.641z"/>
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M71.301,57.641c-0.246,0.699-0.555,1.367-0.921,2H31.524c-0.505-0.629-0.957-1.299-1.363-2H71.301z"/>
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                        d="M33.444,61.641h35.48c-0.68,0.758-1.447,1.435-2.299,2H36.263C35.247,63.078,34.309,62.4,33.444,61.641z"/>
                    </g>
                </g>
             </svg>
            <h3 className='loading-title'>Detecting Your Location</h3>
            <p className='loading-desc'>Your current location will be displayed on the App &#38; used for calculating real time weather</p>
          </div>
        </div>
    )
}

export default Loading
