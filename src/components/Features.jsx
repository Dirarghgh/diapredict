import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      <div className="services" style={{ color: "white" }} id="start-now">
        <center style={{ color: "white" }}>
          <h1>Our Services</h1>
          <h2>Choose your service and start now</h2>
          <hr />
        </center>

        <div className="wrapper">
          {/* <div className="item">
            <h1>Text Generation</h1>
            <ul>
              <li>Saves time by quickly providing accurate medical text predictions</li>
              <li>Highly reliable in suggesting medical terms and context-specific information.</li>
              <li>Tailored to the medical domain for precise and consistent results</li>
            </ul>

            <div className="btns try-btn">
              <div>
                <Link to="/text-generation">Try now</Link>
              </div>
            </div>
            
          </div> */}
          <div className="item">
            <h1>Diabetic Retinopathy </h1>
            <ul>
              <li> Quickly provides precise assessments of diabetic retinopathy through advanced AI analysis.</li>
              <li>Offers dependable identification of relevant medical conditions and terms, enhancing diagnostic accuracy.</li>
              <li> Designed specifically for diabetic retinopathy, ensuring consistency and precision in results.</li>
            </ul>

            <div className="btns try-btn">
              <div>
                <Link to="/image-class">Try now</Link>
              </div>
            </div>
            
          </div>


          <div className="item">
            <h1>Diabetes prediction </h1>
            <ul>
              <li> Our diabetes prediction service uses AI to analyze health data, enabling early identification of potential diabetes risk before symptoms appear.</li>
              <li>Helps individuals and doctors take early action to manage health.</li>
              <li>Uses data patterns to predict diabetes reliably.</li>
            </ul>
            <div className="btns try-btn">
              <div>
                <Link to="/predictDiabetes">Try now</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Features;
