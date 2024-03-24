import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from './BookingPage';
import Homepage from './Homepage';
import AboutPage from './AboutPage';


function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
          <Route index element={<Homepage />} />
          <Route path="reservations" element={<BookingPage />} />
          <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
