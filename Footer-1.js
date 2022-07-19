import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad  align-correct">
                  <h4>SERVICE</h4>
                  <ul class="list-unstyled" />
                  <li>
                    <a href="/">Join US</a>
                  </li>
                  <li>
                    <a href="/">Program</a>
                  </li>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad ">
                  <h4>CONTACT US</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a>
                        <i class="fa fa-location-arrow"></i> H.No. 1951, W.N.4,
                        Khaperkheda, Saoner, Nagpur{" "}
                      </a>
                    </li>
                    <li>
                      <a>
                        <i class="fa fa-phone"></i> 7020044091
                        <br />
                      </a>
                      <a>
                        <i class="fa fa fa-envelope"></i>
                        info@suvidhafoundationedutech.org{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad  align-correct">
                  <h4>MORE</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Code Of Ethics</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <h4>Follow Us</h4>
                <ul class="social-network social-circle">
                  <li>
                    <a href="/" class="icoFacebook" title="Facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" class="icoLinkedin" title="Linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" class="icoInstagram" title="Instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 ">
                {/* <hr
                  style={{
                    height: "2px",
                    borderWidth: "100%",
                    color: "gray",
                    backgroundColor: "gray",
                  }}
                /> */}
                <p class="text-center">
                  &copy; powered by Suvidha Mahila Mandal registered
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
