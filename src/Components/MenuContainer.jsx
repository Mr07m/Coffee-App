import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import "./MenuContainer.css";
import axios from "axios";

function MenuContainer() {
  const [menu, setMenu] = useState("");
  const fecthMenuData = (setMenu) => {
    axios
      .get("http://localhost:3000/menu")
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => fecthMenuData(setMenu));
  return (
    <div className="container py-4">
      <div className="menuHeader text-center py-2">
        <p className="simple-menu-title">Simple Menu</p>
        <h3 className="text-uppercase ">coffee popular menu</h3>
      </div>
      <div className="container">
        <div className="row g-4">
          {menu.length > 0 ? (
            menu.map((item) => (
              <div className="col-12 col-sm-12 col-md-3 col-lg-3" key={item.id}>
                <Menu
                  name={item.name}
                  img={item.img}
                  desc={item.desc}
                  price={item.price}
                />
              </div>
            ))
          ) : (
            <h2>Menu Not found</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuContainer;
