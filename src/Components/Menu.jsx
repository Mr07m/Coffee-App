import React from "react";
import "./Menu.css";

function Menu({ name, desc, img, price }) {
  return (
    <div className="menu-card px-2 ">
      <div className="menu-img ">
        <img src={img} alt="" height="80px" />
      </div>
      <div className="content border-end border-danger px-2 my-3">
        <h5 className="text-uppercase title">{name}</h5>
        <p className="text-light ">{desc}</p>
      </div>
      <div className="price  ">
        <p className="text-end">${price}</p>
      </div>
    </div>
  );
}

export default Menu;
