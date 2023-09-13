import "./Navbar.css";
import "@fontsource/oxanium"; // Defaults to weight 400
import "@fontsource/oxanium/400.css"; // Specify weight
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="countdown-text">
            Exclusive Black Friday ! Offer{" "}
            <span className="span skewBg">10</span> Days
          </div>

          <div className="social-wrapper">
            <p className="social-title">Follow us on :</p>

            <ul className="social-list">
              <li className="social-link">
                <InstagramIcon />
              </li>

              <li className="social-link">
                <TwitterIcon />
              </li>

              <li className="social-link">
                <PinterestIcon />
              </li>

              <li className="social-link">
                <LinkedInIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-bottom skewBg" data-header>
        <div className="container">
          <a href="#" className="logo">
            EsportsSoc
          </a>

          <nav className={`navbar ${isActive && "active"}`} data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a
                  href="#gallery"
                  className="navbar-link skewBg"
                  data-nav-link
                >
                  Gallery
                </a>
              </li>

              <li className="navbar-item">
                <a
                  href="#features"
                  className="navbar-link skewBg"
                  data-nav-link
                >
                  Events
                </a>
              </li>

              <li className="navbar-item">
                <a href="#blog" className="navbar-link skewBg" data-nav-link>
                  Blog
                </a>
              </li>

              <li className="navbar-item">
                <a href="#contact" className="navbar-link skewBg" data-nav-link>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className={`nav-toggle-btn ${isActive && "active"}`}
              aria-label="toggle menu"
              data-nav-toggler
            >
              <MenuIcon
                name="menu-outline"
                onClick={() => {
                  setIsActive(true);
                }}
                className="menu"
              />
              <CloseIcon
                name="close-outline"
                onClick={() => {
                  setIsActive(false);
                }}
                className="close"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
