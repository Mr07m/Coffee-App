import React, { useEffect, useState } from "react";
import AboutImg from "../../public/Coffee-images/home-imges.avif";
import "./About.css";
import axios from "axios";

function About() {
  const [about, setAbout] = useState([]);
  const featchAboutData = (setAbout) => {
    axios
      .get("http://localhost:3000/about")
      .then((res) => {
        setAbout(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    featchAboutData(setAbout);
  });

  return (
    <div className="container py-3">
      <div className="row justify-content-center align-items-center g-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="about-img">
            <img src={AboutImg} className="img-fluid w-100" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          {about.map((item) => (
            <div className="aboutText p-4">
              <h3 className="text-uppercase">About us</h3>
              <p>{item.info}</p>
              <a href="#" className="btn btn-outline-danger text-uppercase">
                shop now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
