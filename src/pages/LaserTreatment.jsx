import React, { useState } from "react";
import { Link } from "react-router-dom";
import laserTreatmentDiagram from "../assets/laser-treatment-diagram.png";
import fasterRecoveryImg from "../assets/faster-recovery.png";
import pilesBg from "../assets/piles-bg.jpg";

const LaserTreatment = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Why is laser surgery better than conventional surgery?",
      a: "Laser surgery does not involve cutting through healthy tissue with scalpels. It utilizes targeted thermal energy that coagulates blood vessels and seals nerve endings simultaneously, resulting in virtually no pain, zero bleeding, and instant healing."
    },
    {
      q: "Will I need general anesthesia?",
      a: "Most laser proctology procedures are performed under short local anesthesia or mild sedation, meaning you can walk out comfortably on the same day."
    },
    {
      q: "How soon can I return to work?",
      a: "Most patients resume desk work and normal household routines within 24 to 48 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F8] font-sans">

      {/* HERO BANNER */}
      <section 
        className="relative py-16 md:py-24 text-center border-b border-[#F4DCE4] px-6 bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${pilesBg})` }}
      >
        <div className="absolute inset-0 bg-[#6A1B2E]/10 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-3xl w-full bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#F4DCE4]/60 shadow-2xl flex flex-col gap-5 relative z-10">
          <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full w-fit leading-normal max-w-full text-center mx-auto">
            State-Of-The-Art Proctology Care
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#6A1B2E] leading-tight">
            Advanced Laser Proctology <br/>
            <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#C2185B] bg-clip-text text-transparent">Painless & Day-Care Surgery</span>
          </h1>
          <p className="text-[#5E3542] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Experience next-generation laser treatment for Piles, Fissure, and Fistula with zero cuts, minimal pain, and same-day discharge under Dr. Tamanna Sharma.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Laser%20Treatment%20at%20Tamanna%20Clinic." target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-[#E75480] hover:bg-[#C2185B] text-white font-bold rounded-xl shadow-md transition-all">
              Book Laser Consultation
            </a>
            <a href="tel:+917058430179" className="px-7 py-3 bg-white border border-[#E75480] text-[#E75480] hover:bg-[#FFF5F8] font-bold rounded-xl transition-all">
              Call Doctor
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* What is Laser Proctology */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E]">
                What is Laser Proctology?
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
              <p className="text-[#5E3542] text-base leading-relaxed">
                <strong>Laser Proctology</strong> represents the pinnacle of modern anorectal surgery. By focusing concentrated radial laser energy through micro-thin fibers, diseased hemorrhoidal cushions, fissure beds, and fistula tracts are treated from within.
              </p>
              <p className="text-[#5E3542] text-sm leading-relaxed bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                Unlike conventional open surgeries that leave large open wounds, laser energy instantly seals blood vessels and nerve endings, eliminating pain and blood loss.
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl overflow-hidden border border-[#F4DCE4] shadow-md bg-white p-2">
                <img 
                  src={laserTreatmentDiagram} 
                  alt="Laser Surgery Mechanism" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E]">
              Why Choose Laser Treatment?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Zero Cuts & No Stitches", desc: "Thermal energy is directed via micro-fiber probes without open surgical incisions." },
                { title: "Virtually Painless", desc: "Nerve endings are sealed during the process, resulting in minimal post-operative pain." },
                { title: "Same-Day Discharge", desc: "30-45 minute daycare procedure allows you to return home on the same day." },
                { title: "Negligible Bleeding", desc: "Immediate photo-coagulation of blood vessels prevents any blood loss." },
                { title: "Sphincter Preservation", desc: "100% protection of anal sphincter muscles, ensuring zero risk of incontinence." },
                { title: "Fast Recovery", desc: "Resume your routine activities and office work within 24 to 48 hours." }
              ].map((adv, idx) => (
                <div key={idx} className="bg-[#FFF5F8] p-5 rounded-2xl border border-[#F4DCE4] flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E75480] font-black text-lg">✔</span>
                    <h4 className="font-extrabold text-[#6A1B2E] text-base">{adv.title}</h4>
                  </div>
                  <p className="text-xs text-[#5E3542] leading-relaxed pl-6">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Laser Treatments Offered */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E]">
              Laser Procedures Offered at Tamanna Clinic
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[#5E3542]">
              <div className="p-4 bg-[#FFF5F8] rounded-xl border border-[#F4DCE4]">
                <h4 className="font-bold text-[#6A1B2E] text-base mb-1">1. LHP (Laser HemorrhoidoPlasty) for Piles</h4>
                <p>Radial laser energy shrinks internal hemorrhoidal cushions from the inside, collapsing the nodes without excision.</p>
              </div>
              <div className="p-4 bg-[#FFF5F8] rounded-xl border border-[#F4DCE4]">
                <h4 className="font-bold text-[#6A1B2E] text-base mb-1">2. Laser Sphincterolysis & Debridement for Fissure</h4>
                <p>Gentle laser debridement cleans the chronic fissure base and relieves inner sphincter spasm to restore natural blood flow and healing.</p>
              </div>
              <div className="p-4 bg-[#FFF5F8] rounded-xl border border-[#F4DCE4]">
                <h4 className="font-bold text-[#6A1B2E] text-base mb-1">3. FiLaC (Fistula-tract Laser Closure) for Fistula</h4>
                <p>Flexible laser fiber inserted into the fistula tract coagulates and seals the epithelialized tract from the inside out while sparing sphincter control.</p>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E]">
              Laser Surgery FAQs
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-[#F4DCE4] rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left font-bold text-[#6A1B2E] flex justify-between items-center bg-[#FFF5F8] hover:bg-[#FFE4EC] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl text-[#E75480]">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-4 bg-white text-[#5E3542] text-sm leading-relaxed border-t border-[#F4DCE4]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sticky Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#F4DCE4] shadow-lg sticky top-28 space-y-6">
            <h4 className="text-xl font-black text-[#6A1B2E] border-b border-[#F4DCE4] pb-3">
              Book Laser Consultation
            </h4>
            <div className="space-y-3 text-sm text-[#5E3542]">
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Safe & US-FDA Approved Laser Tech</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Experienced Proctologist Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Same-Day Discharge Available</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Complete Privacy & Comfort</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F4DCE4] space-y-3">
              <a 
                href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20book%20a%20Laser%20Treatment%20consultation%20at%20Tamanna%20Clinic." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block py-3.5 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold text-center rounded-xl shadow-md transition-all"
              >
                Book via WhatsApp
              </a>
              <a 
                href="tel:+917058430179" 
                className="w-full block py-3.5 bg-white border-2 border-[#E75480] text-[#E75480] hover:bg-[#FFF5F8] font-extrabold text-center rounded-xl transition-all"
              >
                Call: +91 70584 30179
              </a>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default LaserTreatment;