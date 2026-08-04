import React from "react";
import "./Reviews.css";


function Reviews() {
  const data = [
    {
      name: "Rahul Sharma",
      img: "",
      rating: 5,
      text: "Laser treatment was painless and very effective.",
      date: "2 days ago"
    },
    {
      name: "Sneha Patil",
      img: "",
      rating: 5,
      text: "Doctor is very kind and staff is supportive.",
      date: "5 days ago"
    },
    {
      name: "Amit Verma",
      img: "",
      rating: 4,
      text: "Good treatment and clean environment.",
      date: "1 week ago"
    },
    {
      name: "Pooja Singh",
      img: "",
      rating: 5,
      text: "Fast recovery and no pain after treatment.",
      date: "10 days ago"
    },
    {
      name: "Imran Khan",
      img: "",
      rating: 4,
      text: "Affordable and best service.",
      date: "2 weeks ago"
    }
  ];

  return (
    <div className="reviews-container">
      <h2 className="title">Patient Reviews</h2>

      {data.map((item, index) => (
        <div className="review-box" key={index}>

          {/* LEFT SIDE */}
          <div className="left">
            <img src={item.img} alt="user" />
            <p className="name">{item.name}</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <div className="rating">{"⭐".repeat(item.rating)}</div>
            <p className="text">{item.text}</p>
            <p className="date">{item.date}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Reviews;