import React from "react";

const Reviews = () => {
  return (
    <section id="reviews" className="section-reviews">
      <div className="bg-video">
        <video className="bg-video__content" loop autoPlay muted playsinline>
          <source src="./img/video.mp4" type="video/mp4" />
          <source src="./img/video.webm" type="video/webm" />
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big u-padding-top-medium">
        <h2 className="heading-secondary">we make people geniunely happy</h2>
      </div>
      <div className="row">
        <div className="review u-center">
          <figure className="review__shape">
            <img
              src="./img/nat-8.webp"
              alt=""
              className="review__shape-img"
              loading="lazy"
            />
            <figcaption className="review__shape-caption">Mary Jane</figcaption>
          </figure>
          <div className="review__text">
            <h3 className="heading-tertiary">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi
              recusandae aut culpa optio, repudiandae quae cumque veniam dolores
              debitis repellendus quod laborum odit, dolorem voluptatum
              voluptatem iure? Natus, temporibus.
            </p>
          </div>
        </div>
        <div className="review u-center">
          <figure className="review__shape">
            <img
              src="./img/nat-9.webp"
              alt=""
              className="review__shape-img"
              loading="lazy"
            />
            <figcaption className="review__shape-caption">
              Peter Parker
            </figcaption>
          </figure>
          <div className="review__text">
            <h3 className="heading-tertiary">
              wow! my life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi
              recusandae aut culpa optio, repudiandae quae cumque veniam dolores
              debitis repellendus quod laborum odit, dolorem voluptatum
              voluptatem iure? Natus, temporibus.
            </p>
          </div>
        </div>
        <div className="u-center-text">
          <a href="#" className="btn-text u-btn-padding">
            Read All Stories &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
