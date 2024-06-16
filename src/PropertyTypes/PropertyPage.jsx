import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useWishlist } from "../WishlistContext";

const PropertyPage = () => {
  const { pid } = useParams();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/${pid}`);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching property. Please try again.");
        setLoading(false);
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [pid]);

  const handleWishlistClick = (property) => {
    if (isInWishlist(property.pid)) {
      removeFromWishlist(property.pid);
    } else {
      addToWishlist(property);
    }
  };

  return (
    <section className="vh-100">
      <div className="container h-100">
        {loading && <p>Loading property...</p>}
        {error && <p className="text-danger">{error}</p>}
        {property && (
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6" style={{ width: 800 }} key={property.pid}>
              <div className="row property-item rounded overflow-hidden">
                <div className="col-6 position-relative overflow-hidden">
                  <img className="img-fluid" src={property.imageLink} alt="not available" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{property.status}</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{property.type}</div>
                </div>
                <div className="col-6 p-4 pb-0">
                  <h5 className="text-primary mb-3">₹{property.price}</h5>
                  <a className="d-block h5 mb-2" href={property.link}>{property.pname}</a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {property.address}
                  </p>
                  <button className={`btn btn-${isInWishlist(property.pid) ? 'outline-danger' : 'outline-primary'} btn-sm`} onClick={() => handleWishlistClick(property)}>
                    <i className="fa fa-heart me-2"></i>
                    {isInWishlist(property.pid) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  </button>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2"></i>
                    {property.size} Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2"></i>
                    {property.bedrooms} Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2"></i>
                    {property.bathrooms} Bath
                  </small>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyPage;
