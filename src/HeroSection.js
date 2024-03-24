import foodPhoto from "./media/restauranfood.jpg"
import './App.css';


function HeroSection() {
    return (
        <div id="heroSectiondiv">
            <section id="mainLeftSection">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>
                    We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className="reserveTableButton">Reserve a table</button>
            </section>
            <section id="mainRightSection">
                <img src={foodPhoto} alt="Little Lemon restaurant food" />
            </section>
        </div>
    )
}

export default HeroSection;