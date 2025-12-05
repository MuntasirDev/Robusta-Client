import React from "react";
// Assuming logo1.png is the coffee cup icon and 13.jpg is the background pattern
import logofooter from "../assets/logo1.png"; 
import BGhome from "../assets/13.jpg"; // The background image
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Phone,    
  Mail,     
  MapPin    
} from "lucide-react"; 

const Footer = () => {
  return (
    // Apply the raleway font to the entire footer container
    <div className="raleway">
      <footer 
        // Ensure text color is the dark brown hex code
        className="p-10 grid md:grid-cols-2 gap-10 lg:gap-0 text-[#331A15]"
        // Keep the BGhome image applied
        style={{ backgroundImage: `url(${BGhome})`, backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundColor: 'white' }}
      >

        {/* --- Left Side: Info and Socials (Wrapped in <aside>) --- */}
        <aside className="space-y-4"> 
          
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
             <img src={logofooter} alt="Espresso Emporium Logo" className="w-12 h-12" />
             <h2 className="rancho-regular text-4xl text-[#331A15] font-bold">
              Espresso Emporium
             </h2>
          </div>
          
          {/* Description */}
          <p className="raleway text-sm max-w-sm text-[#331A15] opacity-80">
            Always ready to be your friend. Come & Contact with us to share
            your memorable moments, to share with your best companion.
          </p>

          {/* Social Icons - THIS SECTION WAS MISSING ITS WRAPPER PREVIOUSLY */}
          <div className="flex space-x-4 pt-2 text-[#331A15] text-2xl">
            <Facebook />
            <Instagram />
            <Twitter />
            <Linkedin />
          </div>
          
          {/* Get in Touch Section */}
          <div className="pt-6 space-y-3">
            <h1 className="rancho-regular text-3xl text-[#331A15] font-bold">
              Get in Touch
            </h1>
            
            {/* Contact Info Items */}
            <div className="flex items-center space-x-3 text-[#331A15]">
              <Phone size={20} /> 
              <span className="raleway text-sm">+88 01533 333 333</span>
            </div>
            
            <div className="flex items-center space-x-3 text-[#331A15]">
              <Mail size={20} /> 
              <span className="raleway text-sm">info@gmail.com</span>
            </div>
            
            <div className="flex items-start space-x-3 text-[#331A15]">
              <MapPin size={20} className="mt-1" /> 
              <span className="raleway text-sm">72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </aside>

        {/* --- Right Side: Connect with Us Form --- */}
        <div className="flex justify-start md:justify-end">
          <form className="w-full max-w-sm space-y-4">
            <h1 className="rancho-regular text-3xl text-[#331A15] font-bold">
              Connect with Us
            </h1>
            
            {/* Input Fields - Text color is already correct */}
            <input
              type="text"
              placeholder="Name"
              className="raleway input input-bordered w-full h-12 border-none text-[#331A15] bg-white shadow-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="raleway input input-bordered w-full h-12 border-none text-[#331A15] bg-white shadow-md"
            />
            <textarea
              placeholder="Message"
              className="raleway textarea textarea-bordered w-full h-32 border-none text-[#331A15] bg-white shadow-md"
            ></textarea>
            
            {/* Send Message Button - Already Fixed */}
            <div className="flex justify-start pt-2">
              <button 
                type="submit" 
                className=" btn border border-[#331A15] text-[#331A15] bg-transparent rancho-regular text-lg px-6 py-2 rounded-full shadow-md hover:bg-[#331A15] hover:text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </footer>
      
      {/* --- Bottom Copyright Bar --- */}
      <div className={`w-full h-12 flex items-center justify-center bg-[#331A15]`}>
        <h3 className="text-xs text-[#E3B577] text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;