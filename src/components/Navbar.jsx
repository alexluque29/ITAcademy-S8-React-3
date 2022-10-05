import "../styles/navbar.css";
import swlogo from "../images/swlogo.jpg";
import {NavLink} from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
      <div className="cont-logo">
        <img className="logo" src={swlogo} alt="logo" />
      </div>
      <div className="nav-main">
        <NavLink to="/" className="nav-home" activeclassname='active'>HOME</NavLink>
        <NavLink to="/section" className="nav-starships" activeclassname='active'>STARSHIPS</NavLink>
      </div>
    </>
  );
};
