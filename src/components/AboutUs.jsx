import React from "react";
import img from "../images/icon-ai-removebg-preview.png";
import { handleMouseLeave, handleMouseMove } from "./FirstSection"; // Import the function from the FirstSection file

function AboutUs() {
  return (
    <>
      <div
        className="container"
        id="about-us-container"
      >
        <div className="about-us" style={{ color: "white" }}>
          <div>
            <img src={img} alt="" id="ai-img" />
          </div>

          <div>
            <div className="desc">
              <h1 style={{ margin: 0, padding: 0 }}>About us</h1>
              <hr />
              <h3>
               
                We build Deep learning models that's specific for diabetes prediction
                 to enhance the performance of medical field in Algeria
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
