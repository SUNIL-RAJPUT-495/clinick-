import { useState, useEffect } from "react";
import femaleDoctor from "../assets/female-doctor-premium.png";

function WhatsAppButton() {
    const [isTyping, setIsTyping] = useState(false);
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    useEffect(() => {
        const triggerSequence = () => {
            // Step 1: Show typing dots first
            setIsTyping(true);
            setIsMessageVisible(false);

            // Step 2: After 1.5 seconds of typing, reveal the actual message bubble
            setTimeout(() => {
                setIsTyping(false);
                setIsMessageVisible(true);
            }, 1500);

            // Step 3: Hide message bubble after 6 seconds
            setTimeout(() => {
                setIsMessageVisible(false);
            }, 7500);
        };

        // Initial trigger after 5 seconds
        const initialTimer = setTimeout(triggerSequence, 5000);

        // Repeat sequence every 45 seconds (less frequent and non-intrusive)
        const interval = setInterval(triggerSequence, 45000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    const handleWhatsAppRedirect = () => {
        const msg = "Hello Dr. Tamanna Sharma, I would like to consult regarding laser treatment at Tamanna Clinic.";
        window.open(`https://wa.me/917058430179?text=${encodeURIComponent(msg)}`, "_blank");
    };

    return (
        <div className="fixed bottom-4 sm:bottom-14 right-3 sm:right-8 z-50 flex flex-col items-end pointer-events-none">

            {/* STEP 1: REALISTIC TYPING INDICATOR BUBBLE */}
            {isTyping && (
                <div className="pointer-events-auto mb-2 w-[165px] sm:w-[210px] bg-[#0B141A] rounded-xl border border-white/10 p-2 sm:p-2.5 shadow-2xl flex items-center gap-2 sm:gap-2.5 animate-fadeIn">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#E75480] bg-[#120609] flex-shrink-0">
                        <img src={femaleDoctor} alt="Dr. Tamanna Sharma" className="w-full h-full object-cover" />
                        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#25D366] rounded-full"></span>
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-white text-[10px] sm:text-[11px] font-bold">Dr. Tamanna Sharma</span>
                        <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-[#8696a0] text-[9px] sm:text-[10px] font-semibold">is typing</span>
                            <div className="flex items-center gap-0.5 ml-0.5">
                                <span className="w-1 h-1 bg-[#25D366] rounded-full animate-bounce"></span>
                                <span className="w-1 h-1 bg-[#25D366] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-1 h-1 bg-[#25D366] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 2: DELIVERED WHATSAPP MESSAGE BUBBLE */}
            {isMessageVisible && (
                <div 
                    onClick={handleWhatsAppRedirect}
                    className="pointer-events-auto mb-2.5 w-[175px] sm:w-[225px] bg-[#0B141A] rounded-xl overflow-hidden shadow-2xl border border-white/10 text-left transition-all duration-300 transform scale-100 animate-fadeIn cursor-pointer"
                >
                    {/* WhatsApp Mini Header */}
                    <div className="bg-[#128C7E] px-2 py-1.5 sm:px-2.5 sm:py-1.5 flex items-center justify-between text-white">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-white flex-shrink-0">
                                <img src={femaleDoctor} alt="Dr. Tamanna Sharma" className="w-full h-full object-cover" />
                                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#25D366] rounded-full"></span>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-white text-[10px] sm:text-[11px] font-black m-0 leading-tight">Dr. Tamanna Sharma</h4>
                                <span className="text-white/80 text-[8px] sm:text-[9px] font-semibold">Online • Replies instantly</span>
                            </div>
                        </div>
                    </div>

                    {/* Chat Bubble Body */}
                    <div className="p-2 sm:p-2.5 bg-[#0B141A] bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:14px_14px]">
                        <div className="bg-[#005C4B] hover:bg-[#006E59] text-white p-1.5 sm:p-2 rounded-lg rounded-tl-none shadow-sm transition-all">
                            <p className="text-[9px] sm:text-[10px] font-bold text-[#FF8DAF] mb-0.5">Dr. Tamanna Sharma</p>
                            <p className="text-[10px] sm:text-[11px] font-medium leading-snug m-0 text-white">
                                👋 Hello! Need consultation for <strong>Piles, Fissure or Fistula</strong> treatment?
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ALWAYS SHOW FLOATING GREEN WHATSAPP LOGO BUTTON (NO CROSS ICON) */}
            <a
                href="https://wa.me/917058430179?text=Hello%2C%20I%20would%20like%20to%20consult%20Dr.%20Tamanna%20Sharma%20at%20Tamanna%20Clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto group flex items-center gap-3 text-decoration-none"
                aria-label="Chat on WhatsApp"
            >
                <div className="relative">
                    {/* Double Outer Glow Pulse */}
                    <div className="absolute -inset-2 bg-[#25D366]/30 rounded-full blur-md animate-ping pointer-events-none"></div>
                    <div className="absolute -inset-1 bg-[#25D366] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>

                    {/* Always Green WhatsApp Logo Icon */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#25D366] to-[#1EAA52] hover:from-[#28E16D] hover:to-[#22BD5C] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 border-2 border-white/40 transform group-hover:scale-110 transition-all duration-300">
                        <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current filter drop-shadow-md" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default WhatsAppButton;
