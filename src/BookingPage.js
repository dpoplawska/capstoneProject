import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import BookingForm from "./components/BookingForm"

export default function BookingPage() {
    return (
        <>
            <Nav />
            <BookingForm/>
            <Footer /> 
        </>
    )
}