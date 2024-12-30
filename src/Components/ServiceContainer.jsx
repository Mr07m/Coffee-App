import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./ServiceContainer.css";
import axios from "axios";

function ServiceContainer() {
  const [service, setService] = useState("");

  const fecthServiceData = (setService) => {
    axios
      .get("http://localhost:3000/service")
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => fecthServiceData(setService));
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="heading text-center">
          <h3 className="text-uppercase">our service</h3>
        </div>
        <div className="row serviceCard g-2">
          {service.length > 0 ? (
            service.map((item) => (
              <div className="col-12 col-sm-12 col-md-3 col-lg-3" key={item.id}>
                <div className="service-card">
                  <Service title={item.title} desc={item.desc} />
                </div>
              </div>
            ))
          ) : (
            <h2>Service Not found</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceContainer;
