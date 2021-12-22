import React,{useState,useEffect} from 'react'
import './TimeDate.css'

function TimeDate({timeZone}) {
    const [time,setTime]=useState('');
    const [date,setDate]=useState('');
    const [timeZon,setTimeZon]=useState();

    useEffect(()=>{
        setTimeZon(timeZone);
        
    },[timeZone])

    useEffect(()=>{
        const getClock=()=>{
            let now = new Date(); // Get current time
            let localOffset = now.getTimezoneOffset() * 60000;
            let localTime = now.getTime();
            let utc = localTime + localOffset;
            var found_city = utc + (1000 * timeZon);
            let nd = new Date(found_city);
            setTime(nd.toLocaleTimeString('en-IT'));
        }
        const getToday=()=>{
            let today=new Date();
            let localOffset = today.getTimezoneOffset() * 60000;
            let localTime = today.getTime();
            let utc = localTime + localOffset;
            var found_city = utc + (1000 * timeZon);
            let nd = new Date(found_city);
            setDate(nd.toDateString());
        }
        setTimeout(getClock, 1000); // Run again in 1s
        getToday();
      
        },[time])

        
    return (
        <div className='date-time-wrap'>
            <p className='time'>{ (time ==="Invalid Date") ? ' ': time}</p>
            <p className='date'>{(date ==="Invalid Date") ? ' ': date}</p>
        </div>
    )
}

export default TimeDate
