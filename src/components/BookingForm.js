import React, {useState} from "react"
import "./css/BookingForm.css"

export default function BookingForm() {
    const today = new Date();

    const timeOptions = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const occasionsOptions = ['Birthday', 'Anniversary']


    const [selectedTime, setSelectedTime] = useState(timeOptions[0])
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value)
    }
    const [selectedDate, setSelectedDate] = useState()
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value)
    }
    const [selectedGuestsNumber, setSelectedGuestsNumber] = useState('1')
    const handleGuestsNumberChange = (event) => {
        setSelectedGuestsNumber(event.target.value)
    }
    const [selectedOccasion, setSelectedOcassion] = useState()
    const handleOccasionChange = (event) => {
        setSelectedOcassion(event.target.value)
    }
    

    return (
        <>
            <form id="bookingForm" style={{ display: "grid", gap: "20px", margin: "20px" }}>
                <label for="res-date">Choose date</label>
                    <input type="date" id="res-date"  value={selectedDate}  onChange={handleDateChange} />
                <label for="res-time">Choose time</label>
               <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
                  {timeOptions.map(element => (
                       <option key={element} value={element}>{element}</option>
                  ))}
                </select>
                <label for="guests" >Number of guests</label>
                <input type="number" value={selectedGuestsNumber} onChange={handleGuestsNumberChange} placeholder="1" min="1" max="10" id="guests"/>
                <label for="occasion">Occasion</label>
                <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange}>
                    {occasionsOptions.map(element => (
                       <option key={element} value={element}>{element}</option>
                  ))}
                </select>
                <button type="submit" id="reserveButton" onSubmit={alert("Your reservation will be confirmed up to 10 minutes")}>Make your reservation</button>
            </form>

        </>
    )
}