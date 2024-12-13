import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileNav, setNobileNav] = useState(false);

  return (
    <nav className="flex max-lg:p-5 justify-between items-center relative">
      <Link to="/">
        <div className="w-14 md:w-20">
          <img
            src="/assets/tailorspace-nav-logo.svg"
            alt="Tailorspace logo"
            className="w-full"
          />
        </div>
      </Link>
      
      {/* Desktop menu */}
      <div className="hidden lg:block">
        <ul className=" flex justify-between items-center navItems-wrapper ">
        
          <li className="home-active">Home</li>
          <li>About Us</li>
          <li>Join Us</li>
        </ul>
      </div>

      {/* Mobile menu */}
      {mobileNav && (
        <div className="lg:hidden mobile-menu">
          <ul className="flex flex-col items-end gap-4">
            <li
              onClick={() => {
                setNobileNav((prev) => !prev);
              }}
              className="border-2 px-2 py-1 border-[#70C1E3]"
            >
              <i className="fa-solid fa-x "></i>
            </li>
            <li>Home</li>
            <li>About Us</li>
            <li>Join Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}

      <div className="max-lg:hidden">
        <button class="btn ">
          Contact Us{" "}
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>

      <div
        className="lg:hidden"
        onClick={() => {
          setNobileNav((prev) => !prev);
        }}
      >
        <i className="text-[20px] fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default NavBar;
