import { Link } from "react-router-dom";

function Aboutus() {
    return (
        <div className="bg-[#FFF5F8] min-h-screen font-sans">
            
            {/* ABOUT HEADER / INTRO */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#ffe2eb] via-[#FFF5F8] to-white border-b border-[#F4DCE4]">
                <div className="max-w-5xl mx-auto px-6 text-center flex flex-col gap-6">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full w-max mx-auto">
                        Trusted Care for Better Healing
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-[#6A1B2E]">
                        About Us
                    </h1>
                    <div className="h-1 w-20 bg-[#E75480] rounded-full mx-auto mb-6"></div>
                    
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#F4DCE4] shadow-xl shadow-[#6A1B2E]/5 text-left">
                        <p className="text-[#5E3542] text-lg md:text-xl leading-relaxed font-semibold">
                            <strong>Tamanna Clinic & Laser Piles Centre</strong> was founded by <strong>Dr. Tamanna Sharma</strong> with a commitment to provide advanced, compassionate, and patient-centered care for anorectal disorders. Our clinic combines modern laser technology with expert medical care to ensure safe treatment, faster recovery, and long-lasting relief for every patient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
                        {/* Vision */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-md hover:shadow-lg transition-shadow">
                            <span className="text-4xl mb-4 inline-block">👁️</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">Our Vision</h3>
                            <p className="text-[#7A5861] text-base leading-relaxed">
                                To become a trusted center of excellence for laser proctology by providing advanced, ethical, and compassionate healthcare that helps patients recover comfortably and regain a better quality of life.
                            </p>
                        </div>
                        
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-md hover:shadow-lg transition-shadow">
                            <span className="text-4xl mb-4 inline-block">🎯</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">Our Mission</h3>
                            <p className="text-[#7A5861] text-base leading-relaxed">
                                To deliver accurate diagnosis, personalized treatment, and minimally invasive laser procedures for conditions such as piles, fissures, fistulas, pilonidal sinus, and other anorectal disorders. We strive to provide every patient with confidential care, medical excellence, and continuous support throughout their healing journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS OF LASER TREATMENT */}
            <section className="py-20 bg-white border-b border-[#F4DCE4]">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase">
                        Why Laser Surgery is Preferred
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#6A1B2E] mt-2 mb-12">
                        Benefits of Laser Treatment
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
                        {[
                            "No major cuts or stitches",
                            "Less bleeding during surgery",
                            "Minimal post-operative pain",
                            "Faster healing",
                            "Lower infection risk",
                            "Short hospital stay",
                            "Quick return to work",
                            "High success rate",
                            "Better cosmetic outcome",
                            "Reduced chances of recurrence"
                        ].map((benefit, index) => (
                            <div key={index} className="bg-[#FFF5F8] p-4 px-6 rounded-xl border border-[#F4DCE4] flex items-center gap-4 hover:translate-x-1.5 transition-transform duration-200">
                                <span className="text-[#E75480] font-black text-lg">✔</span>
                                <span className="text-[#5E3542] font-semibold text-base">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TREATMENT PROCESS */}
            <section className="py-20 bg-[#FFF5F8] border-b border-[#F4DCE4]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase">
                        Simple, Safe & Hassle-Free
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#6A1B2E] mt-2 mb-16">
                        Our Treatment Process
                    </h2>
                    
                    {/* Stepper Vertical Timeline */}
                    <div className="relative flex flex-col gap-12 text-left max-w-2xl mx-auto">
                        {/* Timeline Bar */}
                        <div className="absolute left-6 top-4 bottom-4 w-1 bg-[#F4DCE4] rounded-full"></div>
                        
                        {/* Step 1 */}
                        <div className="flex gap-6 relative z-10">
                            <div className="w-12 h-12 bg-[#E75480] text-white text-lg font-bold flex items-center justify-center rounded-full shadow-lg shadow-[#E75480]/20 flex-shrink-0">
                                1
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex-grow">
                                <h3 className="text-lg font-bold text-[#6A1B2E] mb-2">Book Your Consultation</h3>
                                <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">Schedule your appointment online or by phone.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6 relative z-10">
                            <div className="w-12 h-12 bg-[#E75480] text-white text-lg font-bold flex items-center justify-center rounded-full shadow-lg shadow-[#E75480]/20 flex-shrink-0">
                                2
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex-grow">
                                <h3 className="text-lg font-bold text-[#6A1B2E] mb-2">Medical Evaluation</h3>
                                <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">Our specialists perform a detailed examination and diagnosis.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6 relative z-10">
                            <div className="w-12 h-12 bg-[#E75480] text-white text-lg font-bold flex items-center justify-center rounded-full shadow-lg shadow-[#E75480]/20 flex-shrink-0">
                                3
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex-grow">
                                <h3 className="text-lg font-bold text-[#6A1B2E] mb-2">Personalized Treatment Plan</h3>
                                <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">Receive a treatment plan based on your medical condition.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-6 relative z-10">
                            <div className="w-12 h-12 bg-[#E75480] text-white text-lg font-bold flex items-center justify-center rounded-full shadow-lg shadow-[#E75480]/20 flex-shrink-0">
                                4
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex-grow">
                                <h3 className="text-lg font-bold text-[#6A1B2E] mb-2">Advanced Laser Procedure</h3>
                                <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">Safe, minimally invasive surgery performed using modern laser technology.</p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex gap-6 relative z-10">
                            <div className="w-12 h-12 bg-[#E75480] text-white text-lg font-bold flex items-center justify-center rounded-full shadow-lg shadow-[#E75480]/20 flex-shrink-0">
                                5
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm flex-grow">
                                <h3 className="text-lg font-bold text-[#6A1B2E] mb-2">Recovery & Follow-Up</h3>
                                <p className="text-[#7A5861] text-sm md:text-base leading-relaxed">Post-treatment guidance and regular follow-up for complete recovery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PATIENT TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase">
                        What Our Patients Say
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#6A1B2E] mt-2 mb-12">
                        Patient Testimonials
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                        {/* Quote 1 */}
                        <div className="bg-[#FFF5F8] p-8 rounded-2xl border border-[#F4DCE4] shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-amber-400 text-xl tracking-wider mb-4">★★★★★</div>
                                <p className="text-[#5E3542] italic text-base leading-relaxed">
                                    "I was suffering from piles for years. The laser treatment was quick, painless, and I recovered within a few days. Highly recommended."
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border-t border-[#F4DCE4] pt-4 mt-6">
                                <span className="text-2xl bg-white w-10 h-10 rounded-full flex items-center justify-center border border-[#F4DCE4]">👨🏽‍⚕️</span>
                                <span className="font-bold text-[#6A1B2E] text-sm">Satisfied Patient</span>
                            </div>
                        </div>

                        {/* Quote 2 */}
                        <div className="bg-[#FFF5F8] p-8 rounded-2xl border border-[#F4DCE4] shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-amber-400 text-xl tracking-wider mb-4">★★★★★</div>
                                <p className="text-[#5E3542] italic text-base leading-relaxed">
                                    "The doctors explained every step clearly and made me feel comfortable throughout the treatment."
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border-t border-[#F4DCE4] pt-4 mt-6">
                                <span className="text-2xl bg-white w-10 h-10 rounded-full flex items-center justify-center border border-[#F4DCE4]">👩🏽‍⚕️</span>
                                <span className="font-bold text-[#6A1B2E] text-sm">Patient Review</span>
                            </div>
                        </div>

                        {/* Quote 3 */}
                        <div className="bg-[#FFF5F8] p-8 rounded-2xl border border-[#F4DCE4] shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-amber-400 text-xl tracking-wider mb-4">★★★★★</div>
                                <p className="text-[#5E3542] italic text-base leading-relaxed">
                                    "Excellent clinic with professional staff and modern facilities. My recovery was much faster than expected."
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border-t border-[#F4DCE4] pt-4 mt-6">
                                <span className="text-2xl bg-white w-10 h-10 rounded-full flex items-center justify-center border border-[#F4DCE4]">🧑🏽‍⚕️</span>
                                <span className="font-bold text-[#6A1B2E] text-sm">Verified Patient</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block px-8 py-4 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold text-lg rounded-xl shadow-lg shadow-[#E75480]/20 hover:shadow-xl hover:shadow-[#E75480]/30 transition-all duration-200">
                            Book Your Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Aboutus;