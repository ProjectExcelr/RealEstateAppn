import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import { useWishlist } from "./WishlistContext";

const UserWishlist=()=>{

    const {wishlist,addToWishlist,removeFromWishlist,clearWishlist}=useWishlist();
    const navigate=useNavigate();

    return(<>
     <div className="container">
        <div className="d-flex flex-column align-items-center">
            <h2>Properties Liked By you</h2>
            {wishlist.length===0?
            (<p>Your wishlist is Empty</p>):
            (<div>
                {wishlist.map((wishlistItem,index)=>{
                    const { product, count } = wishlistItem;
                    const { pid, pname, price, imageLink,status,type,address,size,bedrooms,bathrooms} = product;
                    return(<>
                            <div className="row d-flex justify-content-center" >
                                <div className="col-lg-4 col-md-6" style={{width:800}} key={pid}>
                                <div className="row property-item rounded overflow-hidden">
                                    <div className="col-6 position-relative overflow-hidden">
                                        <img className="img-fluid" src={imageLink} alt="not available" style={{ objectFit: 'cover', height: '100%', width: '100%' }}/>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        {status}
                                    </div>
                                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        {type}
                                    </div>
                                    </div>
                                    <div className="col-6 p-4 pb-0">
                                    <h5 className="text-primary mb-3">₹{price}</h5>
                                    <a className="d-block h5 mb-2">
                                        {pname}
                                    </a>
                                    <p>
                                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                        {address}
                                    </p>
                                    <button className="btn btn-outline-danger btn-sm" onClick={()=>removeFromWishlist(pid)}>
                                        Remove
                                    </button>
                                    </div>
                                    <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-ruler-combined text-primary me-2"></i>
                                        {size} Sqft
                                    </small>
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-bed text-primary me-2"></i>
                                        {bedrooms} Bed
                                    </small>
                                    <small className="flex-fill text-center py-2">
                                        <i className="fa fa-bath text-primary me-2"></i>
                                        {bathrooms} Bath
                                    </small>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </>)
                })}
            </div>)}
        </div>
        </div>
    </>)
}
export default UserWishlist;