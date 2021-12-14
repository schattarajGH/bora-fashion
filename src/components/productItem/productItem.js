import React from 'react'
import {Link} from 'react-router-dom';
export default function ProductItem(props) {
    return (
<>
                 <div className="item">
                        <div className="add-area">
                            <img src={props.img} className="img-fluid" loading="lazy" alt=""/>
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
        </>
    )
}
