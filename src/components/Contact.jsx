import React from "react";

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Schedule our services for an upcoming event!
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message *"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    className="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
