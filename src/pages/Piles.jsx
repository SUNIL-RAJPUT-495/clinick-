import React from "react";

const Piles = () => {
  return ( 
    <div className="min-h-screen bg-gray-50"> 
   
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Piles Treatment
        </h1>

        <p className="text-lg">
          Advanced Laser Treatment for Safe, Painless & Fast Recovery
        </p>
      </section>


      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10 items-center">

       
        <div className="flex justify-center" >
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
            alt="Piles Treatment"
            className="rounded-2xl shadow-lg w-full" />
        </div>


        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            What are Piles?
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            Piles (Hemorrhoids) ek common problem hai jisme rectum aur anus
            ke area me swelling aur pain hota hai. Tamanna Clinic me hum
            advanced laser technology ke through safe aur effective treatment
            provide karte hain.
          </p>


          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            Benefits of Laser Treatment
          </h2>


          <ul className="space-y-3 text-gray-700">

            <li>
              ✅ Minimal pain
            </li>

            <li>
              ✅ No major cuts or stitches
            </li>

            <li>
              ✅ Faster recovery
            </li>

            <li>
              ✅ Same day discharge
            </li>

            <li>
              ✅ Modern laser technology
            </li>

          </ul>

        </div>

      </section>


      
      <section className="bg-purple-100 py-12 text-center">

        <h2 className="text-3xl font-bold text-purple-800">
          Get Relief From Piles Problem
        </h2>

        <p className="mt-3 text-gray-600">
          Book your consultation with Tamanna Clinic today.
        </p>


        <button className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
          Book Appointment
        </button>

      </section>


    </div>
  );
};

export default Piles;