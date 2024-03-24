import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from './BookingPage';
import Homepage from './Homepage';
import AboutPage from './AboutPage';
import OnlineMenu from './OnlineMenu';
import OrderOnlinePage from './OrderOnlinePage';


function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route index element={<Homepage />} />
        <Route path="reservations" element={<BookingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/menu" element={<OnlineMenu />} />
        <Route path="/delivery" element={<OrderOnlinePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
