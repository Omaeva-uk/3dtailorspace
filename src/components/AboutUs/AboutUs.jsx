import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutUs.css";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = ({ id }) => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".paragraph p");
    paragraphs.forEach((p) => {
      p.innerHTML = p.textContent
        .split("")
        .map((char) => `<span class="line">${char}</span>`)
        .join("");
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".actual-section",
        scrub: 1,
        start: "top 60%",
        end: "bottom 60%",
        markers: false,
      },
    });

    tl.to(".line", {
      "--highlight-offset": "100%",
      stagger: 0.05,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="actual-section" id={id}>
      <div className="paragraph">
        <p>"Welcome to a realm where imagination transforms into reality. At 3D Tailor Space, we’re on the brink of unveiling something extraordinary. Stay with us, and prepare to witness innovation like never before. The future of design is just around the corner. Stay curious."</p>
      </div>
    </section>
  );
};

export default AboutUs;