import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function ConfirmedBooking() {
    let navigate = useNavigate();
    let location = useLocation();

    const { selectedDate, selectedTime, selectedGuestsNumber, selectedOccasion } = location.state || {};

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/menu")
    }

    return (
        <>
            <Nav/>
             <div id="message"><h4>Booking complete. Here's your reservation</h4></div>
                        <div id="reservationInfo">
                            <div>
                            <ul>
                                <li>Date: {selectedDate}</li>
                                <li>Time: {selectedTime}</li>
                                <li>Number of people: {selectedGuestsNumber}</li>
                                <li>Occasion: {selectedOccasion}</li>
                            </ul>
                </div>
            </div>
            <div id="ourMenu">
                <h5>Thank your for choosing our restaurant.</h5>
                <h5>Look at our menu while you're waiting for the visit.</h5>
                <button  onClick={handleSubmit} style={{cursor:'pointer'}} id="onlineMenu">Menu</button>
            </div>
            <Footer/>
        </>
    )
}