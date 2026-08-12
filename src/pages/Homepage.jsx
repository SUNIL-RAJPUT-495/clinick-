import { Link } from "react-router-dom";
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
                    
                    {/* Right Column (Image & Doctor Info Card) */}
                    <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
                        {/* Decorative Background Elements */}
                        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#E75480] rounded-full filter blur-[80px] opacity-20 -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#E75480]/10 to-transparent rounded-3xl -z-10 rotate-3 scale-105"></div>
                        
                        {/* Professional Photo & Details Card */}
                        <div className="w-full max-w-[340px] md:max-w-[380px] bg-white rounded-3xl p-3 border border-[#F4DCE4] shadow-2xl text-left group">
                            {/* Photo Container */}
                            <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#ffe2eb] to-white">
                                <img 
                                    src={femaleDoctor} 
                                    alt="Specialist Doctor Dr. Tamanna Sharma" 
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
                                />
                            </div>

                            {/* Doctor Credentials & Details */}
                            <div className="p-3.5 space-y-1.5">
                                <h4 className="text-[#6A1B2E] font-bold text-lg leading-tight flex items-center flex-wrap gap-2">
                                    <span>Dr. Tamanna Sharma</span>
                                    <span className="text-xs font-bold text-[#E75480] bg-[#E75480]/10 px-2.5 py-0.5 rounded-full border border-[#E75480]/20">
                                        Reg number-99170
                                    </span>
                                </h4>
                                <div className="pt-1">
                                    <p className="text-[#E75480] text-sm font-bold leading-snug">
                                        MS (Shalya) Pune
                                    </p>
                                    <p className="text-[#5E3542] text-xs font-semibold leading-relaxed mt-0.5">
                                        Fellow in Anoproctology
                                    </p>
                                    <p className="text-[#7A5861] text-xs font-medium leading-relaxed">
                                        Consultant Proctologist and Laser Specialist
                                    </p>
                                </div>
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

            {/* OUR EXPERTISE SECTION (EXACT INFOGRAPHIC DESIGN) */}
            <section className="py-20 bg-gradient-to-b from-[#FFF5F8] to-white border-b border-[#F4DCE4]">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Main Infographic Card */}
                    <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl p-8 sm:p-12 md:p-16 text-left">
                        {/* Header matching the image */}
                        <div className="mb-10 pb-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0F2D59] tracking-tight mb-2">
                                Our Expertise
                            </h2>
                            <p className="text-[#334155] text-lg md:text-xl font-semibold">
                                Specialized care for common anorectal conditions
                            </p>
                            <div className="w-16 h-1 bg-[#0F2D59] rounded-full mt-4"></div>
                        </div>

                        {/* Condition List */}
                        <div className="space-y-10">
                            {/* 1. PILES / HEMORRHOIDS */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4 flex justify-center md:justify-start">
                                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-[3px] border-[#1D4ED8] p-1.5 bg-white shadow-md flex-shrink-0">
                                        <img 
                                            src={pilesDiagram} 
                                            alt="Piles / Hemorrhoids Illustration" 
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-8 flex flex-col justify-center">
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D59] tracking-wide uppercase mb-4">
                                        Piles / Hemorrhoids
                                    </h3>
                                    <ul className="space-y-2.5 text-[#1E293B] text-base sm:text-lg font-medium">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Laser Piles Treatment (Minimally Invasive)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Injection Sclerotherapy</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Rubber Band Ligation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Advanced Kshar Sutra Therapy</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Painless, Daycare Procedures</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Quick Recovery & Minimal Recurrence</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Dotted Divider */}
                            <div className="border-b border-dashed border-[#CBD5E1] my-8"></div>

                            {/* 2. FISSURE */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4 flex justify-center md:justify-start">
                                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-[3px] border-[#1D4ED8] p-1.5 bg-white shadow-md flex-shrink-0">
                                        <img 
                                            src={fissureDiagram} 
                                            alt="Fissure Illustration" 
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-8 flex flex-col justify-center">
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D59] tracking-wide uppercase mb-4">
                                        Fissure
                                    </h3>
                                    <ul className="space-y-2.5 text-[#1E293B] text-base sm:text-lg font-medium">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Laser Fissure Treatment</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Lateral Internal Sphincterotomy (LIS)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Medical Management & Pain Relief</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Diet & Lifestyle Guidance</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Fast Healing & Long-term Relief</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Dotted Divider */}
                            <div className="border-b border-dashed border-[#CBD5E1] my-8"></div>

                            {/* 3. FISTULA-IN-ANO */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4 flex justify-center md:justify-start">
                                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-[3px] border-[#1D4ED8] p-1.5 bg-white shadow-md flex-shrink-0">
                                        <img 
                                            src={fistulaDiagram} 
                                            alt="Fistula-In-Ano Illustration" 
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-8 flex flex-col justify-center">
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D59] tracking-wide uppercase mb-4">
                                        Fistula-In-Ano
                                    </h3>
                                    <ul className="space-y-2.5 text-[#1E293B] text-base sm:text-lg font-medium">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Laser Fistula Treatment (FiLaC / SiLaC)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Kshar Sutra Therapy</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Fistulectomy / Seton Placement</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Abscess Drainage</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Preservation of Sphincter Function</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0F2D59] font-black text-xl leading-none mt-1">•</span>
                                            <span>Lower Recurrence Rate</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FASTER RECOVERY AND REDUCED HOSPITAL STAY SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F0F9FF] to-[#E6F4FE] border-b border-[#BAE6FD]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-3xl border border-[#BAE6FD] shadow-xl p-8 sm:p-12 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Image Left Column */}
                        <div className="lg:col-span-5 flex justify-center items-center">
                            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-2 flex items-center justify-center border-4 border-white">
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
                                <span className="inline-block text-[#0284C7] text-xs sm:text-sm font-extrabold tracking-widest uppercase bg-[#E0F2FE] px-4 py-1.5 rounded-full mb-3">
                                    Patient-Centric Healthcare
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D59] tracking-tight leading-tight">
                                    Faster Recovery and Reduced Hospital Stay
                                </h2>
                            </div>

                            <ul className="space-y-4 text-[#1E293B] text-base sm:text-lg font-medium">
                                <li className="flex items-start gap-3.5">
                                    <span className="text-[#0284C7] font-black text-2xl leading-none mt-0.5">•</span>
                                    <span className="leading-relaxed">
                                        Minimally invasive procedures translate into quicker healing times, allowing patients to return to their daily routines sooner.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3.5">
                                    <span className="text-[#0284C7] font-black text-2xl leading-none mt-0.5">•</span>
                                    <span className="leading-relaxed">
                                        Shorter hospital stays mean reduced healthcare costs and less disruption to personal and professional life.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3.5">
                                    <span className="text-[#0284C7] font-black text-2xl leading-none mt-0.5">•</span>
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
                                    className="px-7 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-xl shadow-lg shadow-[#0284C7]/20 hover:shadow-xl transition-all duration-200 text-base"
                                >
                                    Book Quick Recovery Consultation
                                </a>
                                <Link 
                                    to="/laserTreatment" 
                                    className="px-7 py-3.5 bg-white border-2 border-[#0284C7] text-[#0284C7] hover:bg-[#F0F9FF] font-bold rounded-xl transition-all duration-200 text-base"
                                >
                                    Explore Laser Treatments
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SYMPTOMS & CAUSES SECTION */}
            <section className="py-20 bg-white border-b border-[#F4DCE4]">
                <div className="max-w-6xl mx-auto px-6 text-left">
                    <div className="bg-[#FFF5F8] rounded-3xl border border-[#F4DCE4] p-8 sm:p-12 md:p-14 shadow-lg">
                        <span className="inline-block text-[#E75480] text-xs sm:text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full mb-3">
                            Symptoms and Causes
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#6A1B2E] tracking-tight mb-6">
                            What are the symptoms of hemorrhoids?
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8 space-y-4 text-[#5E3542] text-base sm:text-lg leading-relaxed">
                                <p>
                                    <strong>Internal hemorrhoids</strong> rarely cause pain (and typically can't be felt) unless they prolapse. Many people with internal hemorrhoids don't know they have them because they're inside your rectum.
                                </p>
                                <p>
                                    If you have symptoms of internal hemorrhoids, you might see <strong>bright red blood</strong> on toilet paper, in your poop or in the toilet. If an internal hemorrhoid prolapses through your anus, you may be able to gently push it back inside.
                                </p>
                            </div>
                            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#F4DCE4] shadow-sm space-y-3">
                                <h4 className="text-[#6A1B2E] font-bold text-lg border-b border-[#F4DCE4] pb-2">Common Signs:</h4>
                                <div className="flex items-center gap-3 text-sm text-[#5E3542] font-semibold">
                                    <span className="text-[#E75480] text-lg">🩸</span>
                                    <span>Painless Bright Red Bleeding</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#5E3542] font-semibold">
                                    <span className="text-[#E75480] text-lg">📍</span>
                                    <span>Prolapsed Anal Mass/Lump</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#5E3542] font-semibold">
                                    <span className="text-[#E75480] text-lg">⚡</span>
                                    <span>Perianal Itching & Irritation</span>
                                </div>
                            </div>
                        </div>

                        {/* What Causes Hemorrhoids */}
                        <div className="mt-8 pt-8 border-t border-[#F4DCE4]">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#6A1B2E] mb-3">
                                What causes hemorrhoids?
                            </h3>
                            <p className="text-[#5E3542] text-base leading-relaxed mb-4">
                                Too much pressure on the veins in your anus or rectum, as well as irregular bowel movements, cause hemorrhoids. This pressure and irritation lead to swelling and inflammation of your veins.
                            </p>
                            <p className="text-[#7A5861] text-sm font-semibold mb-4">
                                Some activities or conditions that cause pressure and lead to (or worsen) hemorrhoids are:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {[
                                    "Pushing hard during bowel movement",
                                    "Straining to lift heavy objects or weightlifting",
                                    "Sitting on toilet for long periods",
                                    "Chronic constipation or diarrhea",
                                    "Eating a low-fiber diet",
                                    "Pregnancy & childbirth pressure",
                                    "Being overweight or obesity",
                                    "Sedentary lifestyle & anal pressure"
                                ].map((cause, i) => (
                                    <div key={i} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#F4DCE4] text-xs sm:text-sm font-semibold text-[#5E3542] shadow-sm">
                                        <span className="text-[#E75480] font-bold">•</span>
                                        <span>{cause}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ADVANCED PROCEDURES & TREATMENT MODALITIES */}
            <section className="py-20 bg-[#FFF5F8] border-b border-[#F4DCE4]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full inline-block mb-3">
                        Proven Clinical Solutions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#6A1B2E] tracking-tight mb-4">
                        Advanced Treatment Procedures for Hemorrhoids
                    </h2>
                    <p className="text-[#7A5861] text-base md:text-lg max-w-3xl mx-auto font-medium mb-12">
                        Depending on the grade and severity of hemorrhoids, we provide modern laser surgery, sclerotherapy, coagulation therapy, and banding.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
                        
                        {/* 1. LASER TREATMENT OF HEMORRHOIDS */}
                        <div className="bg-white rounded-3xl border border-[#F4DCE4] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                            <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-[#FFF5F8] border border-[#F4DCE4]">
                                <img 
                                    src={laserTreatmentDiagram} 
                                    alt="Laser Treatment of Hemorrhoids 3 Steps" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#6A1B2E] mb-3">
                                Laser Treatment of Hemorrhoids
                            </h3>
                            <p className="text-[#5E3542] text-sm sm:text-base leading-relaxed flex-grow">
                                Advanced laser surgery uses a precision radial laser fiber to ablate and shrink hemorrhoidal nodes from within. The laser energy seals blood vessels without any cuts or stitches, resulting in minimal pain, negligible bleeding, and same-day discharge.
                            </p>
                        </div>

                        {/* 2. SCLEROTHERAPY */}
                        <div className="bg-white rounded-3xl border border-[#F4DCE4] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                            <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-[#FFF5F8] border border-[#F4DCE4]">
                                <img 
                                    src={sclerotherapyDiagram} 
                                    alt="Sclerotherapy for Hemorrhoids" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#6A1B2E] mb-3">
                                Sclerotherapy
                            </h3>
                            <p className="text-[#5E3542] text-sm sm:text-base leading-relaxed flex-grow">
                                <strong>Sclerotherapy</strong> is the process of injecting chemicals into an internal hemorrhoid to relieve pain and to make scar tissue form. Like coagulation, the scar tissue will cut off the blood supply to the hemorrhoid. Again, it will wither away and fall off. This is the better option if you're on blood thinners as your skin doesn't need to be cut open.
                            </p>
                        </div>

                        {/* 3. COAGULATION THERAPY */}
                        <div className="bg-white rounded-3xl border border-[#F4DCE4] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                            <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-[#FFF5F8] border border-[#F4DCE4]">
                                <img 
                                    src={coagulationDiagram} 
                                    alt="Infrared Coagulation Therapy (IRC)" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#6A1B2E] mb-3">
                                Coagulation Therapy (Infrared IRC)
                            </h3>
                            <p className="text-[#5E3542] text-sm sm:text-base leading-relaxed flex-grow">
                                Internal hemorrhoids that are bleeding and not prolapsed are treated with <strong>coagulation therapy</strong> or <strong>infrared photocoagulation</strong>. In this procedure, the doctor will create scar tissue on the hemorrhoid by using an electric current or infrared light. The buildup of this tissue will cut off the blood supply of the hemorrhoid which will then wither away and fall off. Patients mostly only experience some mild discomfort and cramping during the procedure.
                            </p>
                        </div>

                        {/* 4. RUBBER BAND LIGATION */}
                        <div className="bg-white rounded-3xl border border-[#F4DCE4] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                            <div>
                                <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-[#FFF5F8] to-[#FFE4EC] border border-[#F4DCE4] flex items-center justify-center p-6 text-center">
                                    <div className="space-y-2">
                                        <span className="text-5xl inline-block">⭕</span>
                                        <h4 className="text-[#6A1B2E] font-bold text-lg">Rubber Band Ligation (Banding)</h4>
                                        <p className="text-xs text-[#7A5861] font-semibold">Non-surgical Outpatient Procedure</p>
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-[#6A1B2E] mb-3">
                                    Rubber Band Ligation
                                </h3>
                                <p className="text-[#5E3542] text-sm sm:text-base leading-relaxed">
                                    <strong>Rubber band ligation</strong>, also called <strong>banding</strong>, is the procedure that puts a rubber band on the base of the hemorrhoid to cut off its circulation. It is often performed if you have a prolapsed and bleeding internal hemorrhoid. Without blood supply, the hemorrhoid will wither away and fall off in a few days. This procedure is less invasive than other surgeries on this list, and it needs no anesthesia at all. You also don't need an OR to do this procedure.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-20 bg-white border-b border-[#F4DCE4]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#6A1B2E] mb-12">
                        Inside Tamanna Clinic (Akola)
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[clinicPhoto1, clinicPhoto2, clinicPhoto3].map((photo, index) => (
                            <div key={index} className="relative rounded-3xl overflow-hidden border-4 border-white shadow-md hover:shadow-xl transition-all duration-300 group aspect-[4/3] bg-[#FFF5F8]">
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