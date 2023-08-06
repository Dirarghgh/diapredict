import React, { useEffect, useState } from "react";
import "./App.css";
import FirstSection from "./components/FirstSection";
import Features from "./components/Features";
import TextGenerator from "./components/TextGenerator";
import { HfInference } from "@huggingface/inference";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import TextSummarization from "./components/TextSumerization";
import ImageClassifier from "./components/ImageClssifier";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/text-generation" element={<TextGenerator />} />

          <Route path="/text-summarization" element={<TextSummarization />} />

          <Route path="/image-classification" element={<ImageClassifier />} />

          {/* <Route path="/other" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
