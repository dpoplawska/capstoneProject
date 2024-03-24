import "./App.css"
import restaurantPhoto from "./media/restaurant.jpg"
import {Routes, Route, Link} from 'react-router-dom';


function FooterNavigation() {
    return (
        <section id="footerNavigation">
            <section id="leftPart">
                <img src={restaurantPhoto} alt="Restaurant inerior" />
            </section>
            <section id="doormatNavigation">
                     <h3> Navigation</h3>
                        <ul>
                            <li><Link to="/" id='homeLink'>Home</Link></li>
                            <li><Link to="/about" id='aboutLink'>About</Link></li>
                            <li><Link to="/menu" id='menuLink'>Menu</Link></li>
                            <li><Link to="/reservations" id='reservationsLink'>Reservations</Link></li>
                            <li><Link to="/delivery" id='orderOnlineLink'>Order online</Link></li>
                            <li><Link to="/login" className='loginLink'>Login</Link></li>
                        </ul>
            </section>
            <section id="contact">
                    <h3>Contact</h3>
                    <nav>
                        <ul>
                            <li><Link to="/address" id='addressLink'>Address</Link></li>
                            <li><Link to="/phoneNumber" id='phoneNumberLink'>Order online</Link></li>
                            <li><Link to="/email" className='emailLink'>Login</Link></li>
                        </ul>
                    </nav>
            </section>
            <section id="socialMediaLinks">
                    <h3>Social media links</h3>
                    <nav>
                            <ul>
                            <li><Link to="/address" id='addressLink'>Address</Link></li>
                            <li><Link to="/phoneNumber" id='phoneNumberLink'>Order online</Link></li>
                            <li><Link to="/email" className='emailLink'>Login</Link></li>
                        </ul>
                    </nav>
                </section>
        </section>
    )
}

export default FooterNavigation;