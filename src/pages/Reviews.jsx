import React from "react";

function Reviews() {
  const data = [
    {
      name: "Dipak",
      rating: 5,
      text: "I had a great experience at Tamanna Clinic & Laser Piles Center. Dr. Tamanna Sharma is very kind and helpful. The clinic offers subsidies that make treatments more affordable for everyone. This is amazing! The staff is friendly, and the service is excellent. I felt comfortable and cared for during my visit. I highly recommend this clinic!",
      date: "Oct 4, 2025"
    },
    {
      name: "Anjali Sharma",
      rating: 5,
      text: "I had a wonderful experience at Tamanna Clinic & Laser Piles Center with Dr. Tamanna Sharma. The medicines were very effective, helping me feel better quickly. Dr. Sharma provided excellent supervision throughout my treatment, answering all my questions and making sure I was comfortable. The clinic is clean and the staff is friendly. I highly recommend this place for anyone needing care!",
      date: "Oct 4, 2025"
    },
    {
      name: "Ankoish Singha",
      rating: 5,
      text: "Dr. Tamanna Sharma provides outstanding medical care. Clean facilities, supportive staff, and highly advanced laser procedures. Completely satisfied with the treatment!",
      date: "Mar 1, 2026"
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      text: "Laser piles treatment was completely painless and very effective. Recovered within 2 days. Best proctologist in Akola.",
      date: "2 days ago"
    },
    {
      name: "Sneha Patil",
      rating: 5,
      text: "Dr. Tamanna is very kind and the supporting staff is extremely professional. Post-operative care guidance was excellent.",
      date: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F8] font-sans py-16 px-6">
      
      {/* Title */}
      <div className="text-center mb-12">
        <span className="inline-block text-[#E75480] text-xs md:text-sm font-extrabold tracking-widest uppercase bg-[#E75480]/10 px-4 py-1.5 rounded-full mb-3">
          Verified Reviews from Justdial
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-[#6A1B2E] tracking-tight">
          Patient Reviews
        </h1>
        <div className="h-1.5 w-16 bg-[#E75480] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {data.map((item, index) => {
          // Get first letter of the author name to render clean user circle avatar
          const firstLetter = item.name.trim().charAt(0).toUpperCase();

          return (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-3xl border border-[#F4DCE4] shadow-sm flex flex-col md:flex-row gap-6 items-start text-left hover:shadow-md transition-shadow duration-200"
            >
              {/* User Avatar Circle */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#FFF5F8] border-2 border-[#F4DCE4] flex items-center justify-center text-[#E75480] font-black text-xl shadow-inner">
                  {firstLetter}
                </div>
                <div className="md:text-center">
                  <p className="font-extrabold text-[#6A1B2E] text-base leading-tight">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-[#7A5861] mt-1 font-bold">
                    📅 {item.date}
                  </p>
                </div>
              </div>

              {/* Rating & Review Body */}
              <div className="flex-grow">
                <div className="flex text-amber-400 text-lg gap-0.5 mb-2.5">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
                <p className="text-[#5E3542] text-sm md:text-base leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Reviews;