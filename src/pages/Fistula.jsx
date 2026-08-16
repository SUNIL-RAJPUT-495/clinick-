import React, { useState } from "react";
import { Link } from "react-router-dom";
import fistulaDiagram from "../assets/fistula-diagram.png";
import fistulaClassificationDiagram from "../assets/fistula-classification-diagram.jpg";
import fistulaSetonDiagram from "../assets/fistula-seton-diagram.jpg";
import pilesBg from "../assets/piles-bg.jpg";

const Fistula = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is an anal fistula (Fistula-in-Ano)?",
      a: "An anal fistula is an abnormal tunnel or tract that connects an infected anal gland inside the anal canal to the skin around the anus, causing chronic pain, swelling, and foul-smelling discharge."
    },
    {
      q: "How does FiLaC (Fistula-tract Laser Closure) work?",
      a: "FiLaC is a sphincter-saving laser procedure where a flexible radial laser fiber is inserted into the fistula tract. The laser energy seals and closes the tract from the inside without cutting through the sphincter muscles."
    },
    {
      q: "Does laser fistula surgery cause incontinence?",
      a: "No. The primary advantage of advanced laser fistula surgery (FiLaC) is that it preserves the anal sphincter muscles completely, eliminating the risk of fecal incontinence."
    },
    {
      q: "How long is the recovery period?",
      a: "Because there are no large open surgical wounds or cuts to the sphincter muscles, patients are typically discharged on the same day and can resume routine activities within 1 to 2 days."
    }
  ];

  return (
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans">

      {/* HERO BANNER */}
      <section 
        className="relative py-16 md:py-24 text-center border-b border-[#33151D] px-6 bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${pilesBg})` }}
      >
        <div className="absolute inset-0 bg-[#0C0305]/85 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-3xl w-full bg-[#1F0A11]/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl flex flex-col gap-5 relative z-10">
          <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-4 py-1.5 rounded-full w-fit leading-normal max-w-full text-center mx-auto border border-[#E75480]/30">
            Tamanna Clinic & Laser Piles Centre
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Advanced Laser & Sphincter-Saving <br/>
            <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#F06292] bg-clip-text text-transparent">Anal Fistula Treatment</span>
          </h1>
          <p className="text-[#D3B4C0] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Safe, painless, and highly effective laser fistula closure (FiLaC / SiLaC) that eliminates recurrent discharge, protects sphincter continence, and ensures faster recovery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fistula%20treatment." target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-[#E75480] hover:bg-[#F06292] text-white font-bold rounded-xl shadow-md transition-all text-decoration-none">
              Book Appointment
            </a>
            <a href="tel:+917058430179" className="px-7 py-3 bg-[#17080D] border border-[#E75480] text-[#E75480] hover:bg-[#2A0E18] font-bold rounded-xl transition-all text-decoration-none">
              Call Specialist
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column: Comprehensive Medical Guide */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* SECTION 1: WHAT IS AN ANAL FISTULA */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-5">
            <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-3.5 py-1 rounded-full w-fit border border-[#E75480]/30">
              Understanding the Anatomy
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              What Is an Anal Fistula?
            </h2>
            <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            
            <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed">
              To understand a fistula, it helps to picture the anatomy. Inside the anal canal, just above the opening, there is a ring of small glands. These glands normally produce mucus that helps with bowel movements.
            </p>
            <p className="text-[#D3B4C0] text-base leading-relaxed">
              Sometimes one of these glands becomes blocked and infected, and the infection spreads outward through the tissue around the anus. This collection of pus is called a <strong className="text-white font-bold">perianal abscess</strong>.
            </p>

            <div className="bg-[#17080D] p-5 rounded-2xl border border-[#33151D] text-[#D3B4C0] space-y-3">
              <p className="text-sm md:text-base leading-relaxed">
                When the abscess drains, the infection often leaves a narrow channel behind. One end of the channel opens inside the anal canal (the <strong className="text-[#E75480]">internal opening</strong>), and the other end opens on the skin near the anus (the <strong className="text-[#E75480]">external opening</strong>). This channel is the fistula.
              </p>
              <p className="text-sm leading-relaxed italic text-[#F3E5EC]">
                Because stool and bacteria continuously enter the internal opening, the track tends to stay open and keep discharging fluid or pus rather than healing on its own.
              </p>
            </div>
          </div>

          {/* SECTION 2: CLASSIFICATION - WHY THE TYPE OF FISTULA MATTERS */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-6">
            <div className="space-y-2">
              <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-3.5 py-1 rounded-full border border-[#E75480]/30">
                Diagnostic & Surgical Classification
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Classification: Why the Type of Fistula Matters
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            </div>

            {/* Classification Diagram */}
            <div className="w-full rounded-2xl overflow-hidden border border-[#33151D] bg-[#17080D] p-3 shadow-md">
              <img 
                src={fistulaClassificationDiagram} 
                alt="Classification: Why the Type of Fistula Matters" 
                className="w-full h-auto object-cover rounded-xl" 
              />
              <p className="text-xs text-[#D3B4C0] mt-2 text-center">
                Infographic: Parks' Classification of Anal Fistulas (1: Intersphincteric, 2: Transsphincteric, 3: Suprasphincteric, 4: Extrasphincteric)
              </p>
            </div>

            <p className="text-[#D3B4C0] text-base leading-relaxed">
              Fistulas are classified based on their relationship to the anal sphincter muscles—the ring of muscle that controls bowel continence. Knowing the exact track helps proctologists choose a treatment method that cures the fistula while completely protecting muscle function.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#17080D] p-4.5 rounded-2xl border border-[#33151D] space-y-1.5">
                <span className="text-[#E75480] font-black text-sm">Type 1 • Intersphincteric</span>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Passes between internal & external sphincter muscles without crossing the main external sphincter ring.</p>
              </div>
              <div className="bg-[#17080D] p-4.5 rounded-2xl border border-[#33151D] space-y-1.5">
                <span className="text-[#E75480] font-black text-sm">Type 2 • Transsphincteric</span>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Crosses through both internal and external sphincter muscle walls directly to perianal skin.</p>
              </div>
              <div className="bg-[#17080D] p-4.5 rounded-2xl border border-[#33151D] space-y-1.5">
                <span className="text-[#E75480] font-black text-sm">Type 3 • Suprasphincteric</span>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Loops upward above the puborectalis muscle before turning downward to external skin.</p>
              </div>
              <div className="bg-[#17080D] p-4.5 rounded-2xl border border-[#33151D] space-y-1.5">
                <span className="text-[#E75480] font-black text-sm">Type 4 • Extrasphincteric</span>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Extends directly from the high rectum down through the levator ani muscle to the outer skin.</p>
              </div>
            </div>
          </div>

          {/* SECTION 3: WHY DO ANAL FISTULAS FORM? */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-5">
            <div className="space-y-2">
              <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-3.5 py-1 rounded-full border border-[#E75480]/30">
                Etiology & Causes
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Why Do Anal Fistulas Form?
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            </div>

            <p className="text-[#D3B4C0] text-base leading-relaxed">
              Most anal fistulas — roughly <strong className="text-white">nine out of ten</strong> — are <strong className="text-[#E75480]">cryptoglandular</strong> in origin, meaning they start with an infection in one of the small anal glands as described above. These are sometimes called "ordinary" or "simple" fistulas, though the actual anatomy can still be complex.
            </p>

            <p className="text-[#D3B4C0] text-sm font-semibold">
              The remaining fistulas have specific underlying causes that change how the condition is managed. These include:
            </p>

            <div className="space-y-3.5 text-[#D3B4C0] text-sm">
              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <span className="text-[#E75480]">•</span> Crohn's Disease
                </h4>
                <p className="text-xs leading-relaxed text-[#D3B4C0]">
                  This is a form of inflammatory bowel disease that can cause inflammation anywhere in the digestive tract. Crohn's-related fistulas are often multiple, complex, and require both surgical and medical treatment.
                </p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <span className="text-[#E75480]">•</span> Previous Surgery or Trauma
                </h4>
                <p className="text-xs leading-relaxed text-[#D3B4C0]">
                  Injury to the anal area, including obstetric (childbirth-related) tears or earlier anal surgery, can lead to fistula formation.
                </p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <span className="text-[#E75480]">•</span> Tuberculosis (TB)
                </h4>
                <p className="text-xs leading-relaxed text-[#D3B4C0]">
                  In regions where tuberculosis is more common, including parts of India, TB can cause perianal fistulas. Doctors specifically test for TB when the fistula behaves unusually or fails to heal.
                </p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <span className="text-[#E75480]">•</span> Cancer & Chronic Infections
                </h4>
                <p className="text-xs leading-relaxed text-[#D3B4C0]">
                  Rarely, a chronic fistula may be linked with malignant tissue or persistent pelvic infections requiring specialized proctological evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: SURGICAL APPROACHES FOR ANAL FISTULA */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-6">
            <div className="space-y-2">
              <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-3.5 py-1 rounded-full border border-[#E75480]/30">
                Surgical & Minimally Invasive Options
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Surgical Approaches for Anal Fistula
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            </div>

            <p className="text-[#D3B4C0] text-base leading-relaxed">
              Several different operations exist for anal fistula. None is best for every situation; the choice depends on the anatomy and the patient. Below are the most widely used approaches:
            </p>

            {/* 1. FiLaC Laser Closure (Featured Recommended Option) */}
            <div className="bg-gradient-to-br from-[#17080D] to-[#2E0F1A] p-6 rounded-2xl border-2 border-[#E75480] shadow-lg space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span className="text-[#E75480] text-2xl">⚡</span> FiLaC® Laser Fistula Closure
                </h3>
                <span className="bg-[#E75480] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended Choice
                </span>
              </div>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">
                A flexible radial laser fiber is inserted into the fistula tract. The laser energy seals and closes the tract from the inside without cutting through sphincter muscles.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#F3E5EC] pt-2">
                <li className="flex items-center gap-2"><span className="text-[#25D366]">✔</span> 100% Sphincter Preservation</li>
                <li className="flex items-center gap-2"><span className="text-[#25D366]">✔</span> Zero Incontinence Risk</li>
                <li className="flex items-center gap-2"><span className="text-[#25D366]">✔</span> No Open Wounds or Complex Dressings</li>
                <li className="flex items-center gap-2"><span className="text-[#25D366]">✔</span> Same-Day Discharge & 48h Recovery</li>
              </ul>
            </div>

            {/* 2. Fistulotomy */}
            <div className="bg-[#17080D] p-6 rounded-2xl border border-[#33151D] space-y-3">
              <h3 className="text-lg font-bold text-white">Fistulotomy</h3>
              <p className="text-xs text-[#D3B4C0] leading-relaxed">
                Fistulotomy is the oldest operation. The surgeon opens the entire fistula track from the external opening to the internal opening, lays it open as a groove, and lets it heal from the bottom up over several weeks. Cure rates are high for simple low fistulas.
              </p>
              <p className="text-xs text-[#E75480] italic">
                *Trade-off: For higher or more complex tracks, fistulotomy divides muscle fibers and carries a risk of incontinence, so laser closure is preferred.
              </p>
            </div>

            {/* 3. Seton Placement */}
            <div className="bg-[#17080D] p-6 rounded-2xl border border-[#33151D] space-y-4">
              <h3 className="text-lg font-bold text-white">Seton Placement</h3>
              <p className="text-xs text-[#D3B4C0] leading-relaxed">
                A seton is a surgical thread or silicone drain placed through the fistula tract to keep it open, maintain drainage, and prevent pus buildup while scarring occurs around the tract.
              </p>

              {/* Seton Diagram */}
              <div className="w-full rounded-xl overflow-hidden border border-[#33151D] bg-[#120609] p-3">
                <img 
                  src={fistulaSetonDiagram} 
                  alt="Seton Placement Procedure Diagram" 
                  className="w-full h-auto object-cover rounded-lg" 
                />
                <p className="text-[11px] text-[#D3B4C0] mt-2 text-center">
                  Seton Drain Placement & Gradual Tract Maturation Procedure (a, b, c)
                </p>
              </div>
            </div>

          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-white">Fistula FAQs</h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1F0A11] border border-[#3A1723] rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left font-bold text-white flex justify-between items-center hover:bg-[#2A0E18] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg text-[#E75480]">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 border-t border-[#3A1723] text-sm md:text-base text-[#D3B4C0] bg-[#17080D]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sticky Column */}
        <div className="lg:col-span-4">
          <div className="bg-[#1F0A11] p-6 rounded-3xl border border-[#3A1723] shadow-md flex flex-col gap-6 sticky top-24 text-center">
            {/* Diagram thumbnail */}
            <img src={fistulaDiagram} alt="Fistula Laser Probe" className="w-full h-auto rounded-2xl border border-[#3A1723]" />
            <div className="text-left space-y-3">
              <h4 className="text-white font-bold text-xl">Consult Dr. Tamanna Sharma</h4>
              <p className="text-[#D3B4C0] text-xs leading-relaxed">
                Get an accurate proctology diagnosis for anal fistula & pus discharge with complete privacy.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+917058430179" className="w-full py-3 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl text-sm text-decoration-none shadow-md">
                📞 Call Directly: +91 7058430179
              </a>
              <a href="https://wa.me/917058430179" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold rounded-xl text-sm text-decoration-none shadow-md">
                💬 WhatsApp Specialist
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Footer */}
      <section className="bg-[#17080D] py-16 text-center border-t border-[#33151D] px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
          Heal Anal Fistula Safely with Laser
        </h2>
        <p className="text-[#D3B4C0] text-sm md:text-base max-w-xl mx-auto mb-6">
          Schedule your confidential evaluation with Dr. Tamanna Sharma.
        </p>
        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fistula." target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl shadow-lg text-decoration-none">
          Book Appointment Now
        </a>
      </section>

    </div>
  );
};

export default Fistula;