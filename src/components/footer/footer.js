import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
<footer>
    <footer id="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="footer-area-inner-content">
                        <div className="logo-area">
                            <Link to="index">
                                <img src="images/footer-logo.png" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ut non quo, eos hic
                            provident.
                            Itaque excepturi qui cum iure quis natus provident odio tempore earum.</p>
                        <ul className="social-links">
                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="footer-area-inner-content">
                        <h4>Useful Links</h4>
                        <ul className="quick-links">
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="about-us">About Us</Link></li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="faq">FAQ</Link>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Location</Link>
                            </li>
                           
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="contact-us">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="footer-area-inner-content">
                        <h4>Category</h4>
                        <ul className="quick-links">
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Men</Link></li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Woman</Link></li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Kids</Link></li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Best Saller</Link></li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">New Arrivals</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="footer-area-inner-content">
                        <h4>My Account</h4>
                        <ul className="quick-links">
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">My Account</Link></li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Discount</Link>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Returns</Link>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Orders History</Link>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right"></i>
                                <Link to="#">Order Tracking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 p-0">
                    <div className="footer-area-inner-content">
                        <h4>Contact us</h4>
                        <ul className="quick-links">
                            <li className="media">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="media-body">
                                    <Link to="#">Write Your address Here <br/>
                                        30 Demo Street
                                    </Link>
                                </div>
                            </li>
                            <li className="media">
                                <i className="far fa-envelope"></i>
                                <div className="media-body">
                                    <Link to="#">
                                        infoborafashion@gmail.com
                                    </Link>
                                </div>
                            </li>
                            <li className="media">
                                <i className="fas fa-mobile-alt"></i>
                                <div className="media-body">
                                    <Link to="#">+123 456 789
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="copy-right">
                              <p>© 2021 Powered by Bora Fashion/ All Rights Reserved
                              </p>
                          </div>
                      </div>
                      <div className="col-md-6 text-right">
                          <Link to="#"><img src="images/card-icon.png" loading="lazy" alt=""/></Link>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </footer>
</footer>

  
        </>
    )
}
