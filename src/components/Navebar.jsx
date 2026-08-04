import { Link } from "react-router-dom";
import siteLogo from "../assets/tam-clinic.jpeg";

function Navebar() {
  return (
    <nav className='nav'>
      <Link to="/" className='brand-wrap' style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={siteLogo} alt="logo" className='logo' />
        <h1 className='clinic-name'>Tamanna Clinic</h1>
      </Link>

      <div className='menu'>
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <button className='contact-btn'>+91 7058430179</button>
      </div>
    </nav>
  )
}

export default Navebar