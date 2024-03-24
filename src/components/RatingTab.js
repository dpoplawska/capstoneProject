import anna from "../media/anna.jpg";
import melania from "../media/melania.jpg";
import michael from "../media/michael.jpg";
import diana from "../media/diana.jpg";
import "./css/RatingTab.css"

 function RatingTab({ personName, review }) {

    return (
        <section className="ratingSection">
            <h3>Rating</h3>
            {personName === "Diana" ? <img id="personImg" src={diana} alt={personName} /> :
                personName === "Melania" ? <img id="personImg" src={melania} alt={personName} /> :
                    personName === "Anna" ? <img id="personImg" src={anna} alt={personName} /> :
                        <img id="personImg" src={michael} alt={personName} />}
            <h5>{personName}</h5>
            <p>{review}</p>
        </section>
    )
}

export default RatingTab;