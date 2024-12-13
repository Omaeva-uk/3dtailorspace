import { Link } from "react-router-dom";
import "./footer.css"


const Footer = () => {
  return (
    <div className="bg-[#F6F6FD] p-16 max-lg:p-8 mt-36 max-md:mt-16 relative overflow-hidden">
        <div className="flex justify-between max-sm:flex-col relative z-30">
            <div className="flex flex-col justify-center">
                <div className="w-44">
                    <img src="/assets/tailorspace-footer-logo.svg" alt="Tailor Space Logo" />
                </div>
                <p>Anything Into 3D.</p>
            </div>
            <div className="flex gap-10 max-sm:flex-col max-sm:mt-11">
                <ul>
                    <Link to=""><li>About Us</li></Link>
                    <Link to=""><li>Documentation</li></Link>                    
                </ul>
                <ul>
                    <Link to=""><li>X (Twitter)</li></Link>
                    <Link to=""><li>LinkedIn</li></Link>
                    <Link to=""><li>Instagram</li></Link>  
                </ul>
            </div>
        </div>
        <div className="flex justify-between items-center mt-36 max-sm:mt-11 max-sm:flex-col relative z-40">
            <div className="flex border-[1px] border-black gap-2 bg-[#E3E3E7] py-2 px-4 rounded-3xl">
                <img src="/assets/footer-star.svg" alt="AI powered system" />
                <p className="max-sm:text-xs text-sm">AI Powered System</p>
            </div>
            <p className="max-sm:mt-4 max-lg:max-w-[200px] flex flex-col text-center">© 3D Tailor Space. All rights reserved <span>Designed and developed by <Link to="https://www.omaeva.com/" className="text-[#800080] underline" target="_blank">Omeava Ltd.</Link> UK</span></p>
            <div className="flex gap-2 max-sm:mt-9 ">
                <Link to="/privacy-policy" className="underline max-sm:text-xs">Privacy Policy</Link>
                <Link to="" className="underline max-sm:text-xs">Terms of use</Link>
            </div>
        </div>
        <p className="footer-tailor-lg">Tailor</p>
        <p className="footer-space-lg">Space</p>
    </div>
  )
}

export default Footer;