import React, { useState, useEffect, useRef } from "react";
import clinicPhoto1 from "../assets/clinic-photo-1.jpg";
import clinicPhoto2 from "../assets/clinic-photo-2.jpg";
import clinicPhoto3 from "../assets/clinic-photo-3.jpg";
import piles1 from "../assets/pils1.jpeg";
import piles2 from "../assets/piles2.jpeg";
import piles3 from "../assets/piles3.jpeg";

const photos = [
    { src: clinicPhoto1, title: "Tamanna Clinic - Main Entrance" },
    { src: clinicPhoto2, title: "Doctor Consultation Room" },
    { src: clinicPhoto3, title: "Laser Procedure Setup" },
    { src: piles1, title: "Advanced Medical Center" },
    { src: piles2, title: "Hygienic Patient Recovery Area" },
    { src: piles3, title: "Specialist Consultation Office" },
];

function FacilitySlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const sliderRef = useRef(null);

    // Auto-advance every 4 seconds (pauses when hovered)
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isHovered]);

    // Scroll to the active slide internally without scrolling the webpage
    useEffect(() => {
        if (sliderRef.current) {
            const container = sliderRef.current;
            const card = container.children[currentIndex];
            if (card) {
                container.scrollTo({
                    left: card.offsetLeft - container.offsetLeft,
                    behavior: "smooth"
                });
            }
        }
    }, [currentIndex]);

    return (
        <div 
            className="relative max-w-6xl mx-auto px-4 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Scrollable track with touch & snap scrolling */}
            <div 
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {photos.map((photo, idx) => (
                    <div 
                        key={idx}
                        className="snap-start flex-shrink-0 w-[280px] sm:w-[340px] md:w-[360px] aspect-[4/3] rounded-3xl overflow-hidden border-4 border-[#3A1723] shadow-xl hover:border-[#E75480]/70 transition-all duration-300 bg-[#17080D] relative group/card"
                    >
                        <img 
                            src={photo.src} 
                            alt={`Tamanna Clinic Akola ${idx + 1}`}
                            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* Dots Pagination */}
            <div className="flex justify-center items-center gap-2 mt-4">
                {photos.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            currentIndex === idx 
                                ? "w-8 bg-[#E75480]" 
                                : "w-2.5 bg-[#3A1723] hover:bg-[#E75480]/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default FacilitySlider;
