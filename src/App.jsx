import './App.css'
import { Routes, Route } from "react-router-dom";
import Navebar from './components/Navebar';
import Homepage from './pages/Homepage';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Reviews from "./pages/Reviews";
import Contactf from "./pages/Contactf";
import Faq from "./pages/Faq";
import HelpDesk from "./pages/Helpdesk";
import LaserTreatment from './pages/LaserTreatment';
import Piles from './pages/Piles';
import Fissure from "./pages/Fissure";
import Fistula from './pages/Fistula';
import Constipation from './pages/Constipation';

function App() {
  return (
    <>
      <Navebar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactf" element={<Contactf />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/laserTreatment" element={<LaserTreatment />} />
        <Route path="/piles" element={<Piles />} />
        <Route path="/fissure" element={<Fissure />} />
        <Route path="/fistula" element={<Fistula />} />
        <Route path="/constipation" element={<Constipation />} />

      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
