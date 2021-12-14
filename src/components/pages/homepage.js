import React from 'react'
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
export default function Homepage() {
    return (
        <div>
            {/* <!---------banner-area-start----------> */}
<div className="main-banner-sec">
<ReactBootstrap.Carousel id="main-slider" data-ride="carousel" nextLabel={null} prevLabel={null}>
    {/* <div id="main-slider" className="carousel slide" data-ride="carousel"> */}
        {/* <div className="carousel-inner">
            <div className="carousel-item">
                <img src="images/banner-image-1.jpg" loading="lazy" alt=""/>
                <div className="banner-content">
                    <h1>
                        Trend Fashion collection
                    </h1>
                    <span></span>
                    <p>
                        50% off in all products
                    </p>
                    <div className="button-area">
                        <ul>
                            <li>
                                <Link to="#" className="cstm-btn">shop now
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="images/banner-2.jpg" loading="lazy" alt=""/>
                <div className="banner-content">
                    <h1>
                        Woman Fashion
                    </h1>
                    <span></span>
                    <p>
                        Up to 70% off selected Product
                    </p>
                    <div className="button-area">
                        <ul>
                            <li>
                                <Link to="#" className="cstm-btn">shop now
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="carousel-item active">
                <img src="images/banner-image-2.jpg" loading="lazy" alt=""/>
                <div className="banner-content">
                    <h1>
                        Summer Sale
                    </h1>
                    <span></span>
                    <p>
                        Taking your Viewing Experience to Next Level
                    </p>
                    <div className="button-area">
                        <ul>
                            <li>
                                <Link to="#" className="cstm-btn">shop now
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> */}
         <ReactBootstrap.Carousel.Item>
         <img src="images/banner-image-1.jpg" loading="lazy" alt=""/>
         {/* <ReactBootstrap.Carousel.Caption> */}
         <div className="banner-content">
                    <h1>
                        Summer Sale
                    </h1>
                    <span></span>
                    <p>
                        Taking your Viewing Experience to Next Level
                    </p>
                    <div className="button-area">
                        <ul>
                            <li>
                                <Link to="#" className="cstm-btn">shop now
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
        {/* </ReactBootstrap.Carousel.Caption> */}
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
        <img src="images/banner-2.jpg" loading="lazy" alt=""/>
                <div className="banner-content">
                    <h1>
                        Woman Fashion
                    </h1>
                    <span></span>
                    <p>
                        Up to 70% off selected Product
                    </p>
                    <div className="button-area">
                        <ul>
                            <li>
                                <Link to="#" className="cstm-btn">shop now
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        {/* </ReactBootstrap.Carousel.Caption> */}
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
        <img src="images/banner-image-2.jpg" loading="lazy" alt=""/>
                <div className="banner-content">
                    <h1>
                        Summer Sale
                    </h1>
                    <span></span>
                    <p>
                        Taking your Viewing Experience to Next Level
                    </p>
                    <div className="button-area">
                        <ul>
                            <li>
                                <Link to="#" className="cstm-btn">shop now
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        {/* </ReactBootstrap.Carousel.Caption> */}
        </ReactBootstrap.Carousel.Item>
        {/* <Link className="carousel-control-prev" to="#main-slider" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </Link>
        <Link className="carousel-control-next" to="#main-slider" data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </Link> */}
    {/* </div> */}
</ReactBootstrap.Carousel>

</div>
{/* <!---------banner-area-end----------> */}
{/* <!---------featured-area-start----------> */}
<section className="featured-area section-2">
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-3">
                <div className="feature">
                    <div className="icon text-primary">
                        <img src="images/feature-icon-2.png" loading="lazy" alt=""/>
                    </div>
                    <div className="content">
                        <h5 className="title">Free Shipping</h5>
                        <p>Free shipping on all order</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="feature">
                    <div className="icon text-primary">
                        <img src="images/feature-icon-3.png" loading="lazy" alt=""/>
                    </div>
                    <div className="content">
                        <h5 className="title">Support 24/7</h5>
                        <p>Support 24 hours a day</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="feature">
                    <div className="icon text-primary">
                        <img src="images/feature-icon-4.png" loading="lazy" alt=""/>
                    </div>
                    <div className="content">
                        <h5 className="title">Money Return</h5>
                        <p>Back guarantee under 5 days</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="feature">
                    <div className="icon text-primary">
                        <img src="images/feature-icon-5.png" loading="lazy" alt=""/>
                    </div>
                    <div className="content">
                        <h5 className="title">Order Discount</h5>
                        <p>Onevery order over $150</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!---------featured-area-end----------> */}
{/* <!---------product-area-start----------> */}
<div className="product-list section-2">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="heading">
                    <h1>deals of the day</h1>
                </div>
            </div>
            <div className="col-md-12">
                <div className="product-area owl-carousel owl-theme">
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-1.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-2.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-3.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-4.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-5.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-1.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-2.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-3.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-4.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-5.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <Link to="product" className="cstm-btn">view all
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
</div>
{/* <!---------product-area-end----------> */}

{/* <!---------featured-inner-area-start----------> */}
<section className="featured-inner section-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="featured-banner">
                    <Link to="#">
                        <img src="images/featured-banner-1.jpg" loading="lazy" alt=""/>
                    </Link>
                    <div className="banne_info">
                        <h6>10% Off</h6>
                        <h4>New Arrival</h4>
                        <Link to="#">Shop now</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="featured-banner">
                    <Link to="#">
                        <img src="images/banner-featured-2.jpg" loading="lazy" alt=""/>
                    </Link>
                    <div className="banne_info">
                        <h6>15% Off</h6>
                        <h4>Men's Fashion</h4>
                        <Link to="#">Shop now</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="featured-banner">
                    <Link to="#">
                        <img src="images/featured-banner-3.jpg" loading="lazy" alt=""/>
                    </Link>
                    <div className="banne_info">
                        <h6>23% Off</h6>
                        <h4>Kids Fashion</h4>
                        <Link to="#">Shop now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!---------featured-inner-area-end----------> */}

