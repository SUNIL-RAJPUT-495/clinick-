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
            Advanced Laser & Medical <br/>
            <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#C2185B] bg-clip-text text-transparent">Anal Fissure Treatment</span>
          </h1>
          <p className="text-[#5E3542] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Say goodbye to sharp burning pain and bleeding. Expert proctology care with minimally invasive laser techniques and personalized medical management.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Anal%20Fissure%20treatment." target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-[#E75480] hover:bg-[#C2185B] text-white font-bold rounded-xl shadow-md transition-all">
              Book Appointment
            </a>
            <a href="tel:+917058430179" className="px-7 py-3 bg-white border border-[#E75480] text-[#E75480] hover:bg-[#FFF5F8] font-bold rounded-xl transition-all">
              Call Doctor
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
                What is an Anal Fissure?
              </h2>
              <div className="h-1 w-16 bg-[#E75480] rounded-full"></div>
              <p className="text-[#5E3542] text-base leading-relaxed">
                An <strong>anal fissure</strong> is a small tear or crack in the thin, moist tissue that lines the anus. It is one of the most painful anorectal conditions, frequently characterized by intense burning pain during and after bowel movements, accompanied by bright red streaks of blood.
              </p>
              <p className="text-[#5E3542] text-sm leading-relaxed bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                With modern laser technology and sphincter relaxation therapies at <strong>Tamanna Clinic</strong>, fissures can be healed quickly with minimal recurrence and zero surgical trauma.
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#1D4ED8] p-1 shadow-lg bg-white">
                <img 
                  src={fissureDiagram} 
                  alt="Anal Fissure Anatomy Diagram" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold tracking-widest uppercase">Etiology & Triggers</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E] mt-1">
                What causes an anal fissure?
              </h3>
            </div>
            
            <p className="text-[#5E3542] text-base leading-relaxed">
              Anal fissures can be caused by trauma to the anal mucosa as well as elevated sphincter muscle pressure:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Hard or Large Stools</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Passage of dry, large, or hard stool tears the delicate lining.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Repeated Diarrhea</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Frequent liquid stools cause chemical irritation and inflammation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Childbirth & Vaginal Delivery</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Trauma to the perineum and anal canal during labor.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] text-lg font-bold">›</span>
                <div>
                  <h5 className="font-bold text-[#6A1B2E] text-sm">Prolonged Muscular Spasm</h5>
                  <p className="text-xs text-[#7A5861] mt-0.5">Chronic involuntary spasms in the internal anal sphincter.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F9FF] p-5 rounded-2xl border border-[#BAE6FD] text-[#0F2D59] text-sm leading-relaxed space-y-2">
              <h5 className="font-bold text-base text-[#0284C7]">Sphincter Tension & Blood Flow Mechanism:</h5>
              <p>
                The extra tension in the two muscular rings (sphincters) controlling the anus may cause fissures as well. The outer anal sphincter is under your conscious control, but the inner sphincter is not. This muscle is under pressure or tension all the time to keep the anal canal closed.
              </p>
              <p>
                If the pressure increases too much, it can cause spasms and reduce blood flow to the anus, leading to a fissure. This continuous high pressure also starves the tissue of oxygen and prevents the fissure from healing on its own.
              </p>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold tracking-widest uppercase">Clinical Presentation</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E] mt-1">
                What are the Symptoms?
              </h3>
            </div>

            <ul className="space-y-4 text-[#5E3542] text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Sharp Burning Pain:</strong> Severe, cutting or burning pain during bowel movements that can persist from a few minutes to several hours afterwards.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Anal Bleeding:</strong> Normally a small spot of bright red blood on toilet tissue or drops in the toilet bowl. The blood from a fissure is separate from the stool, not mixed with it.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Anal Itching & Irritation:</strong> Persistent pruritus (itching) and skin redness around the peri-anal area.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[#FFF5F8] p-4 rounded-xl border border-[#F4DCE4]">
                <span className="text-[#E75480] font-black text-xl leading-none">›</span>
                <div>
                  <strong className="text-[#6A1B2E]">Sentinel Polyp / Skin Tag:</strong> If the anal fissure is left untreated and becomes chronic, a small skin tag called a "sentinel polyp" forms at the apex of the fissure.
                </div>
              </li>
            </ul>
          </div>

          {/* Treatment Options Section */}
          <div className="bg-white p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-[#E75480] text-xs font-bold tracking-widest uppercase">Expert Medical Solutions</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#6A1B2E] mt-1">
                Treatment for Anal Fissure
              </h3>
            </div>

            <div className="space-y-6 text-[#5E3542] text-sm md:text-base leading-relaxed">
              
              {/* 1. Initial Medical Therapy */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-[#FFF5F8]">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">1.</span> Initial Medical Therapy
                </h4>
                <p>
                  Initially, medical therapy with a special local ointment (such as diltiazem/nitroglycerin to relax the sphincter), stool softeners, fiber supplements, and pain relief is attempted. If the fissure does not heal within 3 months and fibrotic scar tissue forms, advanced intervention is recommended.
                </p>
              </div>

              {/* 2. Laser Fissure Treatment */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">2.</span> Advanced Laser Fissure Treatment
                </h4>
                <p>
                  A modern, painless daycare procedure where laser energy is used to debride the fibrosed fissure bed and relieve the internal sphincter spasm. It enables rapid wound healing without open surgical cuts or incontinence risk.
                </p>
              </div>

              {/* 3. Lateral Internal Sphincterotomy (LIS) */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">3.</span> Lateral Internal Sphincterotomy (LIS)
                </h4>
                <p>
                  The main etiology of chronic anal fissures is internal sphincter spasm. In cases where muscle spasm is the main causative component, a small precision incision on the inner sphincter is performed (LIS), taking utmost care to safeguard continence and restore healthy blood supply.
                </p>
              </div>

              {/* 4. Surgical Fissurectomy & Sentinel Polyp Excision */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                    <span className="text-[#E75480]">4.</span> Surgical Fissurectomy & Sentinel Polyp Excision
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Normally, surgical fissurectomy is performed to clean unhealed edges. Contextual sentinel polyp excision (skin tag removal) is done simultaneously using <strong>Conventional or LASER excision</strong> to remove the irritating chronic skin tag and leave a fresh, healthy edge to heal cleanly.
                  </p>
                </div>
                <div className="md:col-span-5 flex justify-center">
                  <div className="rounded-2xl overflow-hidden border-2 border-[#F4DCE4] shadow-md bg-white p-1 max-w-[280px]">
                    <img 
                      src={fissureSurgeryDiagram} 
                      alt="Fissure and Sentinel Skin Tag Excision Laser Diagram" 
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Botox Injections for Anal Fissures */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">5.</span> Botox Injections for Anal Fissures
                </h4>
                <p>
                  In select cases, Botox injections provide a successful, temporary chemical sphincter relaxation treatment for pain caused by muscular spasms in the anal sphincter, promoting natural fissure closure.
                </p>
              </div>

              {/* 6. Anal Flap Fashioning */}
              <div className="border border-[#F4DCE4] rounded-2xl p-5 bg-white shadow-sm">
                <h4 className="font-extrabold text-[#6A1B2E] text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#E75480]">6.</span> Anal Flap Fashioning
                </h4>
                <p>
                  In more advanced or complex chronic cases, anal advancement flap fashioning is performed to cover the fissure defect with healthy, well-vascularized tissue to ensure permanent healing.
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
              Consult Specialist Doctor
            </h4>
            <div className="space-y-3 text-sm text-[#5E3542]">
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Day Care Laser Surgery</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Same-Day Discharge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">Painless & Rapid Recovery</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#E75480] text-lg font-bold">✔</span>
                <span className="font-semibold">100% Confidential Consultation</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F4DCE4] space-y-3">
              <a 
                href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20book%20an%20appointment%20for%20Anal%20Fissure%20treatment%20at%20Tamanna%20Clinic." 
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

export default Fissure;