import React from "react";
import MyLogo from "../../public/Coffee-images/coffee-logo.png";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid border-bottom border-danger ">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-primary">
              <img src={MyLogo} height="50px" />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="Home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Review" className="nav-link">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  +91 (12345) 67890
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-outline-danger text-uppercase px-3"
                  href="#"
                >
                  signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
