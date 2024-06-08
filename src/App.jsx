import React, { useEffect, useState } from "react";
import "./App.css";
import FirstSection from "./components/FirstSection";
import Features from "./components/Features";
import TextGenerator from "./components/TextGenerator";
import { HfInference } from "@huggingface/inference";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Predict from "./components/Predict";
import ImageClassifier from "./components/ImageClassifier";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/text-generation" element={<TextGenerator />} />

          <Route path="/image-class" element={<ImageClassifier/>} />

          <Route path="/predictDiabetes" element={<Predict/>} />

        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
