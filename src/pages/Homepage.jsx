import { Link } from "react-router-dom";
import siteLogo from "../assets/tam-clinic.jpeg";
import femaleDoctor from "../assets/female-doctor-premium.png";
import pilesInfoGraphic from "../assets/piles-info-graphic.webp";
import pilesDiagram from "../assets/piles-diagram.png";
import fissureDiagram from "../assets/fissure-diagram.png";
import fistulaDiagram from "../assets/fistula-diagram.png";
import fasterRecoveryImg from "../assets/faster-recovery.png";
import laserTreatmentDiagram from "../assets/laser-treatment-diagram.png";
import sclerotherapyDiagram from "../assets/sclerotherapy-diagram.png";
import coagulationDiagram from "../assets/coagulation-diagram.png";
import clinicPhoto1 from "../assets/clinic-photo-1.jpg";
import clinicPhoto2 from "../assets/clinic-photo-2.jpg";
import clinicPhoto3 from "../assets/clinic-photo-3.jpg";
import constipationDiagram from "../assets/constipation-diagram.jpg";

function Homepage() {

    return (
        <div className="bg-[#120609] text-[#F3E5EC] min-h-screen font-sans selection:bg-[#E75480] selection:text-white">

            {/* SECTION 1: TOP HERO - LOGO & DOCTOR IMAGE CARD */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#1D0910] via-[#15070B] to-[#120609] pt-10 pb-6 border-b border-[#33151D]">
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E75480]/15 rounded-full filter blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">

                    {/* ENLARGED MOBILE & DESKTOP LOGO & CLINIC NAME */}
                    <div className="flex flex-col items-center gap-4 mb-8 w-full">
                        <div className="p-3 sm:p-5 bg-[#230C13] border-2 border-[#E75480]/50 rounded-3xl shadow-[0_0_40px_rgba(231,84,128,0.25)] flex items-center justify-center backdrop-blur-md hover:scale-105 transition-transform duration-300">
                            <img
                                src={siteLogo}
                                alt="Tamanna Clinic Logo"
                                className="h-36 sm:h-48 md:h-56 w-auto max-w-[85vw] object-contain rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col items-center text-center px-2">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight m-0 leading-tight">
                                Tamanna Clinic
                            </h1>
                            <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#E75480] uppercase tracking-widest mt-1.5">
                                & Laser Piles Centre
                            </span>
                        </div>
                    </div>

                    {/* DOCTOR IMAGE & DEGREE CARD */}
                    <div className="w-full flex justify-center mb-6">
                        <div className="w-full max-w-[320px] sm:max-w-[360px] bg-[#1F0A11] rounded-3xl p-4 border border-[#3A1723] shadow-2xl text-center group">
                            <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#2A0E18] to-[#17080D] mb-4">
                                <img
                                    src={femaleDoctor}
                                    alt="Specialist Doctor Dr. Tamanna Sharma"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                            </div>
                            <h3 className="text-2xl font-black text-white leading-tight m-0">Dr. Tamanna Sharma</h3>
                            <p className="text-[#E75480] text-base font-bold mt-1.5 uppercase tracking-wide">
                                MS Shalya Pune - 99170-A
                            </p>
                            <p className="text-[#D3B4C0] text-xs font-extrabold mt-1 uppercase tracking-wider">
                                Consultant Proctologist & Laser Specialist
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 2: OUR EXPERTISE SECTION - DIRECTLY BELOW DOCTOR CARD */}
            <section className="py-12 sm:py-16 bg-[#17080D] border-b border-[#33151D]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    {/* Main Expertise Card Container */}
                    <div className="bg-[#1F0A11] rounded-3xl border border-[#3A1723] shadow-2xl p-4 sm:p-8 md:p-12 text-left">

                        {/* Header matching Infographic */}
                        <div className="mb-8 pb-4 border-b border-[#3A1723]">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                                OUR EXPERTISE
                            </h2>
                            <p className="text-[#E75480] text-sm sm:text-lg font-bold flex items-center gap-2">
                                <span className="text-[#E75480]">✦</span>
                                <span>Specialized Care for Anorectal Conditions</span>
                            </p>
                        </div>

                        {/* Condition List (Side-by-Side Flex Layout) */}
                        <div className="space-y-8 sm:space-y-10">

                            {/* 1. PILES / HEMORRHOIDS */}
                            <div className="flex flex-row items-start gap-3 sm:gap-6">
                                <div className="w-20 h-20 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#E75480] p-1 bg-[#17080D] shadow-lg flex-shrink-0">
                                    <img
                                        src={pilesDiagram}
                                        alt="Piles / Hemorrhoids Illustration"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-base sm:text-2xl md:text-3xl font-black text-[#E75480] tracking-wide uppercase mb-2">
                                        PILES / HEMORRHOIDS
                                    </h3>
                                    <ul className="space-y-1 sm:space-y-2 text-[#D3B4C0] text-xs sm:text-base font-medium">
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Laser Piles Treatment (Minimally Invasive)</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Injection Sclerotherapy</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Rubber Band Ligation</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Advanced Kshar Sutra Therapy</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Painless, Daycare Procedures</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Quick Recovery & Minimal Recurrence</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="border-b border-dashed border-[#3A1723] my-4 sm:my-6"></div>

                            {/* 2. FISSURE */}
                            <div className="flex flex-row items-start gap-3 sm:gap-6">
                                <div className="w-20 h-20 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#E75480] p-1 bg-[#17080D] shadow-lg flex-shrink-0">
                                    <img
                                        src={fissureDiagram}
                                        alt="Fissure Illustration"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-base sm:text-2xl md:text-3xl font-black text-[#E75480] tracking-wide uppercase mb-2">
                                        FISSURE
                                    </h3>
                                    <ul className="space-y-1 sm:space-y-2 text-[#D3B4C0] text-xs sm:text-base font-medium">
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Laser Fissure Treatment</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Lateral Internal Sphincterotomy (LIS)</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Medical Management & Pain Relief</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Diet & Lifestyle Guidance</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Fast Healing & Long-term Relief</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="border-b border-dashed border-[#3A1723] my-4 sm:my-6"></div>

                            {/* 3. FISTULA-IN-ANO */}
                            <div className="flex flex-row items-start gap-3 sm:gap-6">
                                <div className="w-20 h-20 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#E75480] p-1 bg-[#17080D] shadow-lg flex-shrink-0">
                                    <img
                                        src={fistulaDiagram}
                                        alt="Fistula-In-Ano Illustration"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-base sm:text-2xl md:text-3xl font-black text-[#E75480] tracking-wide uppercase mb-2">
                                        FISTULA-IN-ANO
                                    </h3>
                                    <ul className="space-y-1 sm:space-y-2 text-[#D3B4C0] text-xs sm:text-base font-medium">
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Laser Fistula Treatment (FiLaC / SiLaC)</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Kshar Sutra Therapy</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Fistulectomy / Seton Placement</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Abscess Drainage</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Preservation of Sphincter Function</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Lower Recurrence Rate</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* 3. FISTULA TREATMENT */}

                            {/* Divider Line */}
                            <div className="border-b border-dashed border-[#3A1723] my-4 sm:my-6"></div>

                            {/* 5. CONSTIPATION */}
                            <div className="flex flex-row items-start gap-3 sm:gap-6">
                                <div className="w-20 h-20 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#E75480] p-1 bg-[#17080D] shadow-lg flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={constipationDiagram}
                                        alt="Constipation Management Illustration"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-base sm:text-2xl md:text-3xl font-black text-[#E75480] tracking-wide uppercase mb-2">
                                        CONSTIPATION
                                    </h3>
                                    <ul className="space-y-1 sm:space-y-2 text-[#D3B4C0] text-xs sm:text-base font-medium">
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Ayurvedic & Medical Management</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Diet, Fiber & Hydration Guidance</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Lifestyle Modification</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 sm:gap-2.5">
                                            <span className="text-[#E75480] font-black text-sm sm:text-lg leading-none mt-0.5">•</span>
                                            <span>Bowel Regulation & Long-term Relief</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FASTER RECOVERY SECTION - DIRECTLY BELOW OUR EXPERTISE */}
            <section className="py-20 bg-[#120609] border-b border-[#33151D]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-[#1F0A11] rounded-3xl border border-[#3A1723] shadow-2xl p-8 sm:p-12 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                        {/* Image Left Column */}
                        <div className="lg:col-span-5 flex justify-center items-center">
                            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2A0E18] to-[#17080D] p-2 flex items-center justify-center border-4 border-[#3A1723]">
                                <img
                                    src={fasterRecoveryImg}
                                    alt="Faster Recovery and Reduced Hospital Stay"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Content Right Column */}
                        <div className="lg:col-span-7 text-left flex flex-col gap-6">
                            <div>
                                <span className="inline-block text-[#E75480] text-xs sm:text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-4 py-1.5 rounded-full mb-3 border border-[#E75480]/30">
                                    Patient-Centric Healthcare
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                                    Faster Recovery and Reduced Hospital Stay
                                </h2>
                            </div>

                            <ul className="space-y-4 text-[#D3B4C0] text-base sm:text-lg font-medium">
                                <li className="flex items-start gap-3.5">
                                    <span className="text-[#E75480] font-black text-2xl leading-none mt-0.5">•</span>
                                    <span className="leading-relaxed">
                                        Minimally invasive procedures translate into quicker healing times, allowing patients to return to their daily routines sooner.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3.5">
                                    <span className="text-[#E75480] font-black text-2xl leading-none mt-0.5">•</span>
                                    <span className="leading-relaxed">
                                        Shorter hospital stays mean reduced healthcare costs and less disruption to personal and professional life.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3.5">
                                    <span className="text-[#E75480] font-black text-2xl leading-none mt-0.5">•</span>
                                    <span className="leading-relaxed">
                                        Our patient-centered approach emphasizes comfort, safety, and efficiency, ensuring recovery is smooth and stress-free.
                                    </span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-4 mt-2 pt-2">
                                <a
                                    href="https://wa.me/917058430179?text=Hello%2C%20I%20would%20like%20to%20consult%20about%20laser%20treatment%20and%20recovery%20at%20Tamanna%20Clinic."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-7 py-3.5 bg-[#E75480] hover:bg-[#F06292] text-white font-bold rounded-xl shadow-lg shadow-[#E75480]/20 transition-all duration-200 text-base text-decoration-none"
                                >
                                    Book Quick Recovery Consultation
                                </a>
                                <Link
                                    to="/laserTreatment"
                                    className="px-7 py-3.5 bg-[#17080D] border border-[#E75480] text-[#E75480] hover:bg-[#2A0E18] font-bold rounded-xl transition-all duration-200 text-base text-decoration-none"
                                >
                                    Explore Laser Treatments
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIALITIES / OUR SERVICES GRID */}
            <section className="py-16 sm:py-20 bg-[#17080D] border-b border-[#33151D] relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E75480]/10 rounded-full filter blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <span className="inline-block text-[#E75480] text-xs sm:text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/15 px-4 py-1.5 rounded-full mb-3 border border-[#E75480]/30">
                            Comprehensive Care
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                            Our <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] to-[#FF8DAF] bg-clip-text text-transparent">Specialities</span>
                        </h2>
                        <div className="h-1 w-20 bg-[#E75480] rounded-full mx-auto mt-4"></div>
                        <p className="text-[#D3B4C0] text-base sm:text-lg font-medium mt-4">
                            Expert proctology care and advanced laser procedures customized for your health & comfort.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        
                        {/* Card 1: Laser Piles Treatment */}
                        <Link to="/piles" className="group bg-[#1F0A11] p-6 sm:p-8 rounded-3xl border border-[#3A1723] hover:border-[#E75480]/60 shadow-xl hover:shadow-[0_10px_30px_rgba(231,84,128,0.2)] transform hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between text-decoration-none">
                            <div>
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#E75480] p-1 bg-[#17080D] shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <img 
                                        src={pilesDiagram} 
                                        alt="Laser Piles Treatment" 
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#E75480] transition-colors mb-3">
                                    Laser Piles Treatment
                                </h3>
                                <p className="text-[#D3B4C0] text-sm sm:text-base leading-relaxed">
                                    Advanced LHP treatment with minimal pain, zero stitches, and quick healing for long-term relief.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#33151D] flex items-center justify-between text-[#E75480] text-sm font-bold">
                                <span>Learn More</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>

                        {/* Card 2: Laser Fistula Treatment */}
                        <Link to="/fistula" className="group bg-[#1F0A11] p-6 sm:p-8 rounded-3xl border border-[#3A1723] hover:border-[#E75480]/60 shadow-xl hover:shadow-[0_10px_30px_rgba(231,84,128,0.2)] transform hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between text-decoration-none">
                            <div>
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#E75480] p-1 bg-[#17080D] shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <img 
                                        src={fistulaDiagram} 
                                        alt="Laser Fistula Treatment" 
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#E75480] transition-colors mb-3">
                                    Laser Fistula Treatment
                                </h3>
                                <p className="text-[#D3B4C0] text-sm sm:text-base leading-relaxed">
                                    Minimally invasive FiLaC laser procedure sealing fistula tracks safely while protecting sphincter control.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#33151D] flex items-center justify-between text-[#E75480] text-sm font-bold">
                                <span>Learn More</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>

                        {/* Card 3: Laser Fissure Treatment */}
                        <Link to="/fissure" className="group bg-[#1F0A11] p-6 sm:p-8 rounded-3xl border border-[#3A1723] hover:border-[#E75480]/60 shadow-xl hover:shadow-[0_10px_30px_rgba(231,84,128,0.2)] transform hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between text-decoration-none">
                            <div>
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#E75480] p-1 bg-[#17080D] shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <img 
                                        src={fissureDiagram} 
                                        alt="Laser Fissure Treatment" 
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#E75480] transition-colors mb-3">
                                    Laser Fissure Treatment
                                </h3>
                                <p className="text-[#D3B4C0] text-sm sm:text-base leading-relaxed">
                                    Fast recovery for chronic and acute anal fissures with specialized sphincter-preserving techniques.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#33151D] flex items-center justify-between text-[#E75480] text-sm font-bold">
                                <span>Learn More</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>

                        {/* Card 4: Constipation Treatment */}
                        <Link to="/constipation" className="group bg-[#1F0A11] p-6 sm:p-8 rounded-3xl border border-[#3A1723] hover:border-[#E75480]/60 shadow-xl hover:shadow-[0_10px_30px_rgba(231,84,128,0.2)] transform hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between text-decoration-none">
                            <div>
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#E75480] p-1 bg-[#17080D] shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <img 
                                        src={constipationDiagram} 
                                        alt="Constipation Treatment" 
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#E75480] transition-colors mb-3">
                                    Constipation Treatment
                                </h3>
                                <p className="text-[#D3B4C0] text-sm sm:text-base leading-relaxed">
                                    Expert medical guidance, dietary plans, and therapeutic management for chronic constipation & digestion.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#33151D] flex items-center justify-between text-[#E75480] text-sm font-bold">
                                <span>Learn More</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>


            {/* SECTION 5: ADVANCED TREATMENT HEADLINE & ACTION BUTTONS */}
            <section className="py-16 bg-[#120609] border-b border-[#33151D]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                        Advanced Laser Treatment for <br />
                        <span className="text-[#E75480] bg-gradient-to-r from-[#E75480] via-[#FF8DAF] to-[#E75480] bg-clip-text text-transparent">
                            Piles, Fissure & Fistula
                        </span>
                    </h2>

                    <p className="text-[#E2C4CE] text-base sm:text-lg md:text-xl font-semibold tracking-wide mt-4">
                        Safe • Painless • Minimally Invasive • Fast Recovery
                    </p>

                    <p className="text-[#D3B4C0] text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        At Tamanna Clinic & Laser Piles Centre, we provide advanced laser treatment for anorectal diseases using modern technology and expert medical care. Our goal is to help you recover faster with minimal pain and maximum comfort.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8 justify-center w-full">
                        <a href="https://wa.me/917058430179?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tamanna%20Clinic%20%26%20Laser%20Piles%20Centre." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl shadow-lg shadow-[#E75480]/25 hover:shadow-xl hover:shadow-[#E75480]/40 transform hover:-translate-y-0.5 transition-all duration-200 text-center text-base md:text-lg text-decoration-none">
                            Book an Appointment
                        </a>
                        <a href="tel:+917058430179" className="px-8 py-4 bg-[#230C13] border-2 border-[#E75480] text-white hover:bg-[#2F111B] font-extrabold rounded-xl transform hover:-translate-y-0.5 transition-all duration-200 text-center text-base md:text-lg text-decoration-none">
                            Call Now: +91 7058430179
                        </a>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-20 bg-[#17080D] border-b border-[#33151D]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text */}
                    <div className="lg:col-span-7 text-left flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            About Tamanna Clinic & <br className="hidden md:inline" /> Laser Piles Centre
                        </h2>

                        <div className="h-1 w-20 bg-[#E75480] rounded-full"></div>

                        <p className="text-[#E2C4CE] text-lg leading-relaxed font-medium">
                            <strong>Tamanna Clinic & Laser Piles Centre</strong> was founded by <strong>Dr. Tamanna Sharma</strong> with a vision to provide advanced, ethical, and patient-focused care for individuals suffering from anorectal and colorectal disorders.
                        </p>

                        <p className="text-[#D3B4C0] text-base md:text-lg leading-relaxed">
                            Understanding that conditions such as piles (hemorrhoids), fissures, fistulas, pilonidal sinus, and other proctology concerns can significantly affect a person's quality of life, Dr. Tamanna Sharma established the clinic to offer modern, minimally invasive laser treatments that prioritize patient comfort, safety, and faster recovery. Every patient is treated with empathy, respect, and complete confidentiality, ensuring a stress-free healthcare experience.
                        </p>

                        <div className="mt-4">
                            <Link to="/about" className="inline-block px-8 py-3.5 bg-[#E75480] hover:bg-[#F06292] text-white font-extrabold rounded-xl shadow-md transition-all duration-200 text-decoration-none">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Infographic Image */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="relative rounded-3xl overflow-hidden border border-[#33151D] shadow-xl bg-[#1D0A10] p-4 max-w-[360px]">
                            <img
                                src={pilesInfoGraphic}
                                alt="Piles Causes, Symptoms & Treatment Options"
                                className="w-full h-auto object-cover rounded-2xl opacity-90"
                            />
                            <p className="text-xs text-[#C4A7B5] font-semibold text-center mt-3">
                                Piles and Your Health: Causes, Symptoms & Treatment Options
                            </p>
                        </div>
                    </div>

                </div>
            </section>



            {/* FACILITY PHOTOS */}
            <section className="py-20 bg-[#17080D] border-b border-[#33151D]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
                        Inside Tamanna Clinic (Akola)
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[clinicPhoto1, clinicPhoto2, clinicPhoto3].map((photo, index) => (
                            <div key={index} className="relative rounded-3xl overflow-hidden border-4 border-[#3A1723] shadow-lg hover:shadow-2xl transition-all duration-300 group aspect-[4/3] bg-[#17080D]">
                                <img
                                    src={photo}
                                    alt={`Tamanna Clinic Akola Facility ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-[#120609]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase">
                        Your Health Deserves the Best Care
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-12">
                        Why Choose Tamanna Clinic?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Advanced Laser Tech", desc: "Modern procedures with better precision and faster healing." },
                            { title: "Experienced Doctors", desc: "Skilled specialists providing accurate diagnosis and personalized treatment." },
                            { title: "Minimal Pain", desc: "Laser procedures reduce discomfort and post-operative pain." },
                            { title: "Same-Day Discharge", desc: "Most patients return home within a few hours after treatment." },
                            { title: "Affordable Treatment", desc: "Quality healthcare at reasonable and transparent pricing." },
                            { title: "Complete Privacy", desc: "Confidential consultations in a comfortable environment." },
                            { title: "Personalized Care", desc: "Treatment plans tailored to every patient's condition." },
                            { title: "Modern Infrastructure", desc: "Clean, hygienic, and fully equipped medical facilities." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#1F0A11] p-6 rounded-xl border border-[#3A1723] text-left relative overflow-hidden flex flex-col gap-2 shadow-md hover:border-[#E75480]/50 transition-colors">
                                <span className="absolute -right-3 -top-3 text-6xl font-black text-[#E75480]/15 select-none">{idx + 1}</span>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="text-[#D3B4C0] text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Homepage;