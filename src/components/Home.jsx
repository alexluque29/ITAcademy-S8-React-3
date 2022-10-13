import { Link } from "react-router-dom";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
      <div className="cont-home">
        <div className="home-img"></div>
        <Link to="/section">
          <div className="box-2">
            <div className="btn btn-two p-0">
              <span>ENTER</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
