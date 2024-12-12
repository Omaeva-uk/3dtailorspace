import NavBar from "../NavBar/NavBar";
import "./herosection.css";

const HeroSection = () => {
  return (
    <div className="hero-bg relative h-[100vh] w-full p-2 sm:p-4 lg:p-7 ">
        <header>
            <NavBar />
        </header>
        <div className="mt-12 lg:mt-16 flex flex-col items-center">
            <h1 className="flex max-md:flex-col justify-center items-center text-[54px] lg:text-[84px] font-semibold text-white ">Anything <span className="max-sm:w-[60px]"><img src="/assets/h1-icon.svg" alt="flash icon" /></span> Into 3D</h1>
            <p className="text-center mt-4 max-w-md text-white">Transform your ideas into stunning 3D models with our cutting-edge technology. Bring anything to life in 3D and unleash your creativity.</p>

        </div>
    </div>
  )
}

export default HeroSection;