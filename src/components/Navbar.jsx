import "../styles/navbar.css";
import swlogo from "../images/swlogo.jpg";
import {NavLink} from 'react-router-dom';


export const Navbar = () => { 
  return (
    <>
      <div className="cont">
        <div></div>
        <img className="logo" src={swlogo} alt="logo" />
        <div className="enlaces">
        <NavLink to="/login" className="nav-link" activeclassname="active">LOG IN</NavLink>
        <NavLink to="/register" className="nav-link" activeclassname="active">REGISTER</NavLink>
        </div>
      </div>
      <div className="nav-main">
        <NavLink to="/" className="nav-home" activeclassname="active">HOME</NavLink>
        <NavLink to="/section" className="nav-starships" activeclassname="active" >STARSHIPS</NavLink>
      </div>
    </>
  );
};
