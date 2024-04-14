import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm.js';
import { TimeOptionsProvider } from './TimeOptionsContext.js';
import BookingPage from './BookingPage.js';
import HeroSection from './HeroSection.js';
import TestimonialsSection from './TestimonialsSection.js';
import { BrowserRouter, Router } from 'react-router-dom';

test('Render testimonials section', () => {
    render(<TestimonialsSection />);
    const name = screen.getByText("Diana");
    expect(name).toBeInTheDocument();
})


test('Select booking date in Booking Form', () => {
    <Router>
        render(<BookingForm />);
        const button = screen.getByText("Choose date");
        screen.setSelectedDate("02-05-2024")
        expect("02-05-2024").toBeInTheDocument();
    </Router>
})

test('Select wrong number of guests in Booking Form', () => {
    <Router>
        render(<BookingForm />);
        const button = screen.getByText("Number of guests");
        screen.setSelectedGuestsNumber("1")
        const messageOnScreen = screen.getByText("Number of guests cannot be 0")
        expect(messageOnScreen).toBeInTheDocument());
    </Router>
})

describe('BookingForm', () => {
    const mockSetAvailableTimes = jest.fn();

    const wrapper = ({ children }) => (
        <BrowserRouter>
            <TimeOptionsContext.Provider value={{ availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'], setAvailableTimes: mockSetAvailableTimes }}>
                {children}
            </TimeOptionsContext.Provider>
        </BrowserRouter>
    );

    const setup = () => render(<BookingForm />, { wrapper });

    it('renders correctly', () => {
        setup();
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /book now/i })).toBeDisabled();
    });

});

describe('BookingForm', () => {
    const setup = () => render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );

    it('renders correctly', () => {
        setup();
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /book now/i })).toBeDisabled();
    });

    it('enables the submit button when all fields are filled', async () => {
        setup();
        const user = userEvent.setup();
        await user.type(screen.getByLabelText(/choose date/i), '2024-04-15');
        await user.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
        await user.type(screen.getByLabelText(/number of guests/i), '3');
        await user.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');
        expect(screen.getByRole('button', { name: /book now/i })).not.toBeDisabled();
    });

    it('shows validation message when guests number is 0', async () => {
        setup();
        const user = userEvent.setup();
        await user.type(screen.getByLabelText(/number of guests/i), '0');
        expect(screen.getByText(/number of guests cannot be 0/i)).toBeInTheDocument();
    });

    // Add more tests here for form submission, mocking useNavigate, etc.
});