import "../styles/header.css";
import swlogo from "../images/swlogo.svg";

export const Header = () => {
  return (
    <>
      <div className="cont-logo">
        <img className="logo"  src={swlogo} alt="SWLogo" />
      </div>
    </>
  );
};
