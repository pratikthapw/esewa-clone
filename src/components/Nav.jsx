/* eslint-disable react/prop-types */
import esewaLogo from "../images/esewa_logo.png";
import searchIcon from "../images/searchIcon.svg";
import lockIcon from "../images/lockIcon.svg";
import userIcon from "../images/userIcon.svg";

function NavBar() {
  return (
    <>
      <nav className="bg-primary px-md-3 px-2 pt-2 pt-md-3">
        <div className="container-fluid d-flex flex-column row-gap-2 xlWidth">
          <form className="row align-items-start justify-content-between">
            <section className="col-4 align-self-center align-self-md-start">
              <div className="row justify-content-between">
                <div className="col col-sm-8 col-md-5">
                  <img src={esewaLogo} alt="logo" className="h-100 w-100" />
                </div>

                <SearchBox className="col-md-7 d-none d-md-flex" />
              </div>
            </section>

            <section className="col-7">
              <div className="row align-items-start justify-content-between">
                <SearchBox
                  icon={userIcon}
                  placeholder="eSewa ID"
                  className="col-md-3 d-none d-md-flex"
                />

                <div className="col-md-4 d-none  d-md-block">
                  <SearchBox icon={lockIcon} placeholder="Password" />
                  <span className="text-light fs-6">Forgot Password?</span>
                </div>
                <button className="col-4 col-sm-2 offset-sm-10 offset-8 offset-md-0 col-md-2 btn btn-outline-light rounded-1 custom-btn">
                  Login
                </button>
                <button className="d-none d-md-block col-md-2 btn btn-outline-success rounded-1">
                  Register
                </button>
              </div>
            </section>
          </form>
          <div className="row">
            <SearchBox className="col d-md-none mb-2" />
          </div>
        </div>
      </nav>
      <NavLinks />
    </>
  );
}

export default NavBar;

function SearchBox({
  placeholder = "Search services/merchant by tags (e.g. adsl)",
  icon = searchIcon,
  className = "",
}) {
  return (
    <div
      className={`d-flex bg-dark align-items-center p-2 rounded-2 ${className}`}
    >
      <img src={icon} className="me-2" />
      <input
        type="text"
        placeholder={placeholder}
        className={`fs-6 bg-transparent border-0 w-100 h-100 text-light `}
      />
    </div>
  );
}

function NavLinks() {
  return (
    <section className="bg-success px-md-3 px-2">
      <div className="xlWidth mx-auto text-white d-flex column-gap-3 align-items-center py-2 fs-5">
        <span>TopUp</span>
        <span>Airlines</span>
        <span>Internet Bill</span>
        <span>Load Fund</span>
      </div>
    </section>
  );
}
