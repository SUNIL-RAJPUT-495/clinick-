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
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans selection:bg-[#E75480] selection:text-white">



      {/* SEAMLESS CONTENT FLOW */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-left flex flex-col gap-16">
        
        {/* SECTION 1: CONSTIPATION DEFINITION & OVERVIEW */}
        <div className="space-y-6">
          <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">
            Clinical Definition & Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What is Constipation?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full"></div>
          
          <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed">
            <strong>Constipation</strong> is defined as a condition characterized by infrequent or difficulty in evacuation of stools. Constipation can be accompanied by various symptoms, which include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">•</span> Hard or lumpy stools
            </div>
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">•</span> Straining while passing stools
            </div>
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">•</span> Sensation of anorectal blockage
            </div>
            <div className="flex items-center gap-3 text-base text-[#F3E5EC] font-semibold">
              <span className="text-[#E75480] text-lg font-bold">•</span> Incomplete evacuation & abdominal discomfort
            </div>
          </div>

          <div className="py-4 border-l-4 border-[#E75480] pl-6 text-[#D3B4C0] space-y-2">
            <h4 className="text-white font-extrabold text-lg flex items-center gap-2">
              ⚠️ Why Untreated Constipation is Dangerous
            </h4>
            <p className="text-base leading-relaxed">
              If left untreated, chronic constipation leads to major secondary anorectal complications such as <strong className="text-[#E75480]">Piles/Hemorrhoids</strong>, <strong className="text-[#E75480]">Anal Fissures</strong>, <strong className="text-white">Faecal Impaction</strong>, and <strong className="text-white">Rectal Prolapse</strong>. These cause severe pain, bleeding, infection, and in extreme situations require surgical intervention.
            </p>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 2: REASONS & CAUSES OF CONSTIPATION */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">
              Risk Factors & Causes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              Why Does Constipation Occur?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <p className="text-[#D3B4C0] text-base leading-relaxed">
            The main cause of constipation involves a combination of lifestyle habits, medical conditions, dietary choices, and medication use.
          </p>

          {/* Clean Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
            <div className="space-y-2">
              <img 
                src={constipationCausesCustom} 
                alt="Understanding Constipation & Common Causes Medical Diagram" 
                className="w-full h-auto rounded-3xl shadow-2xl object-cover" 
              />
              <p className="text-xs text-[#D3B4C0] text-center italic">Medical Diagram: Human Colon System & Primary Causes of Constipation</p>
            </div>
            <div className="space-y-2">
              <img 
                src={constipationGutCustom} 
                alt="Intestinal Motility & Colon Transit Relief Diagram" 
                className="w-full h-auto rounded-3xl shadow-2xl object-cover" 
              />
              <p className="text-xs text-[#D3B4C0] text-center italic">Medical Graphic: Physiological Mechanisms & Normal Motility Relief</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">💧</span> Not Drinking Enough Water
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Dehydration causes the colon to absorb fluid from stool, making it dry and hard.</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">🍔</span> Unhealthy Low-Fiber Diet
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Diets heavy in processed foods, cheese, and meats lack essential dietary fiber.</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">🏃</span> Physical Inactivity
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Sedentary routine reduces abdominal muscle tone and slows down bowel peristalsis.</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <span className="text-[#E75480]">🧠</span> Stress & Anxiety
              </h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Disruption in the gut-brain axis impairs natural digestive motility.</p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* SECTION 3: TREATMENT & MANAGEMENT AT TAMANNA CLINIC */}
        <div className="space-y-6">
          <div>
            <span className="text-[#E75480] text-xs font-bold uppercase tracking-widest">
              Medical & Lifestyle Management
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              How Dr. Tamanna Sharma Treats Constipation
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E75480] to-transparent rounded-full mt-3"></div>
          </div>

          <p className="text-[#D3B4C0] text-base leading-relaxed">
            At Tamanna Clinic, we combine individualized gastroenterology diagnostic assessment with personalized medical therapies to resolve chronic constipation permanently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <span className="text-3xl">🥦</span>
              <h4 className="text-white font-extrabold text-lg">Fiber-Rich Nutrition Plan</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Tailored dietary guidance with soluble & insoluble fiber to add bulk and retain stool moisture.</p>
            </div>

            <div className="space-y-2">
              <span className="text-3xl">🥛</span>
              <h4 className="text-white font-extrabold text-lg">Hydration & Fluid Protocol</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Optimal fluid intake strategies ensuring stool remains soft and easy to evacuate painless.</p>
            </div>

            <div className="space-y-2">
              <span className="text-3xl">💊</span>
              <h4 className="text-white font-extrabold text-lg">Safe Prokinetic Medication</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Non-habit-forming osmotic laxatives, stool softeners, and bowel motility regulation under supervision.</p>
            </div>

            <div className="space-y-2">
              <span className="text-3xl">🛡️</span>
              <h4 className="text-white font-extrabold text-lg">Anorectal Complication Guard</h4>
              <p className="text-sm text-[#D3B4C0] leading-relaxed">Preventative care protecting anal sphincters from tears, fissure development, and hemorrhoid swelling.</p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#E75480]/30 to-transparent"></div>

        {/* FAQs */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-white">Constipation Treatment FAQs</h3>
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
          Relieve Constipation & Protect Anorectal Health
        </h2>
        <p className="text-[#D3B4C0] text-base max-w-xl mx-auto mb-8">
          Schedule your medical evaluation with Dr. Tamanna Sharma today.
        </p>
        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20want%20to%20consult%20for%20Constipation%20Treatment." target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-2xl shadow-xl transition-all hover:scale-105 text-decoration-none">
          Book Appointment Now
        </a>
      </section>

    </div>
  );
};

export default Constipation;
