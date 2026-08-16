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
      
      {/* HERO BANNER - BORDERLESS */}
      <section 
        className="relative py-20 md:py-28 text-center px-6 bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${pilesBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0305]/90 via-[#120609]/95 to-[#120609] z-0"></div>

        <div className="max-w-4xl w-full relative z-10 flex flex-col items-center gap-6 animate-fadeIn">
          <span className="inline-flex items-center gap-2 text-[#E75480] text-xs md:text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-5 py-2 rounded-full border border-[#E75480]/30 shadow-[0_0_20px_rgba(231,84,128,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#E75480] animate-pulse"></span>
            Tamanna Clinic & Laser Piles Centre
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            Best Piles Doctor & <br className="hidden sm:block"/>
            <span className="bg-gradient-to-r from-[#E75480] via-[#F06292] to-[#FF80AB] bg-clip-text text-transparent">Laser Surgery Centre</span>
          </h1>

          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed max-w-2xl font-medium">
            Advanced Laser Treatment for Safe, Painless & Fast Recovery. Get long-term relief from internal, external, and bleeding piles under <strong className="text-white">Dr. Tamanna Sharma</strong>.
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

      {/* SEAMLESS BORDERLESS CONTENT FLOW */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-left flex flex-col gap-16">
        
        {/* SECTION 1: CLINICAL OVERVIEW */}
        <div className="space-y-6">
          <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Medical Excellence & Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Advanced Piles Treatment
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full"></div>

          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed font-normal">
            People suffering from piles, looking for the best doctor for piles, our experienced proctology experts offer safe, painless, and advanced piles treatment at high success rates. We treat all grades of piles using modern laser procedures and nonsurgical methods to guarantee quick recovery and long-term relief.
          </p>

          <div className="py-4 border-l-4 border-[#E75480] pl-6 text-[#D3B4C0]">
            <p className="text-[#F3E5EC] text-base md:text-lg leading-relaxed italic m-0">
              "Dr. Tamanna Sharma is a certified proctologist and specialist in Laser Piles Treatment. She provides personalized care with minimal pain and fast recovery, ensuring maximum patient comfort and permanent cure."
            </p>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 2: SYMPTOMS & CLINICAL IDENTIFICATION */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Clinical Diagnosis</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              What are the symptoms of hemorrhoids?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed">
            Internal hemorrhoids rarely cause pain (and typically can't be felt) unless they prolapse. Many people with internal hemorrhoids don't know they have them because they're inside your rectum.
          </p>
          <p className="text-[#D3B4C0] text-base leading-relaxed">
            If you have symptoms of internal hemorrhoids, you might see <strong className="text-[#E75480]">bright red blood</strong> on toilet paper, in your poop, or in the toilet. If an internal hemorrhoid prolapses through your anus, you may be able to gently push it back inside.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">🩸</span> Painless rectal bleeding during bowel movements
            </div>
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">⚠️</span> Prolapsed tissue bulging outside anal opening
            </div>
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">⚡</span> Sudden acute pain (in thrombosed external piles)
            </div>
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">✖</span> Persistent itching, soreness & skin tag swelling
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 3: CAUSES OF HEMORRHOIDS */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Etiology & Pressure Factors</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              What causes hemorrhoids?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <p className="text-[#D3B4C0] text-base leading-relaxed">
            Too much pressure on the veins in your anus or rectum, as well as irregular bowel movements, cause hemorrhoids. This pressure and irritation lead to swelling and inflammation of your veins.
          </p>

          <p className="text-[#F3E5EC] text-base font-bold">
            Some activities or conditions that cause pressure and lead to (or worsen) hemorrhoids are:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
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
              <div key={idx} className="space-y-1">
                <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                  <span className="text-[#E75480]">•</span> {cause.title}
                </h4>
                <p className="text-sm text-[#D3B4C0] pl-4 leading-relaxed">{cause.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 4: COMPLICATIONS OF UNTREATED PILES */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">Medical Warning</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              What are the complications of hemorrhoids?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <p className="text-[#D3B4C0] text-base leading-relaxed">
            Hemorrhoids can be uncomfortable and painful, but they don't tend to cause serious problems. Rarely, people with hemorrhoids develop:
          </p>

          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">🔴</span> Anemia
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed pl-6">
                Chronic blood loss during bowel movements can deplete iron reserves, causing severe fatigue and low hemoglobin.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">🔴</span> Blood Clots in External Hemorrhoids (Thrombosed)
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed pl-6">
                A blood clot forms inside the external hemorrhoid node, resulting in a sudden, firm, extremely painful bluish lump.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">🔴</span> Infection & Skin Tags
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed pl-6">
                Ulcerated bleeding nodes can get infected, leaving residual skin folds that cause persistent itching and hygiene difficulty.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">🔴</span> Strangulated Hemorrhoids
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed pl-6">
                If the anal sphincter muscles cut off blood supply to a prolapsed internal hemorrhoid, tissue ischemia and severe pain occur.
              </p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 5: PAINFUL VS PAINLESS INFOGRAPHIC */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-white">Painful or Painless Piles?</h3>
          <p className="text-[#D3B4C0] text-base leading-relaxed">
            Internal piles in early stages (Grade 1 & 2) are typically painless and noticed due to bleeding. External piles or prolapsed thrombosed hemorrhoids cause sudden sharp pain.
          </p>
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl my-4">
            <img 
              src={painfulVsPainless} 
              alt="Painful vs Painless Piles infographic" 
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 6: ADVANCED PROCEDURES */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">State-Of-The-Art Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              Advanced Treatment Options
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <div className="space-y-4 py-2">
            <div className="flex items-center gap-3">
              <span className="text-[#E75480] text-2xl font-black">⚡</span>
              <h3 className="text-2xl font-black text-white">Laser Hemorrhoidoplasty (LHP)</h3>
            </div>
            <p className="text-base text-[#D3B4C0] leading-relaxed">
              Precision 360° radial laser fiber ablates and shrinks hemorrhoidal tissue without any cuts or stitches, offering immediate relief.
            </p>
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl my-4">
              <img src={laserTreatmentDiagram} alt="Laser Hemorrhoidoplasty Diagram" className="w-full h-auto rounded-3xl object-cover" />
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-bold text-[#F3E5EC]">
              <span className="text-[#25D366]">✔ No cuts, wounds, or stitches</span>
              <span className="text-[#25D366]">✔ Minimal pain & bleeding</span>
              <span className="text-[#25D366]">✔ Same-day discharge (30-45 mins)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <img src={sclerotherapyDiagram} alt="Sclerotherapy Diagram" className="w-full h-48 rounded-3xl object-cover shadow-2xl" />
              <h4 className="text-white font-extrabold text-lg mt-2">Sclerotherapy Injection</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Chemical agent injection induces node fibrosis, cutting off blood supply for painless shrinkage.</p>
            </div>

            <div className="space-y-2">
              <img src={coagulationDiagram} alt="Infrared Coagulation Diagram" className="w-full h-48 rounded-3xl object-cover shadow-2xl" />
              <h4 className="text-white font-extrabold text-lg mt-2">Infrared Photocoagulation (IRC)</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Infrared thermal energy seals bleeding micro-vessels on early internal hemorrhoids instantly.</p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 7: FAQS */}
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