import React from "react";
import "./HelpDesk.css";

const HelpDesk = () => {
  return (
    <div className="helpdesk-container">
      <h1>Help Desk</h1>
      <p className="subtitle">Need help? Send us your query</p>

      <div className="helpdesk-box">

        {/* LEFT - FORM */}
        <form className="help-form">
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Describe your problem..." required></textarea>

          <button type="submit">Submit</button>
        </form>

        {/* RIGHT - CONTACT INFO */}
        <div className="contact-info">
          <h3>Contact Info</h3>

          <p><strong>📞 Phone:</strong> 7058430179</p>
          <p><strong>📧 Email:</strong>tamannapilesclinic@gmail.com</p>
          <p><strong>📍Address:</strong>Main road ,sindhi camp ,near gurunanak school akola</p>

          <a
            href="https://wa.me/917058430179"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};

export default HelpDesk;