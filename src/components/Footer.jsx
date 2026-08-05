import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const handleNav = (path) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(path);
    };

    return (
        <footer className="bg-[#6A1B2E] text-white py-16 px-6 relative overflow-hidden mt-16 border-t-4 border-[#E75480]">
            
            {/* Background Soft Glow */}
            <div className="absolute w-80 h-80 bg-[#E75480] rounded-full filter blur-[100px] opacity-10 -right-20 -bottom-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* Left Side: Contact Info */}
                <div className="md:col-span-5 flex flex-col gap-6 text-left">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-white m-0">TAMANNA CLINIC</h2>
                        <span className="text-xs font-bold text-[#E75480] uppercase tracking-wider block mt-1">& Laser Piles Centre</span>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-[#FFE2EB]">
                        <div>
                            <p className="font-extrabold text-white text-base mb-1">Business Hours</p>
                            <p>Morning: 9 AM – 1 PM</p>
                            <p>Evening: 5 PM – 9 PM</p>
                        </div>

                        <div>
                            <p className="font-extrabold text-white text-base mb-1">Phone Number</p>
                            <a href="tel:+917058430179" className="hover:text-white transition-colors text-decoration-none block">+91 7058430179</a>
                        </div>

                        <div>
                            <p className="font-extrabold text-white text-base mb-1">Email</p>
                            <a href="mailto:tamannapilesclinic@gmail.com" className="hover:text-white transition-colors text-decoration-none block">tamannapilesclinic@gmail.com</a>
                        </div>

                        <div>
                            <p className="font-extrabold text-white text-base mb-1">Address</p>
                            <p className="leading-relaxed">
                                Main Road, Sindhi Camp,<br />
                                Near Gurunanak School, Akola
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Links Grid */}
                <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#FFE2EB] font-extrabold text-base tracking-wider uppercase">Company</h3>
                        <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm text-[#FFE2EB]/80">
                            <li>
                                <button onClick={() => handleNav("/about")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">About Us</button>
                            </li>
                            <li>
                                <button onClick={() => handleNav("/reviews")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">Reviews</button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#FFE2EB] font-extrabold text-base tracking-wider uppercase">Services</h3>
                        <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm text-[#FFE2EB]/80">
                            <li>
                                <button onClick={() => handleNav("/laserTreatment")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">Laser Treatment</button>
                            </li>
                            <li>
                                <button onClick={() => handleNav("/piles")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">Piles</button>
                            </li>
                            <li>
                                <button onClick={() => handleNav("/fissure")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">Fissure</button>
                            </li>
                            <li>
                                <button onClick={() => handleNav("/fistula")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">Fistula</button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                        <h3 className="text-[#FFE2EB] font-extrabold text-base tracking-wider uppercase">Support</h3>
                        <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm text-[#FFE2EB]/80">
                            <li>
                                <button onClick={() => handleNav("/faq")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">FAQ</button>
                            </li>
                            <li>
                                <button onClick={() => handleNav("/contact")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">Contact</button>
                            </li>
                            <li>
                                <button onClick={() => handleNav("/helpdesk")} className="hover:text-white transition-colors font-semibold bg-transparent border-none p-0 cursor-pointer">Helpdesk</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Credit */}
            <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFE2EB]/60 gap-4">
                <p>&copy; {new Date().getFullYear()} Tamanna Clinic. All rights reserved.</p>
                <p>
                    Powered by{" "}
                    <a href="https://ashtrinox.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFE2EB] transition-colors font-bold text-decoration-none">
                        ashtrinox.in
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;