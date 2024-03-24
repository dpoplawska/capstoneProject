import { useNavigate } from "react-router-dom";
import bicycleIcon from "../media/bicycle.svg";
import bruchetta from "../media/bruchetta.svg";
import greeksalad from "../media/greeksalad.jpg";
import lemondessert from "../media/lemondessert.jpg";
import "./css/SpecialsTab.css"

function SpecialsTab({ dishName, dishPrice, dishDescription }) {
    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate("/delivery")
    }

    return (
        <section className="specials">
            {dishName === "Bruchetta" ? <img id="foodimg" src={bruchetta} alt={dishName} /> : dishName === "Greek salad" ? <img  id="foodimg" src={greeksalad} alt={dishName} /> : <img  id="foodimg" src={lemondessert} alt={dishName} />}
            <h5>{dishName}</h5>
            <h6>{dishPrice}</h6>
            <p>{dishDescription}</p>
            <button onClick={handleSubmit} style={{cursor:'pointer'}}  id="orderDeliveryButton">Order a delivery <img src={bicycleIcon} alt="Bicycle icon" /></button>
        </section>
    )
}

export default SpecialsTab;