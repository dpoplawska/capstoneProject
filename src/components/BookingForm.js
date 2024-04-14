import React, { useState } from "react"
import "./css/BookingForm.css"
import { useEffect } from "react"
import { useTimeOptions } from "../TimeOptionsContext"
import { useNavigate } from "react-router-dom";


export default function BookingForm({ options, onDateChange }) {
    let navigate = useNavigate();

    const timeOptions = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const occasionsOptions = ['Birthday', 'Anniversary', 'None']

    const { availableTimes, setAvailableTimes } = useTimeOptions();

    const [data, setData] = useState({});
    const [selectedDate, setSelectedDate] = useState()
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value)
    }

    // fetchAPI()

    // const updateTimeOptions = () => {
    //     setAvailableTimes(availableTimes) // Set new time options as needed
    // };

    const [selectedTime, setSelectedTime] = useState(timeOptions[0])
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value)
    }


    const [selectedGuestsNumber, setSelectedGuestsNumber] = useState('1')
    const handleGuestsNumberChange = (event) => {
        setSelectedGuestsNumber(event.target.value)
    }
    const [selectedOccasion, setSelectedOcassion] = useState(occasionsOptions[0])
    const handleOccasionChange = (event) => {
        setSelectedOcassion(event.target.value)
    }

    const [isClicked, setIsClicked] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("reservation in progress")
        setIsClicked(!isClicked)
        navigate("/confirmed-booking", {
            state: {
                selectedDate: selectedDate,
                selectedTime: selectedTime,
                selectedGuestsNumber: selectedGuestsNumber,
                selectedOccasion: selectedOccasion
            }
        });
    }

    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        if (selectedDate === undefined || selectedGuestsNumber === undefined || selectedGuestsNumber === '0' || selectedTime === undefined || selectedOccasion === undefined) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [selectedDate, selectedGuestsNumber, selectedOccasion, selectedTime]);

    return (
        <>
            <form id="bookingForm" style={{ display: "grid", gap: "20px", margin: "20px" }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
                    {timeOptions.map(element => (
                        <option key={element} value={element}>{element}</option>
                    ))}
                </select>
                <label htmlFor="guests" >Number of guests</label>
                <input type="number" value={selectedGuestsNumber} onChange={handleGuestsNumberChange} placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange}>
                    {occasionsOptions.map(element => (
                        <option key={element} value={element}>{element}</option>
                    ))}
                </select>
                <button type="submit" id="reserveButton" disabled={isDisabled} onClick={handleSubmit}>Book now</button>
                {selectedGuestsNumber === '0' && (
                    <h4 id="disabledInfo" style={{ color: "red" }}>Number of guests cannot be 0</h4>
                )}
                {selectedGuestsNumber != '0' && isDisabled && (
                    <h4 id="disabledInfo" style={{ color: "red" }}>Please fill out all fields</h4>
                )}
            </form>
        </>
    )
}