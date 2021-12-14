import React from 'react'
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
export default function Header() {
    return (
        <>
            <header>
    <section className="topbar-area top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="logo-search">
                        <ul>
                            <li>
                                <div className="image-area">
                                    <Link to="/">
                                        <img src="images/logo.png" loading="lazy" alt=""/>
                                    </Link>
                                </div>
                            </li>
                            <li className="search-main">
                                <form action="" style={{marginBottom: 0 }}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="What are you looking for?"/>
                                        <button type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </li>
                            <li className="right-btns">
                                <ul>
                                    <li>
                                        <Link to="/cart"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
</svg><span
                                            className="badge">1</span></span><span className="text">Cart</span></Link></li>
                                    <li><Link to="#"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg><span
                                            className="badge">1</span></span><span className="text">Wishlist</span></Link></li>
                                    <li><Link to="#"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></span> <span
                                            className="text">Login &amp; Signup</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</header>

<section id="menu-area">
    <div className="navigation-wrap bg-light">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
  <ReactBootstrap.Navbar expand="lg">

                    {/* <nav className="navbar navbar-expand-lg navbar-light"> */}
  <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />

                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
  <ReactBootstrap.Navbar.Collapse id="navbarScroll">

                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                            <ul className="nav navbar-nav nav-pills nav-fill justify-content-center">
                                <li className="nav-item" style={{borderLeft:'none'}}>
                                    <Link className="nav-link" to="#">Home</Link>
                                </li>
                                <li className="nav-item megamenu">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Men
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="d-flex flex-lg-row flex-column">
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button"
                                       aria-haspopup="true" aria-expanded="false">Women
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>
                                    <div className="dropdown-menu">
                                        <h6 className="dropdown-header">Item</h6>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                    </div>
                                </li>
                                <li className="nav-item megamenu">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trend Collection
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                        <div className="d-flex flex-lg-row flex-column">
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                            <div className="mega-menu-content">
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <h6 className="dropdown-header">Item</h6>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                                <Link className="dropdown-item" to="#">Product Name</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button"
                                       aria-haspopup="true" aria-expanded="false">T-Shirts
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>
                                    <div className="dropdown-menu">
                                        <h6 className="dropdown-header">Item Name</h6>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Baby & Kids</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button"
                                       aria-haspopup="true" aria-expanded="false">Sports Wear
                                        <i className="fas fa-chevron-down"></i>
                                    </Link>
                                    <div className="dropdown-menu">
                                        <h6 className="dropdown-header">Item Name</h6>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                        <Link className="dropdown-item" to="#">Product Name</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Other Accessories</Link>
                                </li>
                            </ul>
                        </ReactBootstrap.Navbar.Collapse>
                    </ReactBootstrap.Navbar>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
