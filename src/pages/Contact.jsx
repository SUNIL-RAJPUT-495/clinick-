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
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans py-16 px-6">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          CONTACT <span className="text-[#E75480]">US</span>
        </h1>
        <div className="h-1.5 w-16 bg-[#E75480] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side: Details */}
        <div className="flex flex-col gap-6 text-left">
          
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white border-b border-[#3A1723] pb-3">
              Tamanna Clinic Location
            </h3>
            
            <div className="flex flex-col gap-4 text-[#D3B4C0] font-semibold text-sm md:text-base">
              <p className="flex items-start gap-3">
                <span className="text-[#E75480] text-lg">📍</span> 
                <span>Main Road, Sindhi Camp, Near Gurunanak School, Akola, Maharashtra</span>
              </p>
              
              <div className="bg-[#17080D] p-4 rounded-2xl border border-[#33151D] flex flex-col gap-2.5 mt-2">
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

          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white border-b border-[#3A1723] pb-3">
              Direct Helpline & Email
            </h3>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+917058430179" 
                className="flex items-center gap-3 text-white font-bold hover:text-[#E75480] transition-colors text-decoration-none"
              >
                <span className="text-lg">📞</span> +91 7058430179
              </a>
              <a 
                href="mailto:tamannapilesclinic@gmail.com" 
                className="flex items-center gap-3 text-white font-bold hover:text-[#E75480] transition-colors text-decoration-none"
              >
                <span className="text-lg">✉️</span> tamannapilesclinic@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Right Side: Form */}
        <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl text-left">
          <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
          <p className="text-[#D3B4C0] text-sm mb-6">
            Type your message or consultation request below to connect with Dr. Tamanna Sharma on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-[#E75480] uppercase tracking-wider mb-2">
                Your Message / Problem Description
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your symptoms (e.g. pain, bleeding, piles issue)..."
                rows="5"
                className="w-full bg-[#17080D] border border-[#33151D] focus:border-[#E75480] text-white p-4 rounded-2xl outline-none transition-all placeholder-[#7A5861]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-black rounded-2xl shadow-lg transition-all"
            >
              💬 Send via WhatsApp
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
