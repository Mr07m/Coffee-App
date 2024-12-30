import React from "react";
import ServiceImg from "../../public/Coffee-images/home-imges.avif";
import { LuArrowRightCircle } from "react-icons/lu";
import "./Service.css";

const Service = ({ title, desc }) => {
  return (
    <div className="card border border-danger">
      <img src={ServiceImg} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-uppercase text-white">{title}</h5>
        <p className="card-text text-white">{desc}</p>
        <p className="text-end fs-4 pe-3 text-white">
          <LuArrowRightCircle />
        </p>
      </div>
    </div>
  );
};

export default Service;
