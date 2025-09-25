import React, { useEffect, useState } from 'react';
import './navbar.css';
import { FaArrowRightLong } from "react-icons/fa6";

import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menu,isMenu] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <header className={`nav sm:hidden transition-all duration-1000 ease-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
      <div className='navDivs'>
        <div className='navItems'>
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">Services</a>
          <a href="#">Our Team</a>
          <a href="#">Make Enquiry</a>
        </div>
        <button className='navButton'>
          <span>Contact Us</span> <FaArrowRightLong />
        </button>
      </div>
    </header>




{/* For mobile  */}
 <header className="nav hidden sm:flex flex-col">
      <div className="navDivs p-2 flex justify-between items-center">
        <button className="navButton flex items-center gap-1">
          <span>Contact Us</span> <FaArrowRightLong />
        </button>

        <button onClick={() => isMenu(!menu)} className="text-[20px]">
          <IoMenu />
        </button>
      </div>

    
      <div
        className={`navItems flex flex-col  transition-all duration-500 ease-in-out
          ${menu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <a href="#" className="p-2 border-b">About</a>
        <a href="#" className="p-2 border-b">News</a>
        <a href="#" className="p-2 border-b">Services</a>
        <a href="#" className="p-2 border-b">Our Team</a>
        <a href="#" className="p-2">Make Enquiry</a>
      </div>
    </header>



    </>
  );
};

export default Navbar;
