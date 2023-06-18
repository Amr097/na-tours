export default function Header({ inView }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
          <img
            src="/img/logo-white.png"
            alt="Logo"
            className="header__logo"
          ></img>
        </div>
        <div className="header__title-box">
          <h1 className="heading-primary">
            <span className="main--heading-primary main-animation">
              OUTDOORS
            </span>
            <span className="sub--heading-primary sub-animation">
              IS WHERE LIFE HAPPENS
            </span>
          </h1>
          <a href="javascript:void(0)" className="btn btn--white btn-animation">
            Discover our tours
          </a>
        </div>
      </div>
    </header>
  );
}
