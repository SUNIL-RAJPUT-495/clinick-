import { Link } from "react-router-dom";
import { useState } from "react";
import pilesInfoGraphic from "../assets/piles-info-graphic.webp";
import painfulVsPainless from "../assets/painful-vs-painless.webp";
import pilesBg from "../assets/piles-bg.jpg";
import laserTreatmentDiagram from "../assets/laser-treatment-diagram.png";
import sclerotherapyDiagram from "../assets/sclerotherapy-diagram.png";
import coagulationDiagram from "../assets/coagulation-diagram.png";

const Piles = () => {
  // FAQs state for accordion toggles
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is laser piles treatment safe?",
      a: "Yes, laser piles treatment is safe, painless, and widely recommended by global proctologists."
    },
    {
      q: "How long does piles treatment take?",
      a: "The advanced laser treatment usually takes only 30–45 minutes, performed under mild sedation or local anesthesia."
    },
    {
      q: "Can piles be cured permanently?",
      a: "Yes, with proper advanced laser treatment combined with fiber-rich diet and healthy lifestyle changes, piles can be cured permanently."
    }
  ];

  return ( 
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans"> 
      
      {/* HERO BANNER WITH BACKGROUND IMAGE */}
      <section 
        className="relative py-16 md:py-24 text-center border-b border-[#33151D] px-6 bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${pilesBg})` }}
      >
        {/* Soft readable overlay mask */}
        <div className="absolute inset-0 bg-[#0C0305]/80 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-3xl w-full bg-[#1D0910]/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#33151D] shadow-2xl flex flex-col gap-5 relative z-10 animate-fadeIn">
          <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-4 py-1.5 rounded-full w-fit leading-normal max-w-full text-center mx-auto">
            Tamanna Clinic & Laser Piles Centre
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Best Piles Doctor & <br/>
            <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#C2185B] bg-clip-text text-transparent">Laser Surgery Centre</span>
          </h1>
          <p className="text-[#5E3542] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Advanced Laser Treatment for Safe, Painless & Fast Recovery. Get long-term relief from internal, external, and bleeding piles.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-10 text-left">
          
          {/* Intro Card */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E]">
              Advanced Piles Treatment
            </h2>
            <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            <p className="text-[#5E3542] text-base md:text-lg leading-relaxed">
              People suffering from piles, looking for the best doctor for piles, our experienced proctology experts offer safe, painless, and advanced piles treatment at high success rates. We treat all grades of piles using modern laser procedures and nonsurgical methods to guarantee quick recovery and long-term relief.
            </p>
            <p className="text-[#5E3542] text-base md:text-lg leading-relaxed italic border-l-4 border-[#E75480] pl-4 bg-[#FFF5F8] py-3 pr-3 rounded-r-xl">
              "Dr. Tamanna Sharma is a certified proctologist and specialist in Laser Piles Treatment. She provides personalized care with minimal pain and fast recovery, ensuring maximum patient comfort and permanent cure."
            </p>
          </div>

          {/* What is Piles */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#6A1B2E]">What is Piles (Hemorrhoids)?</h3>
            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">
              Piles are swollen blood vessels in or around the anus and rectum that can cause severe discomfort if left untreated. Consulting an expert piles doctor at the right stage helps avoid complex surgery and painful complications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-white p-4 rounded-xl border border-[#F4DCE4] flex items-center gap-3 text-sm text-[#5E3542] font-bold">
                <span className="text-[#E75480] text-lg">✖</span> Pain during bowel movement
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#F4DCE4] flex items-center gap-3 text-sm text-[#5E3542] font-bold">
                <span className="text-[#E75480] text-lg">✖</span> Bleeding while passing stool
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#F4DCE4] flex items-center gap-3 text-sm text-[#5E3542] font-bold">
                <span className="text-[#E75480] text-lg">✖</span> Itching and irritation near anus
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#F4DCE4] flex items-center gap-3 text-sm text-[#5E3542] font-bold">
                <span className="text-[#E75480] text-lg">✖</span> Swelling or lumps near the anal region
              </div>
            </div>
          </div>

          {/* Painful vs Painless Section */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#6A1B2E]">Painful or Painless Piles?</h3>
                  <h4 className="text-[#E75480] font-bold text-sm">Understanding the Difference</h4>
                  <p className="text-[#5E3542] text-sm md:text-base leading-relaxed">
                      Many patients wonder if piles are always painful. Actually, internal piles in their early stages (Grade 1 & 2) are typically painless and only noticed due to bleeding. However, external piles or internal piles that have prolapsed and become thrombosed can cause sudden, severe, and sharp pain.
                  </p>
                  <p className="text-[#5E3542] text-sm md:text-base leading-relaxed">
                      Consulting our laser specialist early helps identify the correct type and treat it with minimal discomfort.
                  </p>
              </div>
              <div className="flex justify-center">
                  <img 
                      src={painfulVsPainless} 
                      alt="Painful vs Painless Piles infographic" 
                      className="rounded-2xl border border-[#F4DCE4] shadow-sm max-w-full h-auto"
                  />
              </div>
          </div>

          {/* Types of Piles */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#6A1B2E]">Types of Piles We Treat</h3>
            <p className="text-[#7A5861] text-sm md:text-base">Our proctology experts classify and treat all grades and stages of piles:</p>
            <div className="flex flex-wrap gap-2.5">
              {["Internal Piles", "External Piles", "Thrombosed Hemorrhoids", "Bleeding Piles", "Grade 1 Piles", "Grade 2 Piles", "Grade 3 Piles", "Grade 4 Piles"].map((item, idx) => (
                <span key={idx} className="bg-white border border-[#F4DCE4] text-[#6A1B2E] font-bold text-sm px-4 py-2 rounded-full shadow-sm hover:border-[#E75480] transition-colors">
                  📍 {item}
                </span>
              ))}
            </div>
          </div>

          {/* Treatment Options */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#6A1B2E]">Advanced Piles Treatment Options</h3>
            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">
              We customize the treatment path depending on the grade, symptoms, and diagnostic report of each patient:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Laser Treatment */}
              <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex flex-col gap-4 group">
                <div className="w-full h-48 rounded-xl overflow-hidden bg-[#FFF5F8] border border-[#F4DCE4]">
                  <img 
                    src={laserTreatmentDiagram} 
                    alt="Laser Treatment of Hemorrhoids" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-[#FFF5F8] w-10 h-10 rounded-full flex items-center justify-center border border-[#F4DCE4]">⚡</span>
                  <h4 className="font-extrabold text-[#6A1B2E] text-lg">Laser Piles Treatment</h4>
                </div>
                <p className="text-xs text-[#5E3542] leading-relaxed">
                  Precision radial laser fiber ablates and shrinks hemorrhoidal tissue without any cuts or stitches, offering immediate relief.
                </p>
                <ul className="space-y-1.5 text-[#5E3542] text-xs font-semibold">
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> No cuts, wounds, or stitches</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Minimal pain & minimal bleeding</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Same-day discharge (30-45 mins)</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Negligible recurrence rate</li>
                </ul>
              </div>
              
              {/* 2. Sclerotherapy */}
              <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex flex-col gap-4 group">
                <div className="w-full h-48 rounded-xl overflow-hidden bg-[#FFF5F8] border border-[#F4DCE4]">
                  <img 
                    src={sclerotherapyDiagram} 
                    alt="Sclerotherapy for Hemorrhoids" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-[#FFF5F8] w-10 h-10 rounded-full flex items-center justify-center border border-[#F4DCE4]">💉</span>
                  <h4 className="font-extrabold text-[#6A1B2E] text-lg">Sclerotherapy</h4>
                </div>
                <p className="text-xs text-[#5E3542] leading-relaxed">
                  Injecting a sclerosing chemical agent into internal hemorrhoids creates fibrosis, cutting off blood supply so the tissue withers and falls off. Ideal for patients on blood thinners.
                </p>
                <ul className="space-y-1.5 text-[#5E3542] text-xs font-semibold">
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Non-surgical injection procedure</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Ideal for patients on blood thinners</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Quick relief from internal bleeding</li>
                </ul>
              </div>

              {/* 3. Coagulation Therapy (IRC) */}
              <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex flex-col gap-4 group">
                <div className="w-full h-48 rounded-xl overflow-hidden bg-[#FFF5F8] border border-[#F4DCE4]">
                  <img 
                    src={coagulationDiagram} 
                    alt="Infrared Coagulation (IRC)" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-[#FFF5F8] w-10 h-10 rounded-full flex items-center justify-center border border-[#F4DCE4]">🔥</span>
                  <h4 className="font-extrabold text-[#6A1B2E] text-lg">Coagulation Therapy (IRC)</h4>
                </div>
                <p className="text-xs text-[#5E3542] leading-relaxed">
                  Infrared photocoagulation creates targeted scar tissue to seal bleeding vessels on non-prolapsed internal hemorrhoids with mild discomfort and quick recovery.
                </p>
                <ul className="space-y-1.5 text-[#5E3542] text-xs font-semibold">
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Infrared light creates precise scar tissue</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Cuts off blood supply effectively</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Quick in-clinic procedure</li>
                </ul>
              </div>

              {/* 4. Rubber Band Ligation */}
              <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex flex-col gap-4 group">
                <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-[#FFF5F8] to-[#FFE4EC] border border-[#F4DCE4] flex items-center justify-center p-4 text-center">
                  <div className="space-y-1">
                    <span className="text-4xl inline-block">⭕</span>
                    <h5 className="text-[#6A1B2E] font-bold text-sm">Banding Procedure</h5>
                    <p className="text-[11px] text-[#7A5861]">Outpatient Banding</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-[#FFF5F8] w-10 h-10 rounded-full flex items-center justify-center border border-[#F4DCE4]">⭕</span>
                  <h4 className="font-extrabold text-[#6A1B2E] text-lg">Rubber Band Ligation</h4>
                </div>
                <p className="text-xs text-[#5E3542] leading-relaxed">
                  Specialized elastic bands placed at the base of internal hemorrhoids cut off circulation, causing them to wither away naturally within days. No anesthesia or OR needed.
                </p>
                <ul className="space-y-1.5 text-[#5E3542] text-xs font-semibold">
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> No anesthesia or OR required</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> High success for prolapsed internal piles</li>
                  <li className="flex items-center gap-2"><span className="text-[#E75480]">✔</span> Natural withering in few days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Symptoms to Consult */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#6A1B2E]">Symptoms Needing Immediate Doctor Consultation</h3>
            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">
              If you experience any of these emergency proctology symptoms, consult our clinic immediately to prevent serious infection:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Continuous or heavy bleeding from the anus",
                "Severe pain that makes sitting or walking difficult",
                "Swelling, hard lumps, or protrusion around the anus",
                "Recurring piles symptoms after initial healing",
                "Chronic constipation requiring extreme straining"
              ].map((symptom, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-[#F4DCE4] flex items-center gap-3 text-sm text-[#5E3542] font-bold">
                  <span className="text-[#E75480] text-lg">⚠️</span> {symptom}
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#6A1B2E]">FAQs – Piles Treatment</h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-[#F4DCE4] rounded-xl overflow-hidden transition-all duration-200">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left font-bold text-[#6A1B2E] flex justify-between items-center hover:bg-[#FFF5F8] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg text-[#E75480]">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 border-t border-[#F4DCE4] text-sm md:text-base text-[#7A5861] leading-relaxed bg-[#FFF5F8]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Contact & Image Panel */}
        <div className="lg:col-span-4">
          
          {/* Doctor Image Block & Sticky Contact */}
          <div className="bg-white p-6 rounded-3xl border border-[#F4DCE4] shadow-md flex flex-col gap-6 sticky top-24 text-center">
            <img 
              src={pilesInfoGraphic} 
              alt="Laser Specialist Doctor" 
              className="w-full h-auto object-cover rounded-2xl border border-[#F4DCE4]"
            />
            <div className="text-left mt-2 flex flex-col gap-4">
              <div>
                <h4 className="text-[#6A1B2E] font-bold text-lg">Tamanna Clinic</h4>
                <p className="text-[#7A5861] text-xs mt-1 leading-relaxed">
                  Expert proctology care specializing in minimally invasive laser surgeries. Safe treatment with state-of-the-art medical devices.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 pt-4 border-t border-[#F4DCE4]">
                <a href="tel:+917058430179" className="w-full py-3 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold rounded-xl shadow-md transition-colors text-center text-decoration-none text-sm">
                  📞 Call Directly: +91 7058430179
                </a>
                <a href="https://wa.me/917058430179" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold rounded-xl shadow-md transition-colors text-center text-decoration-none text-sm">
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* BOTTOM REDIRECT CTA BANNER */}
      <section className="bg-gradient-to-br from-[#ffe2eb] to-[#FFF5F8] py-16 text-center border-t border-[#F4DCE4] px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E] mb-2">
          Get Permanent Relief from Piles Pain
        </h2>
        <p className="text-[#7A5861] text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-6">
          Schedule your clinical diagnostic evaluation with Dr. Tamanna Sharma today. Take your step towards a healthier, pain-free life.
        </p>
        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20laser%20piles%20treatment%20at%20Tamanna%20Clinic." target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold rounded-xl shadow-lg transition-colors text-decoration-none">
          Book Appointment Now
        </a>
      </section>

    </div>
  );
};

export default Piles;