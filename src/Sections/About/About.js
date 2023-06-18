import React from "react";

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="u-center-text u-margin-bottom-big u-padding-top-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row  section-about__heading--m">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>

          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, atque.
            Odit, deleniti doloribus quisquam ipsam quos totam distinctio magni
            eos explicabo corrupti, expedita commodi perferendis quis iusto iure
            provident recusandae.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic animi
            corporis molestiae labore, laborum deleniti voluptatum accusantium
            aspernatur neque doloremque porro a soluta reiciendis alias
            perferendis quasi sint nobis dolorem!
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="./img/nat-1-large.jpg"
              alt="nature"
              className="composition__photo composition__photo--p1"
              loading="lazy"
            />
            <img
              src="./img/nat-2-large.jpg"
              alt="nature"
              className="composition__photo composition__photo--p2"
              loading="lazy"
            />
            <img
              src="./img/nat-3-large.jpg"
              alt="nature"
              className="composition__photo composition__photo--p3"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* <div className="float-rows">
        <div className="row">
          <div className="col-1-of-2">col-1-of-2</div>
          <div className="col-1-of-2">col-1-of-2</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-1-of-3">col-1-of-3</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-2-of-3">col-1-of-2</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-2-of-4">col-2-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-2-of-4">col-2-of-4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-3-of-4">col-3-of-4</div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
