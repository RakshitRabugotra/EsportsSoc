import './Navbar.css';
import "@fontsource/oxanium"; // Defaults to weight 400
import "@fontsource/oxanium/400.css"; // Specify weight
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Navbar() {

    return (
      <div>
      <header className="header">

      <div className="header-top">
        <div className="container">
  
          <div className="countdown-text">
            Exclusive Black Friday ! Offer <span className="span skewBg">10</span> Days
          </div>
  
          <div className="social-wrapper">
  
            <p className="social-title">Follow us on :</p>
  
            <ul className="social-list">
  
              <li className="social-link">
                  <InstagramIcon/>
              </li>
  
              <li className="social-link">
                  <TwitterIcon/>
              </li>
  
              <li className="social-link">
                  <PinterestIcon/>
              </li>
  
              <li className="social-link">
                  <LinkedInIcon/>
              </li>
  
            </ul>
  
          </div>
  
        </div>
      </div>
  
      <div className="header-bottom skewBg" data-header>
        <div className="container">
  
          <a href="#" className="logo">EsportsSoc</a>
  
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
  
              <li className="navbar-item">
                <a href="#home" className="navbar-link skewBg" data-nav-link>Home</a>
              </li>
  
              <li className="navbar-item">
                <a href="#live" className="navbar-link skewBg" data-nav-link>Live</a>
              </li>
  
              <li className="navbar-item">
                <a href="#features" className="navbar-link skewBg" data-nav-link>Features</a>
              </li>
  
              <li className="navbar-item">
                <a href="#shop" className="navbar-link skewBg" data-nav-link>Shop</a>
              </li>
  
              <li className="navbar-item">
                <a href="#blog" className="navbar-link skewBg" data-nav-link>Blog</a>
              </li>
  
              <li className="navbar-item">
                <a href="#" className="navbar-link skewBg" data-nav-link>Contact</a>
              </li>
  
            </ul>
          </nav>
  
          <div className="header-actions">
  
            <button className="cart-btn" aria-label="cart">
              <ion-icon name="cart"></ion-icon>
  
              <span className="cart-badge">0</span>
            </button>
  
            <button className="search-btn" aria-label="open search" data-search-toggler>
              <ion-icon name="search-outline"></ion-icon>
            </button>
  
            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
              <ion-icon name="menu-outline" className="menu"></ion-icon>
              <ion-icon name="close-outline" className="close"></ion-icon>
            </button>
  
          </div>
  
        </div>
      </div>
  
    </header>
  
  
  
  
  
    <div className="search-container" data-search-box>
  
      <div className="input-wrapper">
        <input type="search" name="search" aria-label="search" placeholder="Search here..." className="search-field"/>
  
        <button className="search-submit" aria-label="submit search" data-search-toggler>
          <ion-icon name="search-outline"></ion-icon>
        </button>
  
        <button className="search-close" aria-label="close search" data-search-toggler></button>
      </div>
  
    </div>
    </div>
  
  
  
  
    );

}

export default Navbar;