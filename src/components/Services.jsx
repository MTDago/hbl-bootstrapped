import React from "react";

export default function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              What you can expect from us
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-fast-forward fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Fast Response Times</h4>
            <p className="text-muted">
              Our reputation demands that we be prompt and punctual to any
              customer, you'll be notified when one of our fleet has been
              dispatched to your location and given an estimated time of
              arrival.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-car fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Comfortable Transportation</h4>
            <p className="text-muted">
              All of our cars a impeccably serviced and detailed. We buy our
              cars from manufacturers with a reputation for comfort and
              efficiency.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-dollar fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Great Prices</h4>
            <p className="text-muted">
              Our prices have kept us in the front of our customers minds when
              it comes to recommending us to other people. We guarantee that we
              don't add a margin for marketing on top of our fares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
