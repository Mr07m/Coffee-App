import React, { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const email = useRef("");
  const name = useRef("");
  const phone = useRef("");
  const addr = useRef("");

  const handleContactForm = (e) => {
    e.preventDefault();
    const emailVal = email.current.value;
    const nameVal = name.current.value;
    const phoneVal = phone.current.value;
    const addrVal = addr.current.value;

    axios
      .post("http://localhost:3000/contact", {
        email: emailVal,
        name: nameVal,
        phone: phoneVal,
        addr: addrVal,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    email.current.value = "";
    name.current.value = "";
    phone.current.value = "";
    addr.current.value = "";
  };

  return (
    <div className="container-fluid py-4 ">
      <div className="heading text-center py-3">
        <h3 className="text-uppercase ">contact us</h3>
      </div>
      <div className="container  contact py-3">
        <form
          className="row justify-content-center align-items-center g-3"
          onSubmit={handleContactForm}
        >
          <div className="col-12 col-lg-8  ">
            <div className="my-input">
              <input
                type="email"
                className="w-100"
                ref={email}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="my-input">
              <input
                type="text"
                className="w-100"
                ref={name}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="my-input">
              <input
                type="text"
                className="w-100"
                ref={phone}
                placeholder="Phone"
              />
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="my-input">
              <input
                type="text"
                className="w-100"
                ref={addr}
                placeholder="Address"
              />
            </div>
          </div>

          <div className="col-6">
            <div className="fs-3 text-center">
              <button
                className="btn btn-outline-primary btn-sm mx-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="col-6">
            <div className=" fs-3 text-center">
              <button
                className="btn btn-outline-danger btn-sm mx-3"
                type="reset"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
        {/* end */}
      </div>
    </div>
  );
};

export default Contact;
