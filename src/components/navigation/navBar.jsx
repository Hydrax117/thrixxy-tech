import { Link } from "react-router-dom";
import { useState } from "react";
import { Images } from "../../assets/images";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light bg-light"
      id="navBar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <img
            alt=""
            src={Images.logo2}
            className="img-fluid"
            style={{ height: "100px", width: "150px" }}
          />
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse justify-content-end navbar-collapse ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto lato ">
            <li className="nav-item ">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#services">
                Team
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/select-course">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
