import React, { useEffect, useState } from "react";
import HomeImg from "../../public/Coffee-images/home-imges.avif";
import "./Home.css";
import axios from "axios";

function Home() {
  const [home, setHome] = useState([]);
  const fecthHomeData = (setHome) => {
    axios
      .get("http://localhost:3000/home")
      .then((res) => {
        setHome(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => fecthHomeData(setHome));
  return (
    <div className="container-fluid mt-2 py-2">
      <div className="container py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-3">
            {home.map((item) => (
              <div className="home-content" key={item.id}>
                <p>{item.slogan}</p>

                <h1 className="text-uppercase fw-bold">{item.title}</h1>
                <p>{item.para}</p>
                <a href="#" className="btn btn-outline-danger text-uppercase">
                  Shop now
                </a>
              </div>
            ))}
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="home-img">
              <img src={HomeImg} className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
