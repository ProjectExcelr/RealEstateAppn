import React from 'react';

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
              <h1 className="mb-3">#1 Place To Find The Perfect Property</h1>
              <p>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            </div>
          </div>
          <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              <li className="nav-item me-2">
                <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-1">Buy</a>
              </li>
              <li className="nav-item me-2">
                <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Sell</a>
              </li>
              <li className="nav-item me-0">
                <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Rent</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              {/* Add your Buy tab content here */}
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
              {/* Add your Sell tab content here */}
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
              {/* Add your Rent tab content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
