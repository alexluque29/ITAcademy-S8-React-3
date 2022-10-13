import swlogo from "../images/swlogo.jpg";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="cont-nav">
        <div></div>
        <div className="logo">
          <img src={swlogo} className="image" alt="logo" />
        </div>
        <div className="enlaces">
          <NavLink to="/login" className="nav-login" activeclassname="active">
            LOG IN
          </NavLink>
          <NavLink
            to="/register"
            className="nav-regis"
            activeclassname="active"
          >
            REGISTER
          </NavLink>
        </div>
      </div>
      <div className="cont-barra">
        <NavLink to="/" className="nav-home" activeclassname="active">
          HOME
        </NavLink>
        <NavLink
          to="/section"
          className="nav-starships"
          activeclassname="active"
        >
          STARSHIPS
        </NavLink>
      </div>
    </>
  );
};
