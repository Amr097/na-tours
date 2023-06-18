import React from "react";
import PopupBooking from "@/Partials/PopupBooking/PopupBooking";
const Tours = () => {
  return (
    <>
      <section id="tours" className="section-tours">
        <h2 className="heading-secondary u-margin-bottom-medium">
          most popular tours
        </h2>
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1"></div>
                <h4 className="card__heading">
                  {" "}
                  <span className="card__heading-span card__heading-span--1">
                    the sea explorer
                  </span>{" "}
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                  <div className="card__responsive card__responsive--1">
                    <p className="card__price-only u-margin-top-medium">only</p>
                    <p className="card__price-value">$297</p>
                    <a
                      href="#popup"
                      className="btn btn--white u-margin-top-small"
                    >
                      book now!
                    </a>
                  </div>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">$297</p>
                  <a
                    href="#popup"
                    className="btn btn--white card__side--back--btn"
                  >
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2"></div>
                <h4 className="card__heading">
                  {" "}
                  <span className="card__heading-span card__heading-span--2">
                    the forest hiker
                  </span>{" "}
                </h4>
                <div className="card__details">
                  <ul>
                    <li>7 day tour</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                  <div className="card__responsive card__responsive--2">
                    <p className="card__price-only u-margin-top-medium">only</p>
                    <p className="card__price-value">$497</p>
                    <a
                      href="#popup"
                      className="btn btn--white u-margin-top-small"
                    >
                      book now!
                    </a>
                  </div>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">$497</p>
                  <a
                    href="#popup"
                    className="btn btn--white card__side--back--btn"
                  >
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3"></div>
                <h4 className="card__heading">
                  {" "}
                  <span className="card__heading-span card__heading-span--3">
                    the snow adeventurer
                  </span>{" "}
                </h4>
                <div className="card__details">
                  <ul>
                    <li>5 day tour</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                  <div className="card__responsive card__responsive--3">
                    <p className="card__price-only u-margin-top-medium">only</p>
                    <p className="card__price-value">$897</p>
                    <a
                      href="#popup"
                      className="btn btn--white u-margin-top-small"
                    >
                      book now!
                    </a>
                  </div>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">$897</p>
                  <a
                    href="#popup"
                    className="btn btn--white card__side--back--btn"
                  >
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-center-text ">
          <a href="#popup" className="btn btn--white u-margin-top-small">
            discover all tours
          </a>
        </div>
      </section>

      <PopupBooking />
    </>
  );
};

export default Tours;
