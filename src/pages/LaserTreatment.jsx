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
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans">



      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* What is Laser Proctology */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                What is Laser Proctology?
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
              <p className="text-[#D3B4C0] text-base leading-relaxed">
                <strong>Laser Proctology</strong> represents the pinnacle of modern anorectal surgery. By focusing concentrated radial laser energy through micro-thin fibers, diseased hemorrhoidal cushions, fissure beds, and fistula tracts are treated from within.
              </p>
              <p className="text-[#D3B4C0] text-sm leading-relaxed bg-[#17080D] p-4 rounded-xl border border-[#33151D]">
                Unlike conventional open surgeries that leave large open wounds, laser energy instantly seals blood vessels and nerve endings, eliminating pain and blood loss.
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl overflow-hidden border border-[#33151D] shadow-md bg-[#17080D] p-2">
                <img 
                  src={laserTreatmentDiagram} 
                  alt="Laser Surgery Mechanism" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
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
                <div key={idx} className="bg-[#17080D] p-5 rounded-2xl border border-[#33151D] flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E75480] font-black text-lg">✔</span>
                    <h4 className="font-extrabold text-white text-base">{adv.title}</h4>
                  </div>
                  <p className="text-xs text-[#D3B4C0] leading-relaxed pl-6">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Laser Treatments Offered */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Laser Procedures Offered at Tamanna Clinic
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[#D3B4C0]">
              <div className="p-4 bg-[#17080D] rounded-xl border border-[#33151D]">
                <h4 className="font-bold text-white text-base mb-1">1. LHP (Laser HemorrhoidoPlasty) for Piles</h4>
                <p>Radial laser energy shrinks internal hemorrhoidal cushions from the inside, collapsing the nodes without excision.</p>
              </div>
              <div className="p-4 bg-[#17080D] rounded-xl border border-[#33151D]">
                <h4 className="font-bold text-white text-base mb-1">2. Laser Sphincterolysis & Debridement for Fissure</h4>
                <p>Gentle laser debridement cleans the chronic fissure base and relieves inner sphincter spasm to restore natural blood flow and healing.</p>
              </div>
              <div className="p-4 bg-[#17080D] rounded-xl border border-[#33151D]">
                <h4 className="font-bold text-white text-base mb-1">3. FiLaC (Fistula-tract Laser Closure) for Fistula</h4>
                <p>Flexible laser fiber inserted into the fistula tract coagulates and seals the epithelialized tract from the inside out while sparing sphincter control.</p>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Laser Surgery FAQs
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-[#33151D] rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left font-bold text-white flex justify-between items-center bg-[#17080D] hover:bg-[#2A0E18] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl text-[#E75480]">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-4 bg-[#120609] text-[#D3B4C0] text-sm leading-relaxed border-t border-[#33151D]">
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
          <div className="bg-[#1F0A11] p-6 rounded-3xl border border-[#3A1723] shadow-lg sticky top-28 space-y-6">
            <h4 className="text-xl font-black text-white border-b border-[#3A1723] pb-3">
              Book Laser Consultation
            </h4>
            <div className="space-y-3 text-sm text-[#D3B4C0]">
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold text-white">Safe & US-FDA Approved Laser Tech</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold text-white">Experienced Proctologist Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold text-white">Same-Day Discharge Available</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold text-white">Complete Privacy & Comfort</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3A1723] space-y-3">
              <a 
                href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20book%20a%20Laser%20Treatment%20consultation%20at%20Tamanna%20Clinic." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block py-3.5 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold text-center rounded-xl shadow-md transition-all text-decoration-none"
              >
                Book via WhatsApp
              </a>
              <a 
                href="tel:+917058430179" 
                className="w-full block py-3.5 bg-[#17080D] border-2 border-[#E75480] text-[#E75480] hover:bg-[#2A0E18] font-extrabold text-center rounded-xl transition-all text-decoration-none"
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