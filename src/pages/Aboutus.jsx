import { Link } from "react-router-dom";
import femaleDoctor from "../assets/female-doctor-premium.png";
import clinicPhoto1 from "../assets/clinic-photo-1.jpg";
import clinicPhoto2 from "../assets/clinic-photo-2.jpg";
import clinicPhoto3 from "../assets/clinic-photo-3.jpg";

function Aboutus() {
    return (
        <div className="bg-[#120609] text-[#F3E5EC] min-h-screen font-sans">
            
            {/* ABOUT HEADER / INTRO */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#1D0910] via-[#15070B] to-[#120609] border-b border-[#33151D]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Doctor Profile Card */}
                    <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
                        <div className="w-full max-w-[340px] md:max-w-[380px] bg-[#1F0A11] rounded-3xl p-3 border border-[#3A1723] shadow-2xl text-left group">
                            <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#2E0F1A] to-[#1F0A11]">
                                <img 
                                    src={femaleDoctor} 
                                    alt="Dr. Tamanna Sharma - Specialist Proctologist" 
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
                                />
                            </div>
                            <div className="p-3.5 space-y-1 text-center sm:text-left">
                                <h4 className="text-white font-bold text-lg leading-tight m-0">
                                    Dr. Tamanna Sharma
                                </h4>
                                <div className="pt-1">
                                    <p className="text-[#E75480] text-sm font-bold leading-snug uppercase">
                                        MS Shalya Pune - 99170-A
                                    </p>
                                    <p className="text-[#D3B4C0] text-xs font-bold leading-relaxed uppercase mt-0.5">
                                        Consultant Proctologist & Laser Specialist
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: About text */}
                    <div className="lg:col-span-7 text-left flex flex-col gap-6 order-1 lg:order-2">
                        <span className="inline-block text-[#E75480] text-xs md:text-sm font-bold tracking-widest uppercase bg-[#E75480]/15 px-4 py-1.5 rounded-full w-fit leading-normal max-w-full text-center border border-[#E75480]/30">
                            Trusted Care for Better Healing
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            About Us
                        </h1>
                        <div className="h-1 w-20 bg-[#E75480] rounded-full"></div>
                        
                        <div className="bg-[#1F0A11] p-8 md:p-10 rounded-3xl border border-[#3A1723] shadow-xl">
                            <p className="text-[#F3E5EC] text-lg md:text-xl leading-relaxed font-semibold mb-4">
                                <strong>Tamanna Clinic & Laser Piles Centre</strong> was founded by <strong>Dr. Tamanna Sharma</strong> with a commitment to provide advanced, compassionate, and patient-centered care for anorectal disorders.
                            </p>
                            <p className="text-[#D3B4C0] text-base leading-relaxed">
                                Our clinic combines modern laser technology with expert medical care to ensure safe treatment, faster recovery, and long-lasting relief for every patient. We prioritize confidentiality, patient comfort, and top-tier clinical hygiene.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DOCTOR CREDENTIALS & PROFILE */}
            <section className="py-20 bg-[#17080D] border-b border-[#33151D]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <div className="lg:col-span-7 text-left space-y-6">
                        <span className="text-[#E75480] text-sm font-bold tracking-widest uppercase bg-[#E75480]/15 px-4 py-1 rounded-full border border-[#E75480]/30">
                            Lead Proctologist Specialist
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Dr. Tamanna Sharma
                        </h2>
                        <p className="text-[#E75480] text-base font-bold uppercase tracking-wide">
                            MS Shalya Pune - 99170-A
                        </p>
                        <p className="text-[#D3B4C0] text-sm font-semibold uppercase">
                            Consultant Proctologist & Laser Specialist
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="bg-[#1F0A11] p-4 rounded-xl border border-[#3A1723] flex items-center gap-3">
                                <span className="text-[#E75480] text-xl">✔</span>
                                <span className="text-white text-sm font-bold">Fellow in Anoproctology</span>
                            </div>
                            <div className="bg-[#1F0A11] p-4 rounded-xl border border-[#3A1723] flex items-center gap-3">
                                <span className="text-[#E75480] text-xl">✔</span>
                                <span className="text-white text-sm font-bold">Specialist in Painless Laser Surgery</span>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a href="https://wa.me/917058430179?text=Hello%2C%20I%20would%20like%20to%20consult%20Dr.%20Tamanna%20Sharma." target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-[#E75480] hover:bg-[#F06292] text-white font-bold rounded-xl shadow-lg transition-colors text-decoration-none">
                                Consult Doctor Now
                            </a>
                            <a href="tel:+917058430179" className="px-8 py-3.5 bg-[#1F0A11] border border-[#E75480] text-[#E75480] hover:bg-[#2A0E18] font-bold rounded-xl transition-colors text-decoration-none">
                                📞 +91 7058430179
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-[340px] bg-[#1F0A11] p-6 rounded-3xl border border-[#3A1723] shadow-xl text-center space-y-4">
                            <h3 className="text-xl font-bold text-white">Clinic OPD Hours</h3>
                            <div className="space-y-2 text-sm text-[#D3B4C0] font-semibold text-left border-y border-[#3A1723] py-4">
                                <p className="flex justify-between"><span>Mon - Sat:</span> <span className="text-white font-bold">Morning 9:00 AM – 1:00 PM</span></p>
                                <p className="flex justify-between"><span>Mon - Sat:</span> <span className="text-white font-bold">Evening 5:00 PM – 9:00 PM</span></p>
                                <p className="flex justify-between text-[#E75480]"><span>Emergency:</span> <span className="font-bold">24x7 Consultation</span></p>
                            </div>
                            <p className="text-xs text-[#D3B4C0] italic">
                                Clinic Location: Main Road, Sindhi Camp, Near Gurunanak School, Akola.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* FACILITY PHOTOS */}
            <section className="py-20 bg-[#120609]">
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

        </div>
    );
}

export default Aboutus;