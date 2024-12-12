import { AboutUs, Cta, HeroSection } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Router>
      {/* <header>
        <NavBar />
      </header> */}
      <main className="p-2 md:p-4 lg:p-8">
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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<Cta />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
