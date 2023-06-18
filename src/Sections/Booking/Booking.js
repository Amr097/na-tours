import React from "react";

const Booking = () => {
  return (
    <>
      <section id="booking" className="section-booking">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">start booking now</h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    id="name"
                    className="form__input"
                    required
                    placeholder="Full name"
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    id="email"
                    className="form__input"
                    required
                    placeholder="Email address"
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>
                <div className="form__group">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      name="form-radio"
                      id="small"
                    />
                    <label htmlFor="small" className="form__radio-label">
                      Small tour group
                      <span className="form__radio-button"></span>
                    </label>
                  </div>
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      name="form-radio"
                      id="large"
                    />
                    <label htmlFor="large" className="form__radio-label">
                      Large tour group
                      <span className="form__radio-button"></span>
                    </label>
                  </div>
                </div>
                <div className="form__group">
                  <button className="btn btn--green u-margin-top-small">
                    Next Step &nbsp; &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
