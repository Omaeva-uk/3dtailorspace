import React, { useState } from "react";
import "./cta.css";


const Cta = ({ id }) => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0678196b-9893-427d-a938-07f25340e8ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      console.log("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className="cta" id={id}>
      <div className="relative">
        <picture className="flex justify-center">
          <source media='(max-width: 564px)' srcSet="/assets/tailorspace-cta-bg-mobile.png" />
          <source media='(min-width: 565px)' srcSet="/assets/tailorspace-cta-bg.png" />
          <img src="/assets/tailorspace-cta-bg.png" alt='hero' width="100%" />
        </picture>
        <h2 className="absolute cta-h2 font-bold text-[30px] leading-tight max-w-xl xl:max-w-3xl">The countdown has begun. Something incredible is on the horizon.</h2>
        <div className="absolute cta-form  ">
          <p className="font-medium">Don’t want to miss it? Join us!</p>
          <div className="bg-white py-2 px-4  rounded-2xl mt-2 -ml-2 flex items-center ">
            <form onSubmit={onSubmit}>
              <input type="text" className=" bg-transparent placeholder:text-xs xl:placeholder:text-[14px] outline-none" name="email-id" required placeholder="yourname@mail.com" />
              <button type="submit">
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>

            </form>
          </div>
        </div>
        <div className="absolute cta-info">
          <p>5 Bilsborrow Avenue , <br />
            Derby,<br />
            DE12BF.
          </p>
          <p>+44   079 1437 4474</p>
        </div>
      </div>
      
    </div>
  );
};

export default Cta;
