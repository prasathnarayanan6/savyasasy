import React, { useState } from 'react';
import logo from '../Assets/Savyasasylogo.png';

function Navbar() {
  const [arrowState, setArrowState] = useState({});

  const handleClick = (item) => {
    setArrowState((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
  console.log(arrowState);
  return (
    <nav className="bg-white shadow-md border-b-4" style={{ borderColor: '#CC2E20' }}>
      <div className="mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/"><img src={logo} alt="logo" width="70%" /></a>
        </div>
        {/* Menu */}
        <div className="hidden md:flex space-x-10">
          {['Home', 'About', 'Blog', 'Contact', 'Pricing'].map((item, index) => (
            <div key={index} className="relative">
              <a
                href={`/${item.toLowerCase().replace(' ', '')}`}
                className="text-gray-700 hover:text-[#CC2E20] font-semibold flex flex-col items-center"
                onClick={() => handleClick(item)}
              >
                {item}
                {/* <i
                  className={`fa-solid fa-caret-down transition-all duration-200 hidden ${
                    arrowState[item] ? '' : 'hidden'
                  }`}
                ></i> */}
              </a>
            </div>
          ))}
        </div>
        <button style={{ backgroundColor: '#CC2E20' }}>
          <div className="p-1 text-white font-semibold">Contact Us</div>
        </button>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
