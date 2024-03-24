import foodPhoto from "./media/restauranfood.jpg"
import './App.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HeroSection() {
    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate("/reservations")
    }

    return (
        <div id="heroSectiondiv">
            <section id="mainLeftSection">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>
                    We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button onClick={handleSubmit} style={{cursor:'pointer'}} className="reserveTableButton">Reserve a table</button>
            </section>
            <section id="mainRightSection">
                <img src={foodPhoto} alt="Little Lemon restaurant food" />
            </section>
        </div>
    )
}