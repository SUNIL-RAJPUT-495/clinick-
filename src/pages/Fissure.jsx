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



      {/* SEAMLESS BORDERLESS CONTENT FLOW */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-left flex flex-col gap-16">
        
        {/* SECTION 1: CLINICAL INTRO */}
        <div className="space-y-6">
          <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Rapid Pain Management</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Instant Relief from Anal Fissure Pain
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full"></div>

          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed font-normal">
            Anal Fissure is one of the most painful anorectal conditions, characterized by severe tearing pain during stool passage, intense internal muscle spasms, and bleeding. At <strong className="text-white">Tamanna Clinic</strong>, Dr. Tamanna Sharma provides comprehensive diagnostic assessment and gentle sphincterotomy laser therapy for immediate pain resolution.
          </p>

          <div className="py-4 border-l-4 border-[#E75480] pl-6 text-[#D3B4C0]">
            <p className="text-[#F3E5EC] text-base md:text-lg leading-relaxed italic m-0">
              "Our laser fissure procedure relaxes hyperactive inner sphincter spasms instantly without large surgical wounds or permanent scarring, restoring painless bowel function."
            </p>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 2: ANATOMY & SURGERY INFOGRAPHICS */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-white">Anal Fissure Anatomy & Procedure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
            <div className="space-y-2">
              <img src={fissureDiagram} alt="Anal Fissure Diagram" className="w-full h-56 object-cover rounded-3xl shadow-2xl" />
              <p className="text-xs text-[#D3B4C0] text-center italic">Anal Fissure Anatomy: Mucosal tear causing severe sphincter spasm</p>
            </div>

            <div className="space-y-2">
              <img src={fissureSurgeryDiagram} alt="Laser Fissure Surgery" className="w-full h-56 object-cover rounded-3xl shadow-2xl" />
              <p className="text-xs text-[#D3B4C0] text-center italic">Laser Sphincterotomy: Precision laser energy restoring circulation</p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 3: KEY ADVANTAGES */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Why Choose Laser Care</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              Key Benefits of Laser Fissure Treatment
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480] text-lg">⚡</span> Instant Relief from Burning Pain
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed pl-6">
                Relieves the painful anal sphincter spasm immediately after the 30-minute laser procedure.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480] text-lg">✂️</span> Zero Open Cuts or Stitches
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed pl-6">
                Micro-thermal laser ablation leaves no open surgical wounds, requiring minimal post-op dressing.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480] text-lg">🛡️</span> 100% Sphincter Preservation
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed pl-6">
                Protects natural anal continent muscle function with zero risk of fecal leakage.
              </p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 4: FAQS */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="py-2 border-b border-[#33151D]">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left font-bold text-white text-lg flex justify-between items-center bg-transparent border-0 cursor-pointer py-2"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl text-[#E75480]">{activeFaq === index ? "−" : "+"}</span>
                </button>
                {activeFaq === index && (
                  <p className="text-base text-[#D3B4C0] leading-relaxed pt-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
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