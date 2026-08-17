import React, { useState } from "react";
import { Link } from "react-router-dom";
import fistulaClassificationBanner from "../assets/WhatsApp Image 2026-08-15 at 3.17.13 PM.jpeg";
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
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans selection:bg-[#E75480] selection:text-white">

      {/* SEAMLESS BORDERLESS CONTENT FLOW */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-left flex flex-col gap-16">
          
        {/* SECTION 1: WHAT IS AN ANAL FISTULA */}
        <div className="space-y-6">
          <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">
            Understanding the Anatomy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Is an Anal Fistula?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full"></div>
          
          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed">
            To understand a fistula, it helps to picture the anatomy. Inside the anal canal, just above the opening, there is a ring of small glands. These glands normally produce mucus that helps with bowel movements.
          </p>
          <p className="text-[#D3B4C0] text-base leading-relaxed">
            Sometimes one of these glands becomes blocked and infected, and the infection spreads outward through the tissue around the anus. This collection of pus is called a <strong className="text-white font-bold">perianal abscess</strong>.
          </p>

          <div className="py-4 border-l-4 border-[#E75480] pl-6 text-[#D3B4C0] space-y-3">
            <p className="text-base leading-relaxed">
              When the abscess drains, the infection often leaves a narrow channel behind. One end of the channel opens inside the anal canal (the <strong className="text-[#E75480]">internal opening</strong>), and the other end opens on the skin near the anus (the <strong className="text-[#E75480]">external opening</strong>). This channel is the fistula.
            </p>
            <p className="text-base leading-relaxed italic text-[#F3E5EC]">
              Because stool and bacteria continuously enter the internal opening, the track tends to stay open and keep discharging fluid or pus rather than healing on its own.
            </p>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* IMAGE JUST ABOVE DIAGNOSTIC & SURGICAL CLASSIFICATION */}
        <div className="w-full flex justify-center py-2">
          <div className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#3A1723] bg-white p-2 sm:p-4">
            <img 
              src={fistulaClassificationBanner} 
              alt="Diagnostic and Surgical Classification Diagram" 
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>

        {/* SECTION 2: CLASSIFICATION - WHY THE TYPE OF FISTULA MATTERS */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">
              Diagnostic & Surgical Classification
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              Classification: Why the Type of Fistula Matters
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          {/* Clean Image Showcase */}
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl my-4">
            <img 
              src={fistulaClassificationDiagram} 
              alt="Classification: Why the Type of Fistula Matters" 
              className="w-full h-auto object-cover rounded-3xl" 
            />
            <p className="text-xs text-[#D3B4C0] mt-3 text-center italic">
              Infographic: Parks' Classification of Anal Fistulas (1: Intersphincteric, 2: Transsphincteric, 3: Suprasphincteric, 4: Extrasphincteric)
            </p>
          </div>

          <p className="text-[#D3B4C0] text-base leading-relaxed">
            Fistulas are classified based on their relationship to the anal sphincter muscles—the ring of muscle that controls bowel continence. Knowing the exact track helps proctologists choose a treatment method that cures the fistula while completely protecting muscle function.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-1">
              <h4 className="text-[#E75480] font-extrabold text-base">Type 1 • Intersphincteric</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Passes between internal & external sphincter muscles without crossing the main external sphincter ring.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-[#E75480] font-extrabold text-base">Type 2 • Transsphincteric</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Crosses through both internal and external sphincter muscle walls directly to perianal skin.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-[#E75480] font-extrabold text-base">Type 3 • Suprasphincteric</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Loops upward above the puborectalis muscle before turning downward to external skin.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-[#E75480] font-extrabold text-base">Type 4 • Extrasphincteric</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Extends directly from the high rectum down through the levator ani muscle to the outer skin.</p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 3: WHY DO ANAL FISTULAS FORM? */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">
              Etiology & Causes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              Why Do Anal Fistulas Form?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <p className="text-[#D3B4C0] text-base leading-relaxed">
            Most anal fistulas — roughly <strong className="text-white">nine out of ten</strong> — are <strong className="text-[#E75480]">cryptoglandular</strong> in origin, meaning they start with an infection in one of the small anal glands as described above. These are sometimes called "ordinary" or "simple" fistulas, though the actual anatomy can still be complex.
          </p>

          <p className="text-[#F3E5EC] text-base font-bold">
            The remaining fistulas have specific underlying causes that change how the condition is managed:
          </p>

          <div className="space-y-4 text-[#D3B4C0]">
            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">•</span> Crohn's Disease
              </h4>
              <p className="text-sm leading-relaxed pl-4">
                Form of inflammatory bowel disease causing inflammation anywhere in the digestive tract. Crohn's-related fistulas are often multiple, complex, and require both surgical and medical treatment.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">•</span> Previous Surgery or Trauma
              </h4>
              <p className="text-sm leading-relaxed pl-4">
                Injury to the anal area, including obstetric (childbirth-related) tears or earlier anal surgery, can lead to fistula formation.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="text-[#E75480]">•</span> Tuberculosis (TB)
              </h4>
              <p className="text-sm leading-relaxed pl-4">
                In regions where tuberculosis is common, including parts of India, TB can cause perianal fistulas. Doctors specifically test for TB when the fistula behaves unusually or fails to heal.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="text-[#E75480]">•</span> Cancer & Chronic Infections
              </h4>
              <p className="text-sm leading-relaxed pl-4">
                Rarely, a chronic fistula may be linked with malignant tissue or persistent pelvic infections requiring specialized proctological evaluation.
              </p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 4: SURGICAL APPROACHES FOR ANAL FISTULA */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">
              Surgical & Minimally Invasive Options
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              Surgical Approaches for Anal Fistula
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <p className="text-[#D3B4C0] text-base leading-relaxed">
            Several different operations exist for anal fistula. None is best for every situation; the choice depends on the anatomy and the patient. Below are the most widely used approaches:
          </p>

          {/* 1. FiLaC Laser Closure */}
          <div className="space-y-3 py-4">
            <div className="flex items-center gap-3">
              <span className="text-[#E75480] text-2xl font-black">⚡</span>
              <h3 className="text-2xl font-black text-white">FiLaC® Laser Fistula Closure</h3>
            </div>
            <p className="text-base text-[#D3B4C0] leading-relaxed">
              A flexible radial laser fiber is inserted into the fistula tract. The laser energy seals and closes the tract from the inside without cutting through sphincter muscles.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-bold text-[#F3E5EC] pt-1">
              <span className="text-[#25D366]">✔ 100% Sphincter Preservation</span>
              <span className="text-[#25D366]">✔ Zero Incontinence Risk</span>
              <span className="text-[#25D366]">✔ No Open Wounds</span>
              <span className="text-[#25D366]">✔ 48h Rapid Recovery</span>
            </div>
          </div>

          {/* 2. Fistulotomy */}
          <div className="space-y-2 py-2">
            <h3 className="text-xl font-extrabold text-white">Fistulotomy</h3>
            <p className="text-sm text-[#D3B4C0] leading-relaxed">
              Fistulotomy is the oldest operation. The surgeon opens the entire fistula track from the external opening to the internal opening, lays it open as a groove, and lets it heal from the bottom up over several weeks.
            </p>
          </div>

          {/* 3. Seton Placement */}
          <div className="space-y-4 py-2">
            <h3 className="text-xl font-extrabold text-white">Seton Placement</h3>
            <p className="text-sm text-[#D3B4C0] leading-relaxed">
              A seton is a surgical thread or silicone drain placed through the fistula tract to keep it open, maintain drainage, and prevent pus buildup while scarring occurs around the tract.
            </p>

            <div className="w-full rounded-3xl overflow-hidden shadow-2xl my-4">
              <img 
                src={fistulaSetonDiagram} 
                alt="Seton Placement Procedure Diagram" 
                className="w-full h-auto object-cover rounded-3xl" 
              />
              <p className="text-xs text-[#D3B4C0] mt-3 text-center italic">
                Seton Drain Placement & Gradual Tract Maturation Procedure (a, b, c)
              </p>
            </div>
          </div>

        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* FAQs */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-white">Fistula FAQs</h3>
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

      {/* CTA FOOTER */}
      <section className="bg-gradient-to-r from-[#17080D] via-[#2E0F1A] to-[#17080D] py-16 text-center border-t border-[#33151D] px-6">
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Heal Anal Fistula Safely with Laser
        </h2>
        <p className="text-[#D3B4C0] text-base max-w-xl mx-auto mb-8">
          Schedule your confidential evaluation with Dr. Tamanna Sharma today.
        </p>
        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fistula." target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-2xl shadow-xl transition-all hover:scale-105 text-decoration-none">
          Book Appointment Now
        </a>
      </section>

    </div>
  );
};

export default Fistula;