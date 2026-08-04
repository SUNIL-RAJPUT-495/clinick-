import React from "react";

const Fistula = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 via-purple-300 to-pink-300 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fistula Treatment
        </h1>

        <p className="text-lg">
          Advanced Laser Treatment for Safe, Painless & Fast Recovery
        </p>
      </section>


      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
            alt="Fistula Treatment"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>


        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            What is Fistula?
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            Anal fistula ek abnormal connection hota hai anus aur skin ke beech,
            jisse pain, swelling aur discharge hota hai. Tamanna Clinic me
            hum advanced laser treatment ke through safe aur effective solution provide karte hain.
          </p>


          <h2 className="text-2xl font-bold text-pink-600 mb-3">
            Benefits of Laser Treatment
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Minimal pain</li>
            <li>✅ No cuts or stitches</li>
            <li>✅ Faster recovery</li>
            <li>✅ Same day discharge</li>
            <li>✅ Advanced laser technology</li>
          </ul>

        </div>

      </section>


      {/* Appointment Section */}
      <section className="bg-pink-100 py-12 text-center">

        <h2 className="text-3xl font-bold text-pink-700">
          Get Relief From Fistula Problem
        </h2>

        <p className="mt-3 text-gray-600">
          Book your consultation with Tamanna Clinic today.
        </p>

        <button className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
          Book Appointment
        </button>

      </section>

    </div>
  );
};

export default Fistula;