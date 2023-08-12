import React from "react";
import FirstSection from "./FirstSection";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Nav from './Nav'
import ContactUs from "./Contact";



function Main() {
  return (
    <>
      <Nav isNav={true}/>
      <FirstSection />
      <AboutUs />
      <Features />
      <ContactUs />
      <Nav isNav={false}/>
    </>
  );
}

export default Main;
