import React, { useState } from "react";
import { Link } from "react-router-dom";
import fissureDiagram from "../assets/fissure-diagram.png";
import fissureSurgeryDiagram from "../assets/fissure-surgery-diagram.jpg";
import pilesBg from "../assets/piles-bg.jpg";

const Fissure = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is an anal fissure?",
      a: "An anal fissure is a small tear or crack in the lining of the anal canal that can cause severe burning pain and bright red bleeding during or after bowel movements."
    },
    {
      q: "How does laser treatment for fissure work?",
      a: "Laser fissure surgery relieves inner sphincter muscle spasms and promotes fast, scarless healing without large surgical wounds or incontinence risk."
    },
    {
      q: "How long is the recovery after laser fissure surgery?",
      a: "Most patients experience immediate pain relief and are discharged on the same day, resuming light daily routines within 24 to 48 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans selection:bg-[#E75480] selection:text-white">

      {/* HERO BANNER */}
      <section 
        className="relative py-20 md:py-28 text-center border-b border-[#3A1723] px-6 bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${pilesBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0305]/90 via-[#120609]/95 to-[#120609] z-0"></div>

        <div className="max-w-4xl w-full relative z-10 flex flex-col items-center gap-6 animate-fadeIn">
          <span className="inline-flex items-center gap-2 text-[#E75480] text-xs md:text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-5 py-2 rounded-full border border-[#E75480]/30 shadow-[0_0_20px_rgba(231,84,128,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#E75480] animate-pulse"></span>
            Tamanna Clinic & Laser Piles Centre
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            Advanced Laser & Medical <br className="hidden sm:block"/>
            <span className="bg-gradient-to-r from-[#E75480] via-[#F06292] to-[#FF80AB] bg-clip-text text-transparent">Anal Fissure Treatment</span>
          </h1>

          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed max-w-2xl font-medium">
            Say goodbye to sharp burning pain and bleeding. Expert proctology care with sphincter-sparing laser techniques under lead specialist <strong className="text-white">Dr. Tamanna Sharma</strong>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fissure%20treatment." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-[#E75480] to-[#C2185B] hover:from-[#F06292] hover:to-[#E75480] text-white font-extrabold rounded-2xl shadow-[0_10px_30px_rgba(231,84,128,0.35)] transition-all hover:scale-105 text-decoration-none">
              💬 Book Consultation
            </a>
            <a href="tel:+917058430179" className="px-8 py-4 bg-[#1F0A11] border border-[#E75480]/50 text-[#F3E5EC] hover:bg-[#2A0E18] font-extrabold rounded-2xl transition-all text-decoration-none hover:border-[#E75480]">
              📞 Call Doctor: +91 7058430179
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT EDITORIAL LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-14">
          
          {/* SECTION 1: CLINICAL INTRO */}
          <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#E75480]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E75480]/20 transition-all duration-700"></div>

            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Rapid Pain Management</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
              Instant Relief from Anal Fissure Pain
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mb-6"></div>

            <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed mb-6 font-normal">
              Anal Fissure is one of the most painful anorectal conditions, characterized by severe tearing pain during stool passage, intense internal muscle spasms, and bleeding. At <strong className="text-white">Tamanna Clinic</strong>, Dr. Tamanna Sharma provides comprehensive diagnostic assessment and gentle sphincterotomy laser therapy for immediate pain resolution.
            </p>

            <div className="p-6 rounded-2xl bg-[#120609]/80 border-l-4 border-[#E75480] border border-[#3A1723]">
              <p className="text-[#F3E5EC] text-base md:text-lg leading-relaxed italic m-0">
                "Our laser fissure procedure relaxes hyperactive inner sphincter spasms instantly without large surgical wounds or permanent scarring, restoring painless bowel function."
              </p>
            </div>
          </div>

          {/* SECTION 2: ANATOMY & SURGERY INFOGRAPHICS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-6 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-4">
              <h3 className="font-extrabold text-white text-lg">Anal Fissure Anatomy</h3>
              <img src={fissureDiagram} alt="Anal Fissure Diagram" className="w-full h-52 object-cover rounded-2xl border border-[#3A1723] shadow-md" />
              <p className="text-xs text-[#D3B4C0] leading-relaxed">A small tear in the mucosal lining of the anal canal triggering severe inner sphincter spasms and burning pain.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-6 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-4">
              <h3 className="font-extrabold text-white text-lg">Laser Sphincterotomy Procedure</h3>
              <img src={fissureSurgeryDiagram} alt="Laser Fissure Surgery" className="w-full h-52 object-cover rounded-2xl border border-[#3A1723] shadow-md" />
              <p className="text-xs text-[#D3B4C0] leading-relaxed">Micro-laser energy gently relieves hyperactive sphincter pressure, restoring natural micro-vascular circulation to the fissure bed.</p>
            </div>
          </div>

          {/* SECTION 3: KEY ADVANTAGES */}
          <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Why Choose Laser Care</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                Key Benefits of Laser Fissure Treatment
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-4"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17080D] border border-[#33151D]">
                <span className="text-2xl text-[#E75480]">⚡</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Instant Relief from Burning Pain</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">Relieves the painful anal sphincter spasm immediately after the 30-minute laser procedure.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17080D] border border-[#33151D]">
                <span className="text-2xl text-[#E75480]">✂️</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Zero Open Cuts or Stitches</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">Micro-thermal laser ablation leaves no open surgical wounds, requiring minimal post-op dressing.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17080D] border border-[#33151D]">
                <span className="text-2xl text-[#E75480]">🛡️</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">100% Sphincter Preservation</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">Protects natural anal continent muscle function with zero risk of fecal leakage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: FAQS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-extrabold text-white">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1F0A11] border border-[#3A1723] rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left font-bold text-white flex justify-between items-center hover:bg-[#2A0E18] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg text-[#E75480]">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 border-t border-[#3A1723] text-sm text-[#D3B4C0] leading-relaxed bg-[#17080D]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Sidebar Panel */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-b from-[#1F0A11] to-[#17080D] p-6 md:p-8 rounded-3xl border border-[#3A1723] shadow-2xl flex flex-col gap-6 sticky top-28 text-center">
            <div className="text-left space-y-3">
              <h4 className="text-white font-extrabold text-xl">Consult Dr. Tamanna Sharma</h4>
              <p className="text-[#E75480] text-xs font-bold uppercase tracking-wider">MS Shalya Pune - 99170-A</p>
              <p className="text-[#D3B4C0] text-xs leading-relaxed">
                Get an accurate proctology assessment and personalized fissure treatment plan with complete privacy and comfort.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fissure." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl shadow-lg transition-all text-decoration-none text-sm">
                💬 Consult on WhatsApp
              </a>
              <a href="tel:+917058430179" className="w-full py-3.5 bg-[#17080D] border border-[#E75480] text-[#E75480] hover:bg-[#2A0E18] font-extrabold rounded-xl transition-all text-decoration-none text-sm">
                📞 Call: +91 7058430179
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-r from-[#17080D] via-[#2E0F1A] to-[#17080D] py-16 text-center border-t border-[#33151D] px-6">
        <h2 className="text-3xl font-extrabold text-white mb-3">
          End Fissure Burning Pain Today
        </h2>
        <p className="text-[#D3B4C0] text-base max-w-xl mx-auto mb-8">
          Schedule your confidential evaluation with Dr. Tamanna Sharma today.
        </p>
        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fissure." target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-2xl shadow-xl transition-all hover:scale-105 text-decoration-none">
          Book Appointment Now
        </a>
      </section>

    </div>
  );
};

export default Fissure;