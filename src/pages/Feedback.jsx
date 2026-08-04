import React from "react";
import "./Feedback.css";

const reviews = [
  {
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    text: "Bahut acha treatment mila, doctor ka behavior bhi friendly tha.",
    date: "2 days ago",
  },
  {
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    text: "Clinic clean tha aur staff helpful tha.",
    date: "5 days ago",
  },
  {
    name: "Amit Kumar",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    text: "Laser treatment painless tha, recommend karunga.",
    date: "1 week ago",
  },
  {
    name: "Neha Singh",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 4,
    text: "Good experience overall.",
    date: "10 days ago",
  },
  {
    name: "Vikas Gupta",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
    text: "Best clinic in city 👍",
    date: "2 weeks ago",
  },
];

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2>Patient Reviews</h2>
    

      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          
          {/* LEFT SIDE */}
          <div className="review-left">
            <img src={review.image} alt={review.name} />
            <p className="name">{review.name}</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="review-right">
            <div className="rating">
              {"⭐".repeat(review.rating)}
            </div>
            <p className="text">{review.text}</p>
            <p className="date">{review.date}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Feedback;