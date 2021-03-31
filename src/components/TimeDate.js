import React from 'react'

const CurrentDT = () => {
    const currentDate = new Date();
    const name = "Ujjawal Sharma";
    const currentTime = new Date().toLocaleTimeString();
    return (
        <div>
        <h1>{`My name is ${name}`}</h1>
        <p>{`Current Date is ${currentDate}`}</p>
        <p>{`Current Time is ${currentTime}`}</p>
        </div>
    )
}

export default CurrentDT
