import React, { useState } from "react";
import { Link } from "react-router-dom";
import fistulaDiagram from "../assets/fistula-diagram.png";
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
    <div className="min-h-screen bg-[#FFF5F8] font-sans">

      {/* HERO BANNER */}
      <section 
        className="relative py-16 md:py-24 text-center border-b border-[#F4DCE4] px-6 bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${pilesBg})` }}
      >
        <div className="absolute inset-0 bg-[#6A1B2E]/10 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-3xl w-full bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#F4DCE4]/60 shadow-2xl flex flex-col gap-5 relative z-10">
          <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full w-fit leading-normal max-w-full text-center mx-auto">
            Tamanna Clinic & Laser Piles Centre
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#6A1B2E] leading-tight">
            Advanced Laser & Sphincter-Saving <br/>
            <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#C2185B] bg-clip-text text-transparent">Anal Fistula Treatment</span>
          </h1>
          <p className="text-[#5E3542] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Safe, painless, and highly effective laser fistula closure (FiLaC / SiLaC) that eliminates recurrent discharge, protects sphincter continence, and ensures faster recovery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fistula%20treatment." target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-[#E75480] hover:bg-[#C2185B] text-white font-bold rounded-xl shadow-md transition-all">
              Book Appointment
            </a>
            <a href="tel:+917058430179" className="px-7 py-3 bg-white border border-[#E75480] text-[#E75480] hover:bg-[#FFF5F8] font-bold rounded-xl transition-all">
              Call Specialist
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column (Details) */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* Overview Card with Diagram */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E]">
                What is an Anal Fistula?
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
              <p className="text-[#5E3542] text-base leading-relaxed">
                An <strong>anal fistula (Fistula-in-Ano)</strong> is an abnormal epithelialized tunnel that connects an infected crypt gland inside the anal canal to the perianal skin. It is usually the result of a previous perianal abscess that did not heal completely.
              </p>
              <p className="text-[#5E3542] text-sm leading-relaxed bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                At <strong>Tamanna Clinic</strong>, we specialize in modern sphincter-preserving laser surgeries (FiLaC / SiLaC) and advanced Kshar Sutra therapy to seal the fistula tract permanently with minimal pain and no risk of muscle damage.
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#1D4ED8] p-1 shadow-lg bg-white">
                <img 
                  src={fistulaDiagram} 
                  alt="Fistula-in-ano Anatomy Diagram" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold tracking-widest uppercase">Etiology & Causes</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E] mt-1">
                What causes an anal fistula?
              </h3>
            </div>
            
            <p className="text-[#5E3542] text-base leading-relaxed">
              Most anal fistulas develop as a complication of an infected anal abscess:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Previous Anal Abscess</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Clogged anal crypt glands cause infection and pus collection that burrows to the skin.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Inflammatory Bowel Disease</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Crohn’s disease or ulcerative colitis causing deep chronic tissue inflammation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Incomplete Abscess Drainage</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Spontaneous rupture or incomplete drainage of an abscess leaving an active tract.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Trauma or Infection</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Previous pelvic surgery, chronic fissures, or foreign body irritation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold tracking-widest uppercase">Clinical Symptoms</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E] mt-1">
                What are the Symptoms of Anal Fistula?
              </h3>
            </div>

            <ul className="space-y-4 text-[#5E3542] text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Persistent or Intermittent Discharge:</strong> Continuous oozing of pus, blood, or watery mucus from an external opening near the anus, staining clothing.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Pain and Swelling:</strong> Throbbing, constant perianal pain that worsens when sitting, walking, or passing bowel movements.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Recurrent Perianal Abscesses:</strong> Repeated painful lumps near the anus that swell, burst, and drain repeatedly.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Skin Irritation & Itching:</strong> Redness, burning, and severe dermatitis around the anal region due to chronic drainage.
                </div>
              </li>
            </ul>
          </div>

          {/* Treatment Options Section */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold tracking-widest uppercase">Advanced Treatment Options</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E] mt-1">
                Advanced Treatment for Anal Fistula
              </h3>
            </div>

            <div className="space-y-6 text-[#5E3542] text-sm md:text-base leading-relaxed">
              
              {/* 1. FiLaC Laser Treatment */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-[#FFF5F8]">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">1.</span> Laser Fistula Treatment (FiLaC / SiLaC)
                </h4>
                <p>
                  <strong>Fistula-tract Laser Closure (FiLaC)</strong> is the world’s most advanced sphincter-preserving technique. A circular emitting laser fiber is introduced directly into the fistula tract, delivering uniform thermal energy to coagulate and collapse the diseased tunnel from within. It avoids cutting the sphincter muscle, ensuring 100% continence and rapid daycare recovery.
                </p>
              </div>

              {/* 2. Advanced Kshar Sutra Therapy */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">2.</span> Advanced Kshar Sutra Therapy
                </h4>
                <p>
                  A globally recognized Ayurvedic para-surgical technique for high or complex fistulas. A medicated herbal thread is placed in the tract to provide gradual excision, debridement, and simultaneous healing, resulting in an exceptionally low recurrence rate.
                </p>
              </div>

              {/* 3. Fistulectomy / Seton Placement */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">3.</span> Fistulectomy & Seton Placement
                </h4>
                <p>
                  For complex, high, or branching fistulas, a draining or cutting seton is placed to keep the tract open for gradual drainage and controlled closure without sacrificing anal sphincter control.
                </p>
              </div>

              {/* 4. Abscess Drainage & Management */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">4.</span> Abscess Drainage & Acute Care
                </h4>
                <p>
                  Immediate, sterile drainage of perianal abscesses prevents tissue necrosis and stops the formation of complicated secondary fistula branches.
                </p>
              </div>

            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E]">
              Frequently Asked Questions
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

        {/* Right Column: Sticky Doctor & Appointment Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#F4DCE4] shadow-lg sticky top-28 space-y-6">
            <h4 className="text-xl font-black text-[#6A1B2E] border-b border-[#F4DCE4] pb-3">
              Consult Fistula Specialist
            </h4>
            <div className="space-y-3 text-sm text-[#5E3542]">
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">FiLaC Laser Surgery (Sphincter Saving)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Same-Day Discharge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Zero Incontinence Risk</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Lowest Recurrence Rate</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F4DCE4] space-y-3">
              <a 
                href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20book%20an%20appointment%20for%20Anal%20Fistula%20treatment%20at%20Tamanna%20Clinic." 
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

export default Fistula;