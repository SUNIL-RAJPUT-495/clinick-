import React from "react";
import "./Helpdesk.css";

const HelpDesk = () => {
  return (
    <div className="helpdesk-page bg-[#120609] min-h-screen text-[#F3E5EC] py-12">
      <div className="helpdesk-container">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-2">Help Desk</h1>
        <p className="subtitle text-[#D3B4C0] font-medium mb-8">Need help? Send us your query</p>

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
            <p><strong>📧 Email:</strong> tamannapilesclinic@gmail.com</p>
            <p><strong>📍 Address:</strong> Main road, Sindhi camp, near Gurunanak school, Akola</p>

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
    </div>
  );
};

export default HelpDesk;