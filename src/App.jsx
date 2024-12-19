import { AboutUs, Cta, Footer, HeroSection } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivacyPolicy } from "./pages";
import CookieConsent from "react-cookie-consent";

const App = () => {
  // const handleScroll = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div>
      <CookieConsent
          location="bottom"
          enableDeclineButton
          declineButtonText="Decline"
          declineButtonStyle={{backgroundColor: "#E92E31"}}
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "15px", backgroundColor: "#77C1E0", padding: "7px 10px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
  
      </CookieConsent>
        <main className="p-2 md:p-4 lg:p-8">
        
      {/* <header>
        <NavBar />
      </header> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection id="hero-section" />
                <AboutUs id="about-us" />
                <Cta id="join-us" />
              </>
            }
          />
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<Cta />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
        </Routes>
        
        
        <Footer />
    
    </main>
        
          
        
    </div>
    
    
  );
};

export default App;
