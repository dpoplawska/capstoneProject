import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import TestimonialsSection from "./TestimonialsSection";
import React from "react"


export default function Main() {
    return (
        <main>
            <HeroSection/>
            <HighlightsSection />
            <TestimonialsSection />
            <AboutSection/>
        </main>
    )
}
