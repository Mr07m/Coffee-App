import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import TesttiImg from "../../public/Coffee-images/testi.png";

function Review({ msg, name }) {
  return (
    <div className="container py-5">
      <div className="reviews  border  rounded">
        <div className="clint-info text-center">
          <img src={TesttiImg} height="60px" />
          <p>{name}</p>
        </div>
        <p className="text-center  ">
          <span className="me-4">
            <FaQuoteLeft className="text-warning" />
          </span>
          {msg}
          <span className="ms-4">
            <FaQuoteRight className="text-warning" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Review;
