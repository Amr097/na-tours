import React from "react";

const PopupBooking = () => {
  return (
    <div className="popup" id="popup">
      <a href="#tours" className="popup__exit"></a>
      <div className="popup__content">
        <div className="popup__left">
          <img
            src="./img/nat-8.webp"
            alt="Tour photo"
            className="popup__image"
            loading="lazy"
          />
          <img
            src="./img/nat-9.webp"
            alt="Tour photo"
            className="popup__image"
            loading="lazy"
          />
        </div>
        <div className="popup__right">
          <a href="#tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start Booking Now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-tiny">
            Importnant &ndash; Lorem, ipsum dolor sit amet consectetur
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptate, iste, maxime sed incidunt fuga omnis totam sapiente quae
            recusandae nisi assumenda qui? Iure fugiat, fugit. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eos voluptate, iste, maxime
            sed incidunt fuga omnis totam sapiente quae recusandae nisi
            assumenda qui? Iure fugiat, fugit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eos voluptate, iste, maxime sed
            incidunt fuga omnis totam sapiente quae recusandae nisi assumenda
            qui?
          </p>
          <a href="#booking" className="btn btn--green u-margin-top-medium">
            Book Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupBooking;
