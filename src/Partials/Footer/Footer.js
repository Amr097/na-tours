import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box u-margin-bottom-medium">
        <picture className="footer__logo">
          <source
            srcSet="img/logo-green-small-1x.webp 1x, img/logo-green-small-2x.webp 2x"
            src="img/logo-green-small-1x.webp"
            media="(max-width: 41.5em)"
          />
          <img
            srcSet="img/logo-green-1x.webp 1x, img/logo-green-2x.webp 2x"
            alt="footer"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built By{" "}
            <a href="" className="footer__link">
              Amr Abdelghany&nbsp;
            </a>
            Practicing
            <a href="" className="footer__link">
              &nbsp; Advanced CSS and Sass Course by Jonas Schmedtmann&nbsp;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
