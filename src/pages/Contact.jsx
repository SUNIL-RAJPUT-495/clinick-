import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      
      {/* Heading */}
      <h1 className="contact-title">
        CONTACT <span>US</span>
      </h1>

      <div className="contact-content">

        {/* Left Side */}
        <div className="contact-left">
          <div className="card">
            <h3>Contact Details</h3>
            <p>Main Road, Sindhi Camp , Near Gurunanak School Akola.</p>

            <p>📅 Monday, August 3, 2026</p>
            <p>⏰ 09:00 AM – 01:00 PM</p>
            <p>⏰ 05:00 PM – 09:00 PM</p>
            <p>📍 Akola, Maharashtra</p>
          </div>

          <div className="card">
            <p>📞 Phone Number: +91 7058430179</p>
            <p>📧 Email: tamannapilesclinic@gmail.com</p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-right">
          <form>
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="WhatsApp Number " />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890123!2d72.877655!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c12345678901%3A0xabcdef1234567890!2sTamanna%20Clinic!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"   
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;

