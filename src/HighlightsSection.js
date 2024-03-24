import SpecialsTab from "./components/SpecialsTab";

function HighlightsSection() {
    return (
        <>
        <section className="highlights">
            <h2>This weeks specials!</h2>
            <button id="onlineMenu">Online Menu</button>
            </section>
        <section className="specialsTabs">
            <SpecialsTab dishName="Greek salad" dishPrice="$6.99" dishDescription="Our salad consists of sliced cucumbers, tomatoes, olives red onion, and feta cheese." />
            <SpecialsTab dishName="Bruchetta" dishPrice="$12.99" dishDescription="An Italian appetizer or antipasti that starts with a base of toasted or grilled bread." />
            <SpecialsTab dishName="Lemon dessert" dishPrice="$5.00" dishDescription="Light, fluffy, and deliciously tangy, this Lemon Dessert is the perfect dessert for any occasion." />
        </section>
        </>
    )
}

export default HighlightsSection;