{/* <!---------category-month-area-start----------> */}
<section className="category-area section-2">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="heading">
                    <h1>Categories Of The Month</h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="category owl-carousel owl-theme">
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-1.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    woolen sweater
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-2.jpg" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    Basic Jogging Shorts
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-3.jpg" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    Make Thing Happen T-Shirt
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-4.jpg" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    Red & Black check shirt
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-5.jpg" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    Blue Dress For Woman
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-6.jpg" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    light blue Shirt
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-7.jpg" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    Lether Gray Tuxedo
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-1.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    woolen sweater
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="category-info">
                        <div className="pic-area">
                            <Link to="#">
                                <img src="images/category-2.jpg" loading="lazy" alt=""/>
                            </Link>
                        </div>
                        <div className="content-area">
                            <h2>
                                <Link to="#">
                                    Basic Jogging Shorts
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!---------category-month-area-end----------> */}

{/* <!---------featured-inner-area-start----------> */}
<section className="featured-inner section-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div className="featured-banner">
                    <Link to="#">
                        <img src="images/featured-banner-4.jpg" loading="lazy" alt=""/>
                    </Link>
                    <div className="banne_info">
                        <h6>10% Off</h6>
                        <h4>New Arrival</h4>
                        <Link to="#">Shop now</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="featured-banner">
                    <Link to="#">
                        <img src="images/banner-featured-2.jpg" loading="lazy" alt=""/>
                    </Link>
                    <div className="banne_info">
                        <h6>15% Off</h6>
                        <h4>Men's Fashion</h4>
                        <Link to="#">Shop now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!---------featured-inner-area-end----------> */}

{/* <!---------product-area-start----------> */}
<div className="product-list section-2">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="heading">
                    <h1>New Arrivals</h1>
                </div>
            </div>
            <div className="col-md-12">
                <div className="product-area owl-carousel owl-theme">
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-1.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-2.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-3.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-4.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-5.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-1.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-2.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-3.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-4.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-5.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="product-details" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <Link to="product" className="cstm-btn">view all
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
</div>
{/* <!---------product-area-end----------> */}

