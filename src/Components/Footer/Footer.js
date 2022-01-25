import React from 'react'
import './Footer.css'


const Footer = () => (
  <div className="footer-dark">
  <footer>
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                      <li><a href="#">Web design</a></li>
                      <li><a href="#">Development</a></li>
                      <li><a href="#">Hosting</a></li>
                  </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                      <li><a href="#">Company</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Careers</a></li>
                  </ul>
              </div>
              <div className="col-md-6 item text">
                  <h3>ST Medical</h3>
                  <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
              </div>
              <div className="col item social">
                <a href="#"> <i class="fab fa-facebook-f icon"></i></a>
                <a href="#"><i class="fab fa-twitter icon"></i></a>
                <a href="#"><i class="fab fa-linkedin-in icon"></i></a>
                <a href="#"><i class="fab fa-google-plus-g icon"></i></a>
                </div>
          </div>
          <p className="copyright">Stratton Terrace Marketing © 2022</p>
      </div>
  </footer>
</div>
  );

export default Footer
