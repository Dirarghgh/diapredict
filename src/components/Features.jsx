import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      <div className="services" style={{ color: "white" }} id="start-now">
        <center style={{ color: "white" }}>
          <h1>Our Services</h1>
          <h2>Choose your model and start now</h2>
          <hr />
        </center>

        <div className="wrapper">
          <div className="item">
            <h1>Text Generation</h1>
            <ul>
              <li>Saves time by quickly providing accurate medical text predictions</li>
              <li>Highly reliable in suggesting medical terms and context-specific information.</li>
              <li>Tailored to the medical domain for precise and consistent results</li>
              {/* TODO:  Add voice input feature*/}

            </ul>

            <div className="btns try-btn">
              <div>
                <Link to="/text-generation">Try now</Link>
              </div>
            </div>
            
          </div>


          <div className="item">
            <h1>Text summarization</h1>

            <ul>
              <li>Quickly extracts key information from lengthy texts</li>
              <li>Provides easy access to relevant details</li>
              <li>Effective Decision Making, Enables efficient decision-making through concise summaries</li>
            </ul>

            <div className="btns try-btn">
              <div>
                <Link to="/text-summarization">Try now</Link>
              </div>
            </div>
          </div>



          <div className="item">
            <h1>Brain tumor classification </h1>
            <ul>
              <li>Provides precise and timely brain tumor classification for effective treatment planning</li>
              <li>Rapid processing saves valuable time in tumor assessment</li>
              <li>Minimizing patient discomfort while maintaining accuracy</li>
            </ul>
            <div className="btns try-btn">
              <div>
                <Link to="/image-classification">Try now</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Features;
