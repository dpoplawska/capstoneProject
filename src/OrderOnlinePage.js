import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

export default function OrderOnlinePage() {
    return (
        <>
            <Nav />
                <div style={{fontSize:'32px', color:'yellowgreen', textAlign: 'center', margin: '30px'}}>
                    Page for online delivery
                </div>
            <Footer />
        </>
    )
}