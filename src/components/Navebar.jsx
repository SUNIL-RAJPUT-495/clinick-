import { useState } from "react";
import { Link } from "react-router-dom";
import siteLogo from "../assets/tam-clinic.jpeg";

function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-[#F4DCE4] sticky top-0 z-50 shadow-sm shadow-[#6A1B2E]/2">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group text-decoration-none">
          <img src={siteLogo} alt="Tamanna Clinic Logo" className="h-12 w-auto object-contain rounded-xl border border-[#F4DCE4] group-hover:scale-105 transition-transform duration-200" />
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-black text-[#6A1B2E] tracking-tight m-0 leading-none">Tamanna Clinic</h1>
            <span className="text-[10px] md:text-xs font-bold text-[#E75480] uppercase tracking-wider mt-0.5">& Laser Pules Centre</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <Link to="/" className="text-[#6A1B2E] hover:text-[#E75480] font-bold text-base transition-colors duration-150 text-decoration-none">Home</Link>
            </li>
            {/* Treatments Dropdown */}
            <li className="relative group">
              <button className="text-[#6A1B2E] group-hover:text-[#E75480] font-bold text-base transition-colors duration-150 flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0 outline-none">
                Treatments <span className="text-[10px] transform group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white border border-[#F4DCE4] rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-3 flex flex-col gap-0.5">
                <Link to="/piles" className="px-4 py-2.5 text-[#6A1B2E] hover:bg-[#FFF5F8] hover:text-[#E75480] font-bold text-sm text-decoration-none transition-colors">Piles Treatment</Link>
                <Link to="/fissure" className="px-4 py-2.5 text-[#6A1B2E] hover:bg-[#FFF5F8] hover:text-[#E75480] font-bold text-sm text-decoration-none transition-colors">Fissure Treatment</Link>
                <Link to="/fistula" className="px-4 py-2.5 text-[#6A1B2E] hover:bg-[#FFF5F8] hover:text-[#E75480] font-bold text-sm text-decoration-none transition-colors">Fistula Treatment</Link>
              </div>
            </li>
            <li>
              <Link to="/about" className="text-[#6A1B2E] hover:text-[#E75480] font-bold text-base transition-colors duration-150 text-decoration-none">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#6A1B2E] hover:text-[#E75480] font-bold text-base transition-colors duration-150 text-decoration-none">Contact Us</Link>
            </li>
          </ul>
          
          <a href="tel:+917058430179" className="px-6 py-2.5 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold text-sm rounded-full shadow-md shadow-[#E75480]/15 hover:shadow-lg transition-all duration-200 text-decoration-none">
            +91 7058430179
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#6A1B2E] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#F4DCE4] py-4 px-6 flex flex-col gap-4 animate-fadeIn">
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className="block text-[#6A1B2E] hover:text-[#E75480] font-bold text-lg py-1 transition-colors text-decoration-none"
              >
                Home
              </Link>
            </li>
            
            {/* Mobile Treatments List */}
            <li className="flex flex-col gap-1.5">
              <span className="block text-[#E75480] font-extrabold text-xs uppercase tracking-widest mt-1">Treatments</span>
              <ul className="pl-3 border-l-2 border-[#F4DCE4] flex flex-col gap-2 list-none m-0">
                <li>
                  <Link to="/piles" onClick={() => setIsOpen(false)} className="block text-[#6A1B2E] hover:text-[#E75480] font-bold text-base py-1 text-decoration-none">Piles Treatment</Link>
                </li>
                <li>
                  <Link to="/fissure" onClick={() => setIsOpen(false)} className="block text-[#6A1B2E] hover:text-[#E75480] font-bold text-base py-1 text-decoration-none">Fissure Treatment</Link>
                </li>
                <li>
                  <Link to="/fistula" onClick={() => setIsOpen(false)} className="block text-[#6A1B2E] hover:text-[#E75480] font-bold text-base py-1 text-decoration-none">Fistula Treatment</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)} 
                className="block text-[#6A1B2E] hover:text-[#E75480] font-bold text-lg py-1 transition-colors text-decoration-none"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="block text-[#6A1B2E] hover:text-[#E75480] font-bold text-lg py-1 transition-colors text-decoration-none"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          <a 
            href="tel:+917058430179" 
            onClick={() => setIsOpen(false)} 
            className="w-full py-3 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold text-base rounded-xl text-center shadow-md shadow-[#E75480]/15 block text-decoration-none"
          >
            Call Us: +91 7058430179
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navebar;