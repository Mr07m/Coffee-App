import React, { useEffect, useState } from "react";
import Review from "./Review";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import axios from "axios";

function ReviewContainer() {
  const [review, setReview] = useState([]);
  const fecthReviewData = (setReview) => {
    axios
      .get("http://localhost:3000/reviews")
      .then((res) => {
        setReview(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fecthReviewData(setReview);
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <h3 className="text-uppercase">our custoner reviews</h3>
          </div>
          <div className="row g-2">
            {review.map((item) => (
              <div className="col-12 col-sm-12 col-md-4 col-lg-3" key={item.id}>
                <div className="review ">
                  <Review msg={item.msg} name={item.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewContainer;