{/* <!---------single-banner-area-start----------> */}
<div className="section-one bg_light_blue2 pb-0 pt-md-0">
    <div className="container">
        <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6 offset-md-1">
                <div className="medium_divider d-none d-md-block clearfix"></div>
                <div className="trand_banner_text text-center text-md-left">
                    <div className="heading_s1 mb-3">
                        <span className="sub_heading">New season trends!</span>
                        <h2>Best Summer Collection</h2>
                    </div>
                    <h5 className="mb-4">Sale Get up to 50% Off</h5>
                    <Link to="#" className="cstm-btn">shop now
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                    </Link>
                </div>
                <div className="medium_divider clearfix"></div>
            </div>
            <div className="col-md-5">
                <div className="text-center trading_img">
                    <img src="images/trending-pic.png" loading="lazy" alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!---------single-banner-area-end----------> */}

{/* <!---------product-area-start----------> */}
<div className="product-list section-2">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="heading">
                    <h1>Special Offer</h1>
                </div>
            </div>
            <div className="col-md-12">
                <div className="product-area owl-carousel owl-theme">
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-1.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-2.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-3.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-4.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-5.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-1.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-2.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-3.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-4.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="add-area">
                            <img src="images/product-pic-5.jpg" className="img-fluid" loading="lazy" alt=""/>
                            <span className="save">Save 25%</span>
                            <div className="icons">
                                <ul>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Wishlist"><i className="fas fa-heart"></i></Link></li>
                                    <li><Link to="#" data-toggle="tooltip" data-placement="Top" title="Search"><i className="fas fa-search"></i></Link></li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="rating">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                                <span>Product Category</span>
                                <h5><Link to="#" tabIndex="0">Product Title Here</Link></h5>
                                <h6>$ 250.00 <span>₹ 300.00</span></h6>
                                <h4>
                                    sold by:
                                    john store
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <Link to="#" className="cstm-btn">view all
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
</div>
{/* <!---------product-area-end----------> */}

{/* <!---------big-banner-area-start----------> */}
<section className="big-banner">
    <div className="container">
        <div className="pic-area">
            <Link to="#">
                <img src="images/big-banner.jpg" loading="lazy" alt=""/>
            </Link>
        </div>
    </div>
</section>
{/* <!---------big-banner-area-end----------> */}

{/* <!---------popular-brand-area-start----------> */}
<section className="brand-area section-2">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="heading">
                    <h1>Popular Brand</h1>
                </div>
            </div>
        </div>
        <div className="owl-carousel owl-theme" id="partner-slide">
            <div className="item">
                <img src="images/brand-logo1.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
            <div className="item">
                <img src="images/brand-logo2.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
            <div className="item">
                <img src="images/brand-logo3.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
            <div className="item">
                <img src="images/brand-logo4.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
            <div className="item">
                <img src="images/brand-logo5.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
            <div className="item">
                <img src="images/brand-logo1.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
            <div className="item">
                <img src="images/brand-logo2.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
            <div className="item">
                <img src="images/brand-logo3.png" loading="lazy" className="img-responsive" alt=""/>
            </div>
        </div>
    </div>
</section>
{/* <!---------popular-brand-area-end----------> */}

{/* <!---------subscribe-area-start----------> */}
<section id="subscribe-area">
    <div className="container">
        <div className="total-area">
            <div className="inner-total-area">
                <img src="images/subscribe-img.png"/>
                <div className="heading">
                    <h1>Sign up to Newsletter</h1>
                </div>
                <div className="subscribr-text-area">
                    <p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</p>
                </div>
                <form action="#" className="my-form">
                    <div className="newsletter__box">
                        <input type="email" className="form-control" placeholder="Enter your e-mail"/>
                        <button>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
{/* <!---------subscribe-area-end----------> */}

        </div>
    )
}
