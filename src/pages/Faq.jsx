import { useState } from "react";
import "./Faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is piles (hemorrhoids)?",
      a: "Piles are swollen veins in the rectum or anus causing pain and bleeding."
    },
    {
      q: "Is laser treatment safe?",
      a: "Yes, laser treatment is safe, painless, and ensures fast recovery."
    },
    {
      q: "Does piles treatment cause pain?",
      a: "Modern laser treatment is almost painless with minimal discomfort."
    },
    {
      q: "How long does recovery take?",
      a: "Most patients recover within a few days."
    },
    {
      q: "Do I need hospital stay?",
      a: "No, it is usually a same-day procedure."
    },
    {
      q: "How to book appointment?",
      a: "You can call us or visit our clinic directly."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqs.map((item, index) => (
        <div className="faq-box" key={index}>
          
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            <h4>{item.q}</h4>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>

          {activeIndex === index && (
            <p className="faq-answer">{item.a}</p>
          )}

        </div>
      ))}
    </div>
  );
}

export default Faq;