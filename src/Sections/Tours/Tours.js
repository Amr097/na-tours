import React from "react";

const Tours = () => {
  return (
    <section id="tours" className="section-tours">
      <h2 className="heading-secondary">most popular tours</h2>
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
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1"></div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2"></div>
              <h4 className="card__heading">
                {" "}
                <span className="card__heading-span card__heading-span--2">
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
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2"></div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3"></div>
              <h4 className="card__heading">
                {" "}
                <span className="card__heading-span card__heading-span--3">
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
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3"></div>
          </div>
        </div>
      </div>
      <a href="javascript:void(0)" className="btn btn--green">
        discover all tours
      </a>
    </section>
  );
};

export default Tours;
