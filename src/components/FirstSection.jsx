import React from "react";
import pic from "../images/3276005.jpg";
import MultiImgClf from "./MultiImgClf";
import NotesClf from "./NotesClf";

const handleMouseMove = (e, id) => {
  const { clientX, clientY } = e;
  const card = document.getElementById(id);
  const { left, top, width, height } = card.getBoundingClientRect();
  const mouseX = clientX - left;
  const mouseY = clientY - top;
  const rotationX = 5 - (10 * mouseY) / height;
  const rotationY = (10 * mouseX) / width - 5;
  card.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
};

const handleMouseLeave = (e, id) => {
  const card = document.getElementById(id);
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
};

function FirstSection() {
  return (
    <div className="parent">
      <div>
        {/*         
        <MultiImgClf /> */}
   
        
        <h1>Healthcare AI</h1>
        <NotesClf />
        <h4 style={{ marginTop: "20px", fontSize: "1em", fontWeight: 500 }}>
          AI-Driven tool for medical tasks such as text generation ,
          classification and much more
        </h4>

        <div className="btns">
          <div id="start">
            <a href="#start-now">Start now</a>
          </div>

          <div id="about-us">
            <a href="#about-us-container">About us</a>
          </div>
        </div>
      </div>
      <div
        onMouseMove={(e) => {
          handleMouseMove(e, "cover");
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e, "cover");
        }}
      >
        <img src={pic} alt="" id="cover" />
      </div>
    </div>
  );
}
export { handleMouseLeave };
export { handleMouseMove };
export default FirstSection;
