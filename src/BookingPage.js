import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

export default function BookingPage() {
    return (
        <>
            <Nav />
                <div style={{fontSize:'32px', color:'yellowgreen', textAlign: 'center', margin: '30px'}}>
                    Page for online booking
                </div>
            <Footer /> 
        </>
    )
}