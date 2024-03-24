import './App.css';
import RatingTab from './components/RatingTab';

function TestimonialsSection() {
    return(
    <section class="testimonials">
        <h2 class="testimonialsText">Testimonials</h2>
        <section className="ratings">
            <RatingTab personName="Anna" review="I looove all pastas here!!" />
            <RatingTab personName="Melania" review="Their desserts are fantastic."/>
            <RatingTab personName="Michael" review="Even margarita tastes amazing at Little Lemon"/>
            <RatingTab personName="Diana" review="Their interior design is top tier. Also food is incredible, I truly recommend."/>
        </section>
        </section>

        )
}

export default TestimonialsSection;