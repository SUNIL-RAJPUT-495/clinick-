import React from "react";
import "./LaserTreatment.css";

const LaserTreatment = () => {
  return (
    <div className="laser-page">

      {/* HERO */}
      <div className="laser-hero">
        <h1>Laser Treatment</h1>
        <p>Advanced, Safe & Painless Procedure</p>
      </div>

      {/* IMAGE + CONTENT */}
      <div className="laser-section">

        <div className="laser-image">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" 
            alt="laser treatment"
          />
        </div>

        <div className="laser-content">
          <h2>What is Laser Treatment?</h2>
          <p>
            Laser treatment ek modern technique hai jisme high-energy laser use karke 
            problem ko treat kiya jata hai. Is method me cuts aur stitches ki zarurat nahi hoti.
          </p>

          <h2>Benefits</h2>
          <ul>
            <li>Painless procedure</li>
            <li>No major cuts</li>
            <li>Quick recovery</li>
            <li>Same day discharge</li>
            <li>Minimal bleeding</li>
          </ul>
        </div>

      </div>

      {/* CTA */}
      <div className="laser-cta">
        <h3>Book Your Appointment Today</h3>
        <button>Book Now</button>
      </div>

    </div>
  );
};

export default LaserTreatment;