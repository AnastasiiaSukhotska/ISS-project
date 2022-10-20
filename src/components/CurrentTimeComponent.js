import { useEffect, useState } from 'react';
export const CurrentTimeComponent = () => {
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateOptions.timeZone = 'UTC';
    let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    timeOptions.timeZone = 'UTC';
    const getCurrentDate = (opt1, opt2) => {
        let date = new Date();
        let dateNow = date.toLocaleString('en-GB', opt1)
        let timeNow = date.toLocaleTimeString('en-GB', opt2)
        return { timeNow, dateNow }
    }
    const [currentTime, setCurrentTime] = useState(getCurrentDate(dateOptions, timeOptions));

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(getCurrentDate(dateOptions, timeOptions))
        }, 1000)

    }, [])

    return (
        <div className='current-time'>
            <h2>{`Current UTC time: ${currentTime.timeNow}`}</h2>
            <div>{currentTime.dateNow}</div>
        </div>
    )
}