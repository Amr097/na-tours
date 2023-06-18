import React from "react";
import { useRef } from "react";

const Navigation = () => {
  const isCheckedRef = useRef(null);
  const toggleCheckbox = () => {
    isCheckedRef.current.checked = false;
  };
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="nav-toggle"
        ref={isCheckedRef}
      />
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a onClick={toggleCheckbox} href="#" className="navigation__link">
              HOME
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={toggleCheckbox}
              href="#about"
              className="navigation__link"
            >
              About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={toggleCheckbox}
              href="#features"
              className="navigation__link"
            >
              Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={toggleCheckbox}
              href="#tours"
              className="navigation__link"
            >
              Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={toggleCheckbox}
              href="#reviews"
              className="navigation__link"
            >
              Reviews
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={toggleCheckbox}
              href="#booking"
              className="navigation__link"
            >
              Book now!
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
