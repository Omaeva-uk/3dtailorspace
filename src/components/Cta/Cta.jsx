import "./cta.css";

const Cta = ({ id }) => {
  return (
    <div className="cta" id={id}>
      <div className="relative">
        <picture className="flex justify-center">
          <source media='(max-width: 564px)' srcSet="/assets/tailorspace-cta-bg-mobile.png" />
          <source media='(min-width: 565px)' srcSet="/assets/tailorspace-cta-bg.png" />
          <img src="/assets/tailorspace-cta-bg.png" alt='hero' />
        </picture>
        <h2 className="absolute cta-h2 font-bold text-[30px] leading-tight max-w-2xl">The countdown has begun. Something incredible is on the horizon.</h2>
        <div className="absolute cta-form  ">
          <p className="font-medium">Don’t want to miss it? Join us!</p>
          <div className="bg-white py-2 px-4  rounded-2xl mt-2 -ml-2 flex items-center ">
            <input className=" bg-transparent placeholder:text-xs outline-none"  type="text" placeholder="yourname@mail.com" />
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="absolute cta-info">
          <p> 5 Bilsborrow Avenue ,  <br />
            Derby ,<br />
            DE12BF.
          </p>
          <p>+44   079 1437 4474</p>
        </div>
      </div>
      
    </div>
  );
};

export default Cta;
