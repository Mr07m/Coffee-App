import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import MyLogo from "../../public/Coffee-images/coffee-logo.png";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="container-fluid pt-4 border-top border-danger mt-5">
      <div className="container">
        <div className="home-icon">
          <p className="text-center fs-5 text-danger">
            <BsArrowUpCircleFill /> <br />
            <Link to="Home" className="top-icon fs-6">
              Go to Top
            </Link>
          </p>
        </div>
        <div className="row our-detailjustify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <p className="mx-2 d-flex justify-content-center align-items-center">
              <FaPhone /> +91 123457890
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <p className="mx-2 d-flex justify-content-center align-items-center">
              <MdEmail /> eample123@gmail.com
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <p className="mx-2 d-flex justify-content-center align-items-center">
              <FaLocationDot /> Bandra(E) - 400051, Mumbai, MH
            </p>
          </div>
        </div>
        <div className="extra-info pt-5">
          <div className="row justify-content-start align-items-start">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <div className="content">
                <h3 className="text-uppercase fw-bold">About us</h3>
                <p className="some-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid corrupti non animi nemo illum earum nulla. At
                  asperiores illo rerum! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Eius, enim. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid corrupti non animi nemo
                  illum earum nulla. At asperiores illo rerum! Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Eius, enim.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 py-3 text-danger">
              <div className="social-icons ">
                <FaFacebook className="mx-2 fs-4" />
                <FaInstagramSquare className="mx-2 fs-4" />
                <FaSquareXTwitter className="mx-2 fs-4" />
                <FaPinterest className="mx-2 fs-4" />
                <FaWhatsappSquare className="mx-2 fs-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-top border-danger py-4">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-3 col-sm-3 col-md-6 col-lg-6">
            <img src={MyLogo} height="40px" />
          </div>
          <div className="col-9 col-sm-9 col-md-6 col-lg-6">
            <FaCopyright />{" "}
            <span className="ms-2 text-uppercase rights">
              Copyright All rights reserved 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
