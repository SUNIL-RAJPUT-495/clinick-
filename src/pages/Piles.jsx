import { Link } from "react-router-dom";
import { useState } from "react";
import pilesInfoGraphic from "../assets/piles-info-graphic.webp";
import painfulVsPainless from "../assets/painful-vs-painless.webp";
import pilesBg from "../assets/piles-bg.jpg";
import laserTreatmentDiagram from "../assets/laser-treatment-diagram.png";
import sclerotherapyDiagram from "../assets/sclerotherapy-diagram.png";
import coagulationDiagram from "../assets/coagulation-diagram.png";

const Piles = () => {
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
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans selection:bg-[#E75480] selection:text-white"> 
      
      {/* HERO BANNER WITH LUXURY GRADIENT OVERLAY */}
      <section 
        className="relative py-20 md:py-28 text-center border-b border-[#3A1723] px-6 bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${pilesBg})` }}
      >
        {/* Ambient Dark Rose Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0305]/90 via-[#120609]/95 to-[#120609] z-0"></div>

        <div className="max-w-4xl w-full relative z-10 flex flex-col items-center gap-6 animate-fadeIn">
          <span className="inline-flex items-center gap-2 text-[#E75480] text-xs md:text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-5 py-2 rounded-full border border-[#E75480]/30 shadow-[0_0_20px_rgba(231,84,128,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#E75480] animate-pulse"></span>
            Tamanna Clinic & Laser Piles Centre
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            Advanced Laser Surgery for <br className="hidden sm:block"/>
            <span className="bg-gradient-to-r from-[#E75480] via-[#F06292] to-[#FF80AB] bg-clip-text text-transparent">Piles & Hemorrhoids</span>
          </h1>

          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed max-w-2xl font-medium">
            Painless, daycare laser treatment designed for fast recovery and permanent relief under lead specialist <strong className="text-white">Dr. Tamanna Sharma</strong>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Laser%20Piles%20Treatment." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-[#E75480] to-[#C2185B] hover:from-[#F06292] hover:to-[#E75480] text-white font-extrabold rounded-2xl shadow-[0_10px_30px_rgba(231,84,128,0.35)] transition-all hover:scale-105 text-decoration-none">
              💬 Book Consultation
            </a>
            <a href="tel:+917058430179" className="px-8 py-4 bg-[#1F0A11] border border-[#E75480]/50 text-[#F3E5EC] hover:bg-[#2A0E18] font-extrabold rounded-2xl transition-all text-decoration-none hover:border-[#E75480]">
              📞 Call Doctor: +91 7058430179
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT EDITORIAL LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Flowing Medical Story */}
        <div className="lg:col-span-8 flex flex-col gap-14 text-left">
          
          {/* SECTION 1: CLINICAL OVERVIEW */}
          <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#E75480]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E75480]/20 transition-all duration-700"></div>

            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Medical Excellence & Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
              Comprehensive Piles Care
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mb-6"></div>

            <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed mb-6 font-normal">
              If you are suffering from piles and seeking the highest standard of proctological care, <strong className="text-white">Tamanna Clinic</strong> offers state-of-the-art non-surgical and laser solutions. We treat all grades of hemorrhoids with minimal discomfort, guaranteeing rapid recovery and long-term disease elimination.
            </p>

            <div className="p-6 rounded-2xl bg-[#120609]/80 border-l-4 border-[#E75480] border border-[#3A1723] relative">
              <p className="text-[#F3E5EC] text-base md:text-lg leading-relaxed italic m-0">
                "Our primary clinical objective is to deliver painless, scarless, and sphincter-sparing hemorrhoidal ablation so patients can return home the same day and resume active living."
              </p>
              <span className="block text-right text-[#E75480] text-xs font-extrabold uppercase tracking-wider mt-3">
                — Dr. Tamanna Sharma (MS Shalya Pune)
              </span>
            </div>
          </div>

          {/* SECTION 2: SYMPTOMS & CLINICAL IDENTIFICATION */}
          <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Clinical Diagnosis</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                What are the Symptoms of Hemorrhoids?
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-4"></div>
            </div>

            <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed">
              Internal hemorrhoids rarely cause pain in early stages and typically go unnoticed until bleeding or prolapse occurs.
            </p>

            {/* Fluid Feature List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17080D] border border-[#33151D] hover:border-[#E75480]/40 transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#E75480]/15 text-[#E75480] font-black flex items-center justify-center flex-shrink-0 text-lg">🩸</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Painless Rectal Bleeding</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">Bright red blood drops visible on toilet paper, in stool, or in the toilet bowl during bowel evacuation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17080D] border border-[#33151D] hover:border-[#E75480]/40 transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#E75480]/15 text-[#E75480] font-black flex items-center justify-center flex-shrink-0 text-lg">⚠️</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Prolapsed Mass & Bulging</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">Internal hemorrhoidal tissue protruding through the anal canal during straining, which may gently be pushed back inside.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17080D] border border-[#33151D] hover:border-[#E75480]/40 transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#E75480]/15 text-[#E75480] font-black flex items-center justify-center flex-shrink-0 text-lg">⚡</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Acute Pain & Perianal Swelling</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">Sudden severe throbbing pain caused by blood clots in external hemorrhoids (thrombosis) or skin tags.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: CAUSES OF HEMORRHOIDS */}
          <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Etiology & Pressure Factors</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                What Causes Hemorrhoids?
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-4"></div>
            </div>

            <p className="text-[#D3B4C0] text-base leading-relaxed">
              Excessive intra-abdominal pressure causes venous engorgement, swelling, and chronic inflammation of anal blood vessel cushions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Pushing Hard During Stool", desc: "Forcing bowel movements causes intense strain on hemorrhoidal veins." },
                { title: "Heavy Weightlifting & Straining", desc: "Sudden abdominal spikes during physical exertion or heavy lifting." },
                { title: "Prolonged Toilet Sitting", desc: "Extended toilet sitting pulls down rectal blood vessels due to gravity." },
                { title: "Chronic Constipation or Diarrhea", desc: "Irregular stool consistency damages the delicate anal lining." },
                { title: "Low-Fiber Diet Habits", desc: "Lack of dietary roughage leads to small, hard, abrasive stool." },
                { title: "Pregnancy & Uterine Pressure", desc: "Expanding fetus applies continuous pressure on pelvic venous return." },
                { title: "Overweight & Obesity", desc: "Continuous excess body weight increases pelvic floor strain." },
                { title: "Anal Intercourse", desc: "Direct mechanical friction and vascular micro-trauma." }
              ].map((cause, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#17080D] border border-[#33151D] space-y-1 hover:border-[#E75480]/40 transition-colors">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <span className="text-[#E75480]">•</span> {cause.title}
                  </h4>
                  <p className="text-xs text-[#D3B4C0] pl-3 leading-relaxed">{cause.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: COMPLICATIONS OF UNTREATED PILES */}
          <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Medical Warning</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                What are the Complications of Hemorrhoids?
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-4"></div>
            </div>

            <p className="text-[#D3B4C0] text-base leading-relaxed">
              If left untreated, piles can progress from mild discomfort to severe medical complications:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#17080D] border border-[#33151D] flex items-start gap-4">
                <span className="text-2xl text-[#E75480]">🔴</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Anemia</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">Chronic blood loss during bowel movements can deplete iron reserves, causing severe fatigue and low hemoglobin.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#17080D] border border-[#33151D] flex items-start gap-4">
                <span className="text-2xl text-[#E75480]">🔴</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Thrombosed External Hemorrhoids</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">A painful blood clot forms inside the external hemorrhoid node, resulting in a firm, swollen, bluish tender mass.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#17080D] border border-[#33151D] flex items-start gap-4">
                <span className="text-2xl text-[#E75480]">🔴</span>
                <div>
                  <h4 className="text-white font-extrabold text-base">Strangulated Hemorrhoids</h4>
                  <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed mt-1">If anal sphincter muscles constrict blood supply to a prolapsed hemorrhoid, tissue ischemia and extreme pain occur requiring immediate intervention.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: ADVANCED SURGICAL & LASER PROCEDURES */}
          <div className="bg-gradient-to-br from-[#1C0A11] via-[#17080D] to-[#120609] p-8 md:p-12 rounded-3xl border border-[#3A1723] shadow-2xl flex flex-col gap-8">
            <div>
              <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">State-Of-The-Art Solutions</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                Advanced Treatment Options
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-4"></div>
            </div>

            {/* Featured Laser Option */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#2E0F1A] to-[#17080D] border-2 border-[#E75480] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <span className="bg-[#E75480] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Gold Standard</span>
                <h3 className="text-2xl font-black text-white">Laser Hemorrhoidoplasty (LHP)</h3>
                <p className="text-xs md:text-sm text-[#D3B4C0] leading-relaxed">
                  Controlled 360° radial laser fiber shrinks hemorrhoid nodes from the inside out without cutting, wounds, or stitches.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs text-white font-bold">
                  <span>✔ No Stitches</span>
                  <span>✔ Zero Cuts</span>
                  <span>✔ Same-Day Discharge</span>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img src={laserTreatmentDiagram} alt="Laser Hemorrhoidoplasty Diagram" className="w-full h-auto rounded-2xl border border-[#3A1723] shadow-md object-cover" />
              </div>
            </div>

            {/* Non-Surgical Procedures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#17080D] border border-[#33151D] space-y-3">
                <img src={sclerotherapyDiagram} alt="Sclerotherapy Diagram" className="w-full h-40 rounded-xl object-cover border border-[#33151D]" />
                <h4 className="text-white font-extrabold text-base">Sclerotherapy Injection</h4>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Chemical agent injection induces node fibrosis, cutting off blood supply for painless shrinkage.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#17080D] border border-[#33151D] space-y-3">
                <img src={coagulationDiagram} alt="Infrared Coagulation Diagram" className="w-full h-40 rounded-xl object-cover border border-[#33151D]" />
                <h4 className="text-white font-extrabold text-base">Infrared Photocoagulation (IRC)</h4>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Infrared thermal energy seals bleeding micro-vessels on early internal hemorrhoids instantly.</p>
              </div>
            </div>
          </div>

          {/* SECTION 6: FAQS */}
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
            <img 
              src={pilesInfoGraphic} 
              alt="Dr. Tamanna Sharma Proctologist" 
              className="w-full h-auto object-cover rounded-2xl border border-[#3A1723] shadow-md"
            />
            <div className="text-left space-y-3">
              <h4 className="text-white font-extrabold text-xl">Dr. Tamanna Sharma</h4>
              <p className="text-[#E75480] text-xs font-bold uppercase tracking-wider">MS Shalya Pune - 99170-A</p>
              <p className="text-[#D3B4C0] text-xs leading-relaxed">
                Consultant Proctologist & Laser Specialist providing compassionate, confidential, and pain-free piles care in Akola.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Laser%20Piles%20Treatment." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl shadow-lg transition-all text-decoration-none text-sm">
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
          Permanent Relief from Piles Pain Starts Here
        </h2>
        <p className="text-[#D3B4C0] text-base max-w-xl mx-auto mb-8">
          Schedule your confidential evaluation with Dr. Tamanna Sharma today.
        </p>
        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-2xl shadow-xl transition-all hover:scale-105 text-decoration-none">
          Book Appointment Now
        </a>
      </section>

    </div>
  );
};

export default Piles;