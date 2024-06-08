import React, { useState } from "react";
import upload from "../images/upload.png";

function ImageClassifier() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);

  // Function to handle the selected image
  async function handleImageSelection(event) {
    const selectedFile = event.target.files[0];

    // Check if an image was selected
    if (selectedFile) {
      setFile(selectedFile);
      setSelectedImage(URL.createObjectURL(selectedFile));
    }
  }

  const classifyImage = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://127.0.0.1:8001/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to classify image.");
      }

      const data = await response.json();
      setResult(data.prediction); // Accessing the prediction key from the response data
    } catch (error) {
      console.error("Error making API request:", error);
      setResult(null); // Clear the result if there's an error
    } finally {
      setIsLoading(false); // Hide the loading animation whether the request is successful or not
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setResult(null);
    setFile(null);
  };

  // Function to get the color based on the prediction result
  const getResultColor = (result) => {
    if (result === "Diabetic Retinopathy") {
      return "red";
    } else if (result === "No Diabetic Retinopathy") {
      return "green";
    } else {
      return "white"; // Default color if no result
    }
  };

  return (
    <div className="clf-page" style={{ color: "white" }}>
      <h1>Diabetic Retinopathy Classification</h1>
      <center>
        <div className="img-clf">
          <label htmlFor="fileInput" className="label">
            <img
              src={selectedImage === null ? upload : selectedImage}
              alt="Upload Image"
              className="upload-icon"
            />
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelection}
            className="file-input"
            id="fileInput"
          />
        </div>
        {result !== null && (
          <div className="result">
            <h4 style={{ color: getResultColor(result) }}>Class: {result}</h4>
          </div>
        )}
      </center>

      <div className="button-group" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          type="button"
          className="submit-btn"
          disabled={isLoading || !file}
          onClick={classifyImage}
        >
          {isLoading ? "Loading..." : "Classify Image"}
        </button>
        <button
          type="button"
          className="submit-btn"
          onClick={clearImage}
          style={{ backgroundColor: "red", color: "black" }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default ImageClassifier;
