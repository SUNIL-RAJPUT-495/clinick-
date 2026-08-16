import React, { useState } from "react";
import { Link } from "react-router-dom";
import constipationCausesCustom from "../assets/constipation-causes-custom.jpg";
import constipationGutCustom from "../assets/constipation-gut-custom.jpg";
import pilesBg from "../assets/piles-bg.jpg";

const Constipation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does chronic constipation cause piles and fissures?",
      a: "Excessive straining to pass hard stool increases venous pressure in the anal canal, causing veins to swell into piles (hemorrhoids). Additionally, hard stool tearing the delicate anal lining causes extremely painful anal fissures."
    },
    {
      q: "When should I consult a doctor for constipation?",
      a: "If constipation lasts for more than 2 weeks, or if you experience severe pain, blood in stool, vomiting, unexplained weight loss, or an inability to pass gas, consult Dr. Tamanna Sharma immediately."
    },
    {
      q: "Are laxatives safe for long-term use?",
      a: "Over-the-counter stimulant laxatives can cause bowel dependency if used long-term. Medical management under a specialist focuses on safe stool softeners, osmotic agents, dietary fiber, and lifestyle regulation."
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
            Comprehensive Constipation <br/>
            <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#F06292] bg-clip-text text-transparent">Treatment & Medical Care</span>
          </h1>
          <p className="text-[#D3B4C0] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Prevent Piles, Anal Fissures & Severe Complications with Expert Gastroenterology & Proctology Management under Dr. Tamanna Sharma.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Constipation%20Treatment." target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-[#E75480] hover:bg-[#F06292] text-white font-bold rounded-xl shadow-md transition-all text-decoration-none">
              Book Consultation
            </a>
            <a href="tel:+917058430179" className="px-7 py-3 bg-[#17080D] border border-[#E75480] text-[#E75480] hover:bg-[#2A0E18] font-bold rounded-xl transition-all text-decoration-none">
              Call Specialist
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* SECTION 1: CONSTIPATION DEFINITION & OVERVIEW */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-5">
            <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-3.5 py-1 rounded-full w-fit border border-[#E75480]/30">
              Clinical Definition & Overview
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              What is Constipation?
            </h2>
            <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            
            <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed">
              <strong>Constipation</strong> is defined as a condition characterized by infrequent or difficulty in evacuation of stools. Constipation can be accompanied by various symptoms, which include:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="bg-[#17080D] p-3.5 rounded-xl border border-[#33151D] flex items-center gap-3 text-sm text-[#F3E5EC] font-semibold">
                <span className="text-[#E75480] font-bold">•</span> Hard or lumpy stools
              </div>
              <div className="bg-[#17080D] p-3.5 rounded-xl border border-[#33151D] flex items-center gap-3 text-sm text-[#F3E5EC] font-semibold">
                <span className="text-[#E75480] font-bold">•</span> Straining while passing stools
              </div>
              <div className="bg-[#17080D] p-3.5 rounded-xl border border-[#33151D] flex items-center gap-3 text-sm text-[#F3E5EC] font-semibold">
                <span className="text-[#E75480] font-bold">•</span> Sensation of anorectal blockage
              </div>
              <div className="bg-[#17080D] p-3.5 rounded-xl border border-[#33151D] flex items-center gap-3 text-sm text-[#F3E5EC] font-semibold">
                <span className="text-[#E75480] font-bold">•</span> Incomplete evacuation & abdominal discomfort
              </div>
            </div>

            {/* Complications Warning Box */}
            <div className="bg-gradient-to-r from-[#2A0E18] to-[#1F0A11] p-6 rounded-2xl border-l-4 border-[#E75480] border border-[#3A1723] space-y-2 mt-2">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-xl">⚠️</span> Why Untreated Constipation is Dangerous
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">
                If left untreated, chronic constipation leads to major secondary anorectal complications such as <strong className="text-[#E75480]">Piles/Hemorrhoids</strong>, <strong className="text-[#E75480]">Anal Fissures</strong>, <strong className="text-white">Faecal Impaction</strong>, and <strong className="text-white">Rectal Prolapse</strong>. These cause severe pain, bleeding, infection, and in extreme situations require surgical intervention.
              </p>
            </div>
          </div>

          {/* SECTION 2: REASONS & CAUSES OF CONSTIPATION */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-6">
            <div className="space-y-2">
              <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-3.5 py-1 rounded-full border border-[#E75480]/30">
                Risk Factors & Causes
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Why Does Constipation Occur?
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            </div>

            <p className="text-[#D3B4C0] text-base leading-relaxed">
              The main cause of constipation involves a combination of lifestyle habits, medical conditions, dietary choices, and medication use.
            </p>

            {/* Custom High-Res Medical Infographic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#17080D] p-4 rounded-2xl border border-[#33151D]">
                <img 
                  src={constipationCausesCustom} 
                  alt="Understanding Constipation & Common Causes Medical Diagram" 
                  className="w-full h-auto rounded-xl object-cover shadow-md" 
                />
                <p className="text-xs text-[#D3B4C0] mt-2.5 text-center font-semibold">Medical Diagram: Human Colon System & Primary Causes of Constipation</p>
              </div>
              <div className="bg-[#17080D] p-4 rounded-2xl border border-[#33151D]">
                <img 
                  src={constipationGutCustom} 
                  alt="Intestinal Motility & Colon Transit Relief Diagram" 
                  className="w-full h-auto rounded-xl object-cover shadow-md" 
                />
                <p className="text-xs text-[#D3B4C0] mt-2.5 text-center font-semibold">Medical Graphic: Physiological Mechanisms & Normal Motility Relief</p>
              </div>
            </div>

            {/* 8 Primary Reasons List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="text-[#E75480]">💧</span> Not Drinking Enough Water
                </h4>
                <p className="text-xs text-[#D3B4C0]">Dehydration causes the colon to absorb fluid from stool, making it dry and hard.</p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="text-[#E75480]">🍔</span> Unhealthy Low-Fiber Diet
                </h4>
                <p className="text-xs text-[#D3B4C0]">Diets heavy in processed foods, cheese, and meats lack essential dietary fiber.</p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="text-[#E75480]">🏃</span> Physical Inactivity
                </h4>
                <p className="text-xs text-[#D3B4C0]">Sedentary routine reduces abdominal muscle tone and slows down bowel peristalsis.</p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="text-[#E75480]">🧠</span> Stress & Anxiety
                </h4>
                <p className="text-xs text-[#D3B4C0]">Disruption in the gut-brain axis impairs natural digestive motility.</p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="text-[#E75480]">🤰</span> Pregnancy Pressure
                </h4>
                <p className="text-xs text-[#D3B4C0]">Hormonal shifts and physical uterus pressure slow down bowel transit time.</p>
              </div>

              <div className="bg-[#17080D] p-4 rounded-xl border border-[#33151D] space-y-1">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="text-[#E75480]">💊</span> Medication Side Effects
                </h4>
                <p className="text-xs text-[#D3B4C0]">Iron supplements, painkillers, antacids, or blood pressure medicines.</p>
              </div>
            </div>
          </div>

          {/* SECTION 3: TREATMENT & MANAGEMENT AT TAMANNA CLINIC */}
          <div className="bg-[#1F0A11] p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col gap-6">
            <div className="space-y-2">
              <span className="inline-block text-[#E75480] text-xs font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-3.5 py-1 rounded-full border border-[#E75480]/30">
                Medical & Lifestyle Management
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                How Dr. Tamanna Sharma Treats Constipation
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
            </div>

            <p className="text-[#D3B4C0] text-base leading-relaxed">
              At Tamanna Clinic, we combine individualized gastroenterology diagnostic assessment with personalized medical therapies to resolve chronic constipation permanently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#17080D] p-5 rounded-2xl border border-[#33151D] flex flex-col gap-2">
                <span className="text-2xl">🥦</span>
                <h4 className="text-white font-extrabold text-base">Fiber-Rich Nutrition Plan</h4>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Tailored dietary guidance with soluble & insoluble fiber to add bulk and retain stool moisture.</p>
              </div>

              <div className="bg-[#17080D] p-5 rounded-2xl border border-[#33151D] flex flex-col gap-2">
                <span className="text-2xl">🥛</span>
                <h4 className="text-white font-extrabold text-base">Hydration & Fluid Protocol</h4>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Optimal fluid intake strategies ensuring stool remains soft and easy to evacuate painless.</p>
              </div>

              <div className="bg-[#17080D] p-5 rounded-2xl border border-[#33151D] flex flex-col gap-2">
                <span className="text-2xl">💊</span>
                <h4 className="text-white font-extrabold text-base">Safe Prokinetic Medication</h4>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Non-habit-forming osmotic laxatives, stool softeners, and bowel motility regulation under supervision.</p>
              </div>

              <div className="bg-[#17080D] p-5 rounded-2xl border border-[#33151D] flex flex-col gap-2">
                <span className="text-2xl">🛡️</span>
                <h4 className="text-white font-extrabold text-base">Anorectal Complication Guard</h4>
                <p className="text-xs text-[#D3B4C0] leading-relaxed">Preventative care protecting anal sphincters from tears, fissure development, and hemorrhoid swelling.</p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-white">Constipation Treatment FAQs</h3>
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
            <img src={constipationCausesCustom} alt="Constipation Digestive Health" className="w-full h-auto rounded-2xl border border-[#3A1723]" />
            <div className="text-left space-y-3">
              <h4 className="text-white font-bold text-xl">Consult Dr. Tamanna Sharma</h4>
              <p className="text-[#D3B4C0] text-xs leading-relaxed">
                Get an accurate diagnosis for chronic constipation, bowel irregularity, and prevention of piles/fissures.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+917058430179" className="w-full py-3 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl text-sm text-decoration-none shadow-md">
                📞 Call Directly: +91 7058430179
              </a>
              <a href="https://wa.me/917058430179" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold rounded-xl text-sm text-decoration-none shadow-md">
                💬 WhatsApp Doctor
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Footer */}
      <section className="bg-[#17080D] py-16 text-center border-t border-[#33151D] px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
          Relieve Constipation & Protect Anorectal Health
        </h2>
        <p className="text-[#D3B4C0] text-sm md:text-base max-w-xl mx-auto mb-6">
          Schedule your medical evaluation with Dr. Tamanna Sharma today.
        </p>
        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Constipation%20Treatment." target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl shadow-lg text-decoration-none">
          Book Appointment Now
        </a>
      </section>

    </div>
  );
};

export default Constipation;
