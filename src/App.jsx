import { AboutUs, Cta, HeroSection, NavBar } from "./components";

const App = () => {
  return (
    <main className="p-2 md:p-4 lg:p-8">
      <section className="">
        <HeroSection />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Cta />
      </section>

    </main>
    
  )
}

export default App;