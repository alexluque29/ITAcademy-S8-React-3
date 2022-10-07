
import { Link } from "react-router-dom";
// import storm2 from "../images/storm2.jpg";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
     <div className="container">
          <Link to="/section">
            <div class="box-2">
              <div class="btn btn-two p-0">
                <span>ENTER</span>
              </div>
            </div>
          </Link>
          {/* <div className="stormImage">
            <img src={storm2} className="stormImage" alt="storm" />
          </div> */}
        </div>
    </>
  )
}
