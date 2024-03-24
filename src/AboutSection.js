import './App.css';
import pic1 from "./media/MarioandAdrian1.jpg"
import pic2 from "./media/MarioandAdrian2.jpg"


function AboutSection() {
    return (
        <div id="aboutSectionDiv">
            <section id="aboutSectionLeft">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>
                    We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
            </section>
            <section id="aboutSectionRight">
                <img class="pic2" src={pic2} alt="Mario and Adrian laughing" />
                <img class="pic1" src={pic1} alt="Mario and Adrian laughing" />
            </section>
        </div>
    )
}

export default AboutSection;