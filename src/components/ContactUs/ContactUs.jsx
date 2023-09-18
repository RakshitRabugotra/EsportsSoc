import "./ContactUs.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

function ContactUs() {
  return (
    <>
    <section className="newsletter" aria-label="newsletter" id="contact">
        <div className="container">
          
          <div className="newsletter-card">

            <h2 className="h2">
              Our <span className="span">Newsletter</span>
            </h2>

            <form action="" className="newsletter-form">

              <div className="input-wrapper skewBg">
                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required
                  className="email-field"/>

                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <button type="submit" className="btn newsletter-btn skewBg">
                <span className="span">Subscribe</span>

                <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
              </button>

            </form>

          </div>

        </div>
      </section>


      <footer className="footer">

      <div className="footer-top">
        <div className="container">

          <div className="footer-brand">

            <a href="#" className="logo">EsportsSoc | Hansraj College</a>

            <p className="footer-text">
              {/* TODO: change the text in footer */}
              Gamics marketplace the relase etras thats sheets continig passag.
            </p>

            <ul className="contact-list">

              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="location"></ion-icon>
                </div>

                <address className="item-text">
                  Address : Hansraj College, University of Delhi, Delhi.
                </address>
              </li>

              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="headset"></ion-icon>
                </div>

                <a href="tel:+919569764949" className="item-text">Phone : +91 956-9764949</a>
              </li>

              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="mail-open"></ion-icon>
                </div>

                <a href="mailto:esportssoc.hansraj@gmail.com" className="item-text">Email : esportssoc.hansraj@gmail.com</a>
              </li>

            </ul>

          </div>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Products</p>
            </li>

            <li>
              <a href="#" className="footer-link">Graphics (26)</a>
            </li>

            <li>
              <a href="#" className="footer-link">Backgrounds (11)</a>
            </li>

            <li>
              <a href="#" className="footer-link">Fonts (9)</a>
            </li>

            <li>
              <a href="#" className="footer-link">Music (3)</a>
            </li>

            <li>
              <a href="#" className="footer-link">Photography (3)</a>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Need Help?</p>
            </li>

            <li>
              <a href="#" className="footer-link">Terms & Conditions</a>
            </li>

            <li>
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" className="footer-link">Refund Policy</a>
            </li>

            <li>
              <a href="#" className="footer-link">Affiliate</a>
            </li>

            <li>
              <a href="#" className="footer-link">Use Cases</a>
            </li>

          </ul>

          <div className="footer-wrapper">

            <div className="social-wrapper">

              <p className="footer-list-title">Follow Us</p>

              <ul className="social-list">

                <li>
                  <a href="#" className="social-link" style={{backgroundColor: "#e80071"}}>
                    <InstagramIcon name="logo-instagram"/>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link" style={{backgroundColor: "#55acee"}}>
                    <TwitterIcon name="logo-twitter"/>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link" style={{backgroundColor: "#d71e18"}}>
                    <PinterestIcon name="logo-pinterest"/>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link" style={{backgroundColor: "#1565c0"}}>
                    <LinkedInIcon name="logo-linkedin"/>
                  </a>
                </li>

              </ul>

            </div>

            <div className="footer-newsletter">

              <p className="footer-list-title">Newsletter Sign Up</p>

              <form action="" className="footer-newsletter">
                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required
                  className="email-field"/>

                <button type="submit" className="footer-btn" aria-label="submit">
                  <ion-icon name="rocket"></ion-icon>
                </button>
              </form>

            </div>

          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">

          <p className="copyright">
            &copy; 2023 EsportsSoc. All Right Reserved by <a href="#" className="copyright-link">EsportsSoc | Hansraj College</a>
          </p>
        </div>
      </div>

    </footer>
    </>

  );
}

export default ContactUs;
