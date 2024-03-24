import bicycleIcon from "../media/bicycle.svg";
import bruchetta from "../media/bruchetta.svg";
import greeksalad from "../media/greeksalad.jpg";
import lemondessert from "../media/lemondessert.jpg";
import "./css/SpecialsTab.css"

function SpecialsTab({ dishName, dishPrice, dishDescription }) {
    return (
        <section className="specials">
            {dishName === "Bruchetta" ? <img id="foodimg" src={bruchetta} alt={dishName} /> : dishName === "Greek salad" ? <img  id="foodimg" src={greeksalad} alt={dishName} /> : <img  id="foodimg" src={lemondessert} alt={dishName} />}
            <h5>{dishName}</h5>
            <h6>{dishPrice}</h6>
            <p>{dishDescription}</p>
            <button id="orderDeliveryButton">Order a delivery <img src={bicycleIcon} alt="Bicycle icon" /></button>
        </section>
    )
}

export default SpecialsTab;