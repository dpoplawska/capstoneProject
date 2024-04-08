import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm.js';
import { TimeOptionsProvider } from './TimeOptionsContext.js';
import BookingPage from './BookingPage.js';
import HeroSection from './HeroSection.js';
import TestimonialsSection from './TestimonialsSection.js';

test('Renders the BookingForm button', () => {
    render(<TestimonialsSection />);
    const button = screen.getByText("Diana");
    expect(button).toBeInTheDocument();
})