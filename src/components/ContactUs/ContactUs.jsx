import React from 'react'; // Import React

function ContactUs() {
  return (
    <div>
    <div className='container-contact'>
      <section className="newsletter" aria-label="newsletter"> {/* Use "className" instead of "class" */}
        <div className="container">

          <div className="newsletter-card">

            <h2 className="h2">
              Our <span className="span">Newsletter</span>
            </h2>

            <form action="#" className="newsletter-form"> {/* Specify a valid "action" attribute or use "#" for testing */}

              <div className="input-wrapper skewBg">
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder="Enter your email..."
                  required
                  className="email-field"
                />

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

              <a href="#" className="logo">Gamics</a>

              <p className="footer-text">
                Gamics marketplace the release extras that's sheets containing passage.
              </p>

              <ul className="contact-list">

                <li className="contact-item">
                  <div className="contact-icon">
                    <ion-icon name="location"></ion-icon>
                  </div>

                  <address className="item-text">
                    Address : PO Box W75 Street lan West new queens
                  </address>
                </li>

                <li className="contact-item">
                  <div className="contact-icon">
                    <ion-icon name="headset"></ion-icon>
                  </div>

                  <a href="tel:+241245654235" className="item-text">Phone : +24 1245 654 235</a>
                </li>

                <li className="contact-item">
                  <div className="contact-icon">
                    <ion-icon name="mail-open"></ion-icon>
                  </div>

                  <a href="mailto:info@example.com" className="item-text">Email : info@example.com</a>
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
                    <a href="#" className="social-link" style={{ backgroundColor: '#3b5998' }}>
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link" style={{ backgroundColor: '#55acee' }}>
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link" style={{ backgroundColor: '#d71e18' }}>
                      <ion-icon name="logo-pinterest"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link" style={{ backgroundColor: '#1565c0' }}>
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                </ul>

              </div>

              <div className="footer-newsletter">

                <p className="footer-list-title">Newsletter Sign Up</p>

                <form action="#" className="footer-newsletter-form"> {/* Specify a valid "action" attribute or use "#" for testing */}
                  <input
                    type="email"
                    name="email_address"
                    aria-label="email"
                    placeholder="Enter your email"
                    required
                    className="email-field"
                  />

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
              &copy; 2022 Gamics. All Right Reserved by <a href="#" className="copyright-link">codewithsadee</a>
            </p>

            <img src="./assets/images/footer-bottom-img.png" width="340" height="21" loading="lazy" alt=""
              className="footer-bottom-img" />

          </div>
        </div>

      </footer>

    </div>
    </div>
  );
}

export default ContactUs;
