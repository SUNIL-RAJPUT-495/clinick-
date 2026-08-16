import React from "react";
import reviewerDipak from "../assets/reviewer-dipak.png";
import reviewerAnjali from "../assets/reviewer-anjali.png";
import reviewerAnkoish from "../assets/reviewer-ankoish.png";
import reviewerSneha from "../assets/reviewer-sneha.png";

function Reviews() {
  const data = [
    {
      name: "Dipak",
      img: reviewerDipak,
      rating: 5,
      text: "I had a great experience at Tamanna Clinic & Laser Piles Center. Dr. Tamanna Sharma is very kind and helpful. The clinic offers subsidies that make treatments more affordable for everyone. This is amazing! The staff is friendly, and the service is excellent. I felt comfortable and cared for during my visit. I highly recommend this clinic!",
      date: "Oct 4, 2025"
    },
    {
      name: "Anjali Sharma",
      img: reviewerAnjali,
      rating: 5,
      text: "I had a wonderful experience at Tamanna Clinic & Laser Piles Center with Dr. Tamanna Sharma. The medicines were very effective, helping me feel better quickly. Dr. Sharma provided excellent supervision throughout my treatment, answering all my questions and making sure I was comfortable. The clinic is clean and the staff is friendly. I highly recommend this place for anyone needing care!",
      date: "Oct 4, 2025"
    },
    {
      name: "Ankoish Singha",
      img: reviewerAnkoish,
      rating: 5,
      text: "Dr. Tamanna Sharma provides outstanding medical care. Clean facilities, supportive staff, and highly advanced laser procedures. Completely satisfied with the treatment!",
      date: "Mar 1, 2026"
    },
    {
      name: "Rahul Sharma",
      img: null,
      rating: 5,
      text: "Laser piles treatment was completely painless and very effective. Recovered within 2 days. Best proctologist in Akola.",
      date: "2 days ago"
    },
    {
      name: "Sneha Patil",
      img: reviewerSneha,
      rating: 5,
      text: "Dr. Tamanna is very kind and the supporting staff is extremely professional. Post-operative care guidance was excellent.",
      date: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#120609] text-[#F3E5EC] font-sans py-16 px-6">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Patient <span className="text-[#E75480]">Reviews</span>
        </h1>
        <div className="h-1.5 w-16 bg-[#E75480] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {data.map((item, index) => {
          const firstLetter = item.name.charAt(0).toUpperCase();

          return (
            <div 
              key={index}
              className="bg-[#1F0A11] p-6 md:p-8 rounded-3xl border border-[#3A1723] shadow-xl flex flex-col md:flex-row gap-6 items-start md:items-center text-left"
            >
              {/* User Avatar */}
              <div className="flex-shrink-0">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#E75480] shadow-md"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#E75480]/20 border-2 border-[#E75480] text-[#E75480] font-black text-2xl flex items-center justify-center shadow-md">
                    {firstLetter}
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-white font-extrabold text-lg m-0">
                    {item.name}
                  </h3>
                  <span className="text-[#D3B4C0] text-xs font-semibold">
                    {item.date}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#F4C542] text-sm">
                  {"★".repeat(item.rating)}
                </div>

                <p className="text-[#D3B4C0] text-sm md:text-base leading-relaxed mt-1">
                  "{item.text}"
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