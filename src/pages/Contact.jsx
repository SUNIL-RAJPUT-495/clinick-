import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Redirect directly to WhatsApp with the message encoded
    const whatsappUrl = `https://wa.me/917058430179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FFF5F8] font-sans py-16 px-6">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-[#6A1B2E] tracking-tight">
          CONTACT <span className="text-[#E75480]">US</span>
        </h1>
        <div className="h-1.5 w-16 bg-[#E75480] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side: Details */}
        <div className="flex flex-col gap-6 text-left">
          
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-5">
            <h3 className="text-xl font-bold text-[#6A1B2E] border-b border-[#F4DCE4] pb-3">
              Tamanna Clinic Location
            </h3>
            
            <div className="flex flex-col gap-4 text-[#5E3542] font-semibold text-sm md:text-base">
              <p className="flex items-start gap-3">
                <span className="text-[#E75480] text-lg">📍</span> 
                <span>Main Road, Sindhi Camp, Near Gurunanak School, Akola, Maharashtra</span>
              </p>
              
              <div className="bg-[#FFF5F8] p-4 rounded-2xl border border-[#F4DCE4] flex flex-col gap-2.5 mt-2">
                <p className="flex items-center gap-3">
                  <span className="text-xs text-[#E75480]">📅</span>
                  <span>Monday - Saturday</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xs text-[#E75480]">⏰</span>
                  <span>09:00 AM – 01:00 PM</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xs text-[#E75480]">⏰</span>
                  <span>05:00 PM – 09:00 PM</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-4">
            <h4 className="text-lg font-bold text-[#6A1B2E]">Quick Contact</h4>
            <div className="flex flex-col gap-3 font-semibold">
              <a href="tel:+917058430179" className="flex items-center gap-3 text-[#5E3542] hover:text-[#E75480] text-decoration-none">
                <span className="text-lg">📞</span> +91 7058430179
              </a>
              <a href="mailto:tamannapilesclinic@gmail.com" className="flex items-center gap-3 text-[#5E3542] hover:text-[#E75480] text-decoration-none">
                <span className="text-lg">📧</span> tamannapilesclinic@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Right Side Form (WhatsApp Redirect) */}
        <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-md flex flex-col gap-6 text-left">
          <div>
            <h3 className="text-xl font-bold text-[#6A1B2E]">Send Direct Message</h3>
            <p className="text-xs text-[#7A5861] mt-1.5 leading-relaxed">
              Write your query or medical concern below. Clicking submit will automatically direct you to WhatsApp to chat with Dr. Tamanna Sharma.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your questions or details about your piles/fissure/fistula concern here..."
              className="w-full p-4 rounded-2xl border border-[#F4DCE4] bg-[#FFFDFE] outline-none focus:border-[#E75480] transition-colors text-sm min-h-[160px] resize-none"
              required
            ></textarea>

            <button 
              type="submit" 
              className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold rounded-2xl shadow-lg shadow-[#25D366]/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-0 text-base"
            >
              <span>💬</span> Send via WhatsApp
            </button>
          </form>
        </div>

      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto mt-12 rounded-3xl overflow-hidden border border-[#F4DCE4] shadow-md relative group">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Main+road%2C+sindhi+camp%2C+near+gurunanak+school+akola" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative w-full h-full text-decoration-none"
        >
          {/* Overlay Click Interceptor */}
          <div className="absolute inset-0 bg-[#6A1B2E]/5 hover:bg-[#6A1B2E]/10 transition-colors z-10 flex items-center justify-center cursor-pointer">
            <span className="bg-white/95 backdrop-blur-sm text-[#6A1B2E] px-6 py-3 rounded-full shadow-lg font-extrabold text-sm border border-[#F4DCE4] group-hover:scale-105 transition-transform duration-200">
              📍 Click to Get Directions (Open in Google Maps)
            </span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.4079860642735!2d77.0142928!3d20.7038676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd73068e1a1796d%3A0xc3cf3f99e4bb2e1f!2sGurunanak+School+Akola!5e0!3m2!1sen!2sin!4v1714567890123"   
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Tamanna Clinic Google Map"
            className="pointer-events-none"
          ></iframe>
        </a>
      </div>

    </div>
  );
};

export default Contact;
