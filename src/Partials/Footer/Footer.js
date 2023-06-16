import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box u-margin-bottom-medium">
        <img src="img/logo-green-1x.png" className="footer__logo" alt="" />
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
              &nbsp;Amr Abdelghany&nbsp;
            </a>
            Practicing CSS
            <a href="" className="footer__link">
              &nbsp; Advanced CSS animations&nbsp;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
