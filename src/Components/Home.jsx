import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeCard from "./CoffeCard";
// NOTE: Removed local file import since we are using a direct URL.
// import Cover from "../assets/3.png"; 
import Footer from "./Footer";

// Using the direct image link provided by the user
const IMAGE_URL = "https://ibb.co.com/xK0TLqcm";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div>
      {/* --- HERO BANNER SECTION (Styled to fit the dark banner design) --- */}
      <div className="relative w-full h-[600px] overflow-hidden">
        
        {/* Background Image Container - Using the direct URL */}
        <img
          // ✅ FIX: Using the direct IMAGE_URL variable here
          src={IMAGE_URL} 
          alt="Coffee beans in a cup"
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          {/* Text Container - Aligned to the right in the layout */}
          <div className="text-white text-center md:text-left max-w-xl mx-auto md:mr-20">
            {/* Title */}
            <h2 className="rancho-regular text-5xl md:text-6xl font-bold mb-4">
              Would you like a Cup of Delicious Coffee?
            </h2>

            {/* Description */}
            <p className="raleway text-base mb-8 opacity-85">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>

            {/* Learn More Button */}
            <button
              className="raleway bg-[#E3B577] text-[#331A15] px-6 py-2 rounded-md font-semibold transition duration-300 hover:bg-[#331A15] hover:text-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <Footer /> 

      {/* Coffee Card Section (Kept as is, commented out) */}
      <div className='gird grid-cols-1 md:grid-cols-2 gap-6'>
        {
            coffees.map(coffee => <CoffeCard 
                key={coffee._id} 
                coffees={coffee}
                setCoffees={setCoffees}
                coffee={coffee}></CoffeCard>)
        }
      </div>
    </div>
  );
};

export default Home;