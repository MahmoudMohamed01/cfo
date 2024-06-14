import darkLogo from "../assets/logo-dark.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={darkLogo} alt="CFO FACTORY" />
              <ul className="social">
                <li>
                  <a href="#facebool.com">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#facebook.com">
                  <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <ul className ="links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/programs">Programs</NavLink>
              </li>

              <li>
                <NavLink to="/contact"> Contact us</NavLink>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="line">
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">
            7 Mosaddak ST. Dokki, 7 Seventh Floor, Giza. Eavpt
            </div>
            </div>
            <div className="line">
            <i class="fas fa-phone-volume fa-fw"></i>
            <div className="info">
            +20 115 070 6059
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
