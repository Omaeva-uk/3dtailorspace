import "./cta.css";

const Cta = ({ id }) => {
  return (
    <div className="cta" id={id}>
      <div>
        <img src="/assets/tailorspace-cta-bg.png" alt="3d background" />
      </div>
    </div>
  );
};

export default Cta;
