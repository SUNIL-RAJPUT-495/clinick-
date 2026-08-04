import React from "react";

const Fissure = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fissure Treatment
        </h1>

        <p className="text-lg">
          Advanced Laser Treatment for Quick & Pain-Free Healing
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
            alt="Fissure Treatment"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            What is Fissure?
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            Anal fissure ek small tear hota hai anus ke lining me,
            jisse severe pain aur bleeding ho sakti hai. Tamanna Clinic
            me hum modern laser treatment ke through fast recovery
            provide karte hain.
          </p>

          <h2 className="text-2xl font-bold text-pink-700 mb-3">
            Benefits of Laser Treatment
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Less pain</li>
            <li>✅ Quick healing</li>
            <li>✅ No stitches</li>
            <li>✅ Same day discharge</li>
            <li>✅ Advanced technology</li>
          </ul>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="bg-pink-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-pink-800">
          Get Relief From Fissure Pain
        </h2>

        <p className="mt-3 text-gray-600">
          Book your consultation with Tamanna Clinic today.
        </p>

        <button className="mt-6 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition">
          Book Appointment
        </button>
      </section>

    </div>
  );
};

export default Fissure;