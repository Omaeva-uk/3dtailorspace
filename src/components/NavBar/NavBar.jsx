import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="flex max-lg:p-5 justify-between items-center relative">
           <Link>
             <div className="w-14 md:w-20">
               <img
                 src="/assets/tailorspace-nav-logo.svg"
                 alt="Tailorspace logo"
                 className="w-full"
               />
             </div>
           </Link>
   
         {/* Desktop  */}
         <div className="hidden lg:block">
           <ul className="flex justify-between items-center navItems-wrapper">
             {/* <li>
               <Link to="/" onClick={(e) => handleNavigation(e, "hero-section")}>
                 Home
               </Link>
             </li>
             <Link to="/" onClick={(e) => handleNavigation(e, "about-us")}>
               About Us
             </Link>
             <Link to="/" onClick={(e) => handleNavigation(e, "join-us")}>
               Join Us
             </Link> */}
             <HashLink to="/#home" onClick={(e) => setactiveNavItem(e.target)}><li className="hover:text-white hover:font-bold">Home</li></HashLink>
             <HashLink to="/#about-us" onClick={(e) => setactiveNavItem(e.target)}><li className="hover:text-white hover:font-bold">About Us</li></HashLink>
             <HashLink to="/#join-us" onClick={(e) => setactiveNavItem(e.target)}><li className="hover:text-white hover:font-bold">Join Us</li></HashLink>
           </ul>
         </div>
   
         {/* Mobile */}
         {mobileNav && (
           <div className="lg:hidden mobile-menu">
             <ul className="flex flex-col items-end gap-4">
               <li
                 onClick={() => setMobileNav((prev) => !prev)}
                 className="border-2 px-2 py-1 border-[#70C1E3]"
               >
                 <i className="fa-solid fa-x"></i>
               </li>
               <HashLink to="/#home" ><li >Home</li></HashLink>
             <HashLink to="/#about-us" ><li >About Us</li></HashLink>
             <HashLink to="/#join-us" ><li >Join Us</li></HashLink>
             <HashLink to="/#contact-us"><li>Contact Us</li></HashLink>
               
               
             </ul>
           </div>
         )}
   
         <div className="max-lg:hidden">
           <HashLink to="/#join-us" >
             <button className="btn">
               Contact Us{" "}
               <span>
                 <i className="fa-solid fa-arrow-right"></i>
               </span>
             </button>
           </HashLink>
          
         </div>
   
         <div className="lg:hidden" onClick={() => setMobileNav((prev) => !prev)}>
           <i className="text-[20px] fa-solid fa-bars"></i>
         </div>
       </nav>
     );
   };
   

export default NavBar;
