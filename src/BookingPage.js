import React, { useReducer } from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import BookingForm from "./components/BookingForm"
import "./App.css"
import { useTimeOptions } from "./TimeOptionsContext"

function timesReducer(state, action) {
    switch (action.type) {
        case 'updateTimes':
            return state;
        default:
            throw new Error();
    }
};

function initializeTimes() {
    return [];
}

export default function BookingPage() {
    const { initialAvailableTimes } = useTimeOptions;
    // const [availableTimes, dispatch] = useReducer(timesReducer, initialAvailableTimes, initializeTimes)

    // function updateTimes(selectedDate) {
    //     dispatch({ type: 'updateTimes', payload: selectedDate });
    // }

    return (
        <>
            <Nav />
            <h3 id="makeAReservation">Make a table reservation</h3>
            <BookingForm timeOptions={initialAvailableTimes} onDateChange={''} />
            <Footer />
        </>
    )
}