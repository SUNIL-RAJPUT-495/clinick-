import { Link } from "react-router-dom";
import femaleDoctor from "../assets/female-doctor-premium.png";
import pilesInfoGraphic from "../assets/piles-info-graphic.webp";

function Homepage() {
    return (
        <div className="bg-[#FFF5F8] min-h-screen font-sans">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#ffe2eb] via-[#FFF5F8] to-white py-16 md:py-24 border-b border-[#F4DCE4]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                        {/* Left Column (Content) */}
                    <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start gap-6 z-10">
                        <span className="inline-block text-[#E75480] text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full w-fit">
                            WE ONLY GIVE
                        </span>
                        
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#6A1B2E] leading-tight">
                            Advanced Laser Treatment for <br/>
                            <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#C2185B] bg-clip-text text-transparent">Piles, Fissure & Fistula</span>
                        </h1>
                        
                        <p className="text-[#7A5861] text-lg md:text-xl font-semibold tracking-wide border-l-0 lg:border-l-4 border-[#E75480] pl-0 lg:pl-4">
                            Safe • Painless • Minimally Invasive • Fast Recovery
                        </p>
                        
                        <p className="text-[#5E3542] text-base md:text-lg leading-relaxed max-w-2xl">
                            At Tamanna Clinic & Laser Piles Centre, we provide advanced laser treatment for anorectal diseases using modern technology and expert medical care. Our goal is to help you recover faster with minimal pain and maximum comfort.
                        </p>
                        
                        {/* 2x2 Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 w-full text-left">
                            <div className="flex items-center gap-3 text-[#5E3542] font-semibold bg-white/60 p-3 rounded-lg border border-[#F4DCE4]/50 shadow-sm">
                                <span className="text-[#E75480] text-lg">✔</span>
                                <span>Same-Day Discharge</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#5E3542] font-semibold bg-white/60 p-3 rounded-lg border border-[#F4DCE4]/50 shadow-sm">
                                <span className="text-[#E75480] text-lg">✔</span>
                                <span>Experienced Specialists</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#5E3542] font-semibold bg-white/60 p-3 rounded-lg border border-[#F4DCE4]/50 shadow-sm">
                                <span className="text-[#E75480] text-lg">✔</span>
                                <span>Advanced Laser Technology</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#5E3542] font-semibold bg-white/60 p-3 rounded-lg border border-[#F4DCE4]/50 shadow-sm">
                                <span className="text-[#E75480] text-lg">✔</span>
                                <span>Personalized Treatment Plans</span>
                            </div>
                        </div>
                        
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start w-full">
                            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tamanna%20Clinic%20%26%20Laser%20Piles%20Centre." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold rounded-xl shadow-lg shadow-[#E75480]/20 hover:shadow-xl hover:shadow-[#E75480]/30 transform hover:-translate-y-0.5 transition-all duration-200 text-center text-base md:text-lg text-decoration-none">
                                Book an Appointment
                            </a>
                            <a href="tel:+917058430179" className="px-8 py-4 bg-white border-2 border-[#E75480] text-[#E75480] hover:bg-[#FFF5F8] font-extrabold rounded-xl transform hover:-translate-y-0.5 transition-all duration-200 text-center text-base md:text-lg">
                                Call Now
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Column (Image Card) */}
                    <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
                        {/* Decorative Background Elements */}
                        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#E75480] rounded-full filter blur-[80px] opacity-20 -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#E75480]/10 to-transparent rounded-3xl -z-10 rotate-3 scale-105"></div>
                        
                        {/* Professional Photo Frame */}
                        <div className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-tr from-[#ffe2eb] to-white group">
                            <img 
                                src={femaleDoctor} 
                                alt="Specialist Doctor Dr. Tamanna Sharma" 
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
                            />
                            {/* Overlay tag */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F4DCE4]/50 shadow-lg text-left">
                                <h4 className="text-[#6A1B2E] font-bold text-lg leading-none mb-1">Dr. Tamanna Sharma</h4>
                                <p className="text-[#E75480] text-sm font-semibold">Founder & Lead Laser Specialist</p>
                            </div>
                        </div>
                    </div>                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-20 bg-white border-b border-[#F4DCE4]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Text */}
                    <div className="lg:col-span-7 text-left flex flex-col gap-6">
                        <span className="inline-block text-[#E75480] text-xs md:text-sm font-bold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full w-fit leading-normal max-w-full text-center">
                            Compassionate Care. Advanced Technology. Trusted Healing.
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#6A1B2E] leading-tight">
                            About Tamanna Clinic & <br className="hidden md:inline"/> Laser Piles Centre
                        </h2>
                        
                        <div className="h-1 w-20 bg-[#E75480] rounded-full"></div>
                        
                        <p className="text-[#5E3542] text-lg leading-relaxed font-medium">
                            <strong>Tamanna Clinic & Laser Piles Centre</strong> was founded by <strong>Dr. Tamanna Sharma</strong> with a vision to provide advanced, ethical, and patient-focused care for individuals suffering from anorectal and colorectal disorders.
                        </p>
                        
                        <p className="text-[#5E3542] text-base md:text-lg leading-relaxed">
                            Understanding that conditions such as piles (hemorrhoids), fissures, fistulas, pilonidal sinus, and other proctology concerns can significantly affect a person's quality of life, Dr. Tamanna Sharma established the clinic to offer modern, minimally invasive laser treatments that prioritize patient comfort, safety, and faster recovery. Every patient is treated with empathy, respect, and complete confidentiality, ensuring a stress-free healthcare experience.
                        </p>
                        
                        <div className="mt-4">
                            <Link to="/about" className="inline-block px-8 py-3.5 bg-[#E75480] hover:bg-[#C2185B] text-white font-extrabold rounded-xl shadow-md transition-all duration-200">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Infographic Image */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="relative rounded-3xl overflow-hidden border border-[#F4DCE4] shadow-lg bg-white p-4 max-w-[360px]">
                            <img 
                                src={pilesInfoGraphic} 
                                alt="Piles Causes, Symptoms & Treatment Options" 
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                            <p className="text-xs text-[#7A5861] font-semibold text-center mt-3">
                                Piles and Your Health: Causes, Symptoms & Treatment Options
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* OUR SPECIALITIES */}
            <section className="py-20 bg-[#FFF5F8] border-b border-[#F4DCE4]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase">
                        Specialized Treatments Under One Roof
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#6A1B2E] mt-2 mb-12">
                        Our Specialities
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Piles */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left group">
                            <span className="text-4xl mb-4 bg-[#FFF5F8] w-14 h-14 rounded-full flex items-center justify-center text-[#E75480] border border-[#F4DCE4]/50">🩺</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">1. Laser Piles Treatment</h3>
                            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed flex-grow">
                                Advanced laser surgery for internal and external hemorrhoids with minimal pain and quicker healing.
                            </p>
                            <Link to="/piles" className="text-[#E75480] font-bold text-sm mt-6 flex items-center gap-1 group-hover:text-[#C2185B]">
                                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        {/* Fissure */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left group">
                            <span className="text-4xl mb-4 bg-[#FFF5F8] w-14 h-14 rounded-full flex items-center justify-center text-[#E75480] border border-[#F4DCE4]/50">⚡</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">2. Laser Fissure Treatment</h3>
                            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed flex-grow">
                                Effective treatment for chronic and acute anal fissures with faster recovery.
                            </p>
                            <Link to="/fissure" className="text-[#E75480] font-bold text-sm mt-6 flex items-center gap-1 group-hover:text-[#C2185B]">
                                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        {/* Fistula */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left group">
                            <span className="text-4xl mb-4 bg-[#FFF5F8] w-14 h-14 rounded-full flex items-center justify-center text-[#E75480] border border-[#F4DCE4]/50">🩹</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">3. Laser Fistula Treatment</h3>
                            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed flex-grow">
                                Minimally invasive laser treatment designed to reduce recurrence and promote quicker healing.
                            </p>
                            <Link to="/fistula" className="text-[#E75480] font-bold text-sm mt-6 flex items-center gap-1 group-hover:text-[#C2185B]">
                                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        {/* Sinus */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left group">
                            <span className="text-4xl mb-4 bg-[#FFF5F8] w-14 h-14 rounded-full flex items-center justify-center text-[#E75480] border border-[#F4DCE4]/50">🩸</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">4. Pilonidal Sinus Treatment</h3>
                            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed flex-grow">
                                Safe and advanced laser surgery for long-term relief with minimal downtime.
                            </p>
                            <Link to="/laserTreatment" className="text-[#E75480] font-bold text-sm mt-6 flex items-center gap-1 group-hover:text-[#C2185B]">
                                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        {/* Constipation */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left group">
                            <span className="text-4xl mb-4 bg-[#FFF5F8] w-14 h-14 rounded-full flex items-center justify-center text-[#E75480] border border-[#F4DCE4]/50">🍏</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">5. Constipation Management</h3>
                            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed flex-grow">
                                Expert consultation and treatment for chronic constipation and digestive issues.
                            </p>
                            <Link to="/faq" className="text-[#E75480] font-bold text-sm mt-6 flex items-center gap-1 group-hover:text-[#C2185B]">
                                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        {/* Consultation */}
                        <div className="bg-white p-8 rounded-2xl border border-[#F4DCE4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left group">
                            <span className="text-4xl mb-4 bg-[#FFF5F8] w-14 h-14 rounded-full flex items-center justify-center text-[#E75480] border border-[#F4DCE4]/50">🏥</span>
                            <h3 className="text-xl font-bold text-[#6A1B2E] mb-3">6. General Proctology Consultation</h3>
                            <p className="text-[#7A5861] text-sm md:text-base leading-relaxed flex-grow">
                                Comprehensive diagnosis and treatment for anorectal disorders.
                            </p>
                            <Link to="/helpdesk" className="text-[#E75480] font-bold text-sm mt-6 flex items-center gap-1 group-hover:text-[#C2185B]">
                                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase">
                        Your Health Deserves the Best Care
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#6A1B2E] mt-2 mb-12">
                        Why Choose Tamanna Clinic?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* 1 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">1</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Advanced Laser Tech</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Modern procedures with better precision and faster healing.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">2</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Experienced Doctors</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Skilled specialists providing accurate diagnosis and personalized treatment.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">3</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Minimal Pain</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Laser procedures reduce discomfort and post-operative pain.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">4</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Same-Day Discharge</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Most patients return home within a few hours after treatment.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">5</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Affordable Treatment</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Quality healthcare at reasonable and transparent pricing.
                            </p>
                        </div>

                        {/* 6 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">6</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Complete Privacy</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Confidential consultations in a comfortable environment.
                            </p>
                        </div>

                        {/* 7 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">7</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Personalized Care</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Treatment plans tailored to every patient's condition.
                            </p>
                        </div>

                        {/* 8 */}
                        <div className="bg-[#FFF5F8] p-6 rounded-xl border border-[#F4DCE4] text-left relative overflow-hidden flex flex-col gap-2">
                            <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/10 select-none">8</span>
                            <h3 className="text-lg font-bold text-[#6A1B2E]">Modern Infrastructure</h3>
                            <p className="text-[#5E3542] text-sm leading-relaxed">
                                Clean, hygienic, and fully equipped medical facilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Homepage;