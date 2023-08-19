import React from "react";
import icon from "../images/electrocardiogram (1).png";

function Nav({ isNav }) {
  return (
    <>
      {isNav ? (
        <div className="nav">
          <div className="nav-item">
            <div className="nav-icon">
              <img src={icon} alt="" />
            </div>
            <h6>{"heal tech.AI".toUpperCase()}</h6>
          </div>
        </div>
      ) : (
        <div className="nav footer">
          <div className="nav-item">
            <div className="nav-icon">
              <img src={icon} alt="" />
              <p>&copy; 2023 {"heal tech.AI".toUpperCase()} . All rights reserved</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
