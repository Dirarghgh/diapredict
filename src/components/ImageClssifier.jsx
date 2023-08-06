import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import upload from "../images/upload.png";

function ImageClassifier() {
  const huggingFace = new HfInference(process.env.REACT_APP_HF_TOKEN)
  
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

  const getResult = async (e) => {
    setIsLoading(true);
    try {
      const response = await huggingFace.imageClassification({
        data: file,
        model: "surajjoshi/Brain_Tumor_Classification_using_swin_transformer",
      });
      setResult(response);
    } catch (error) {
      console.error("Error making API request:", error);
      setResult(""); // Return an empty string if there's an error
    } finally {
      setIsLoading(false); // Hide the loading animation whether the request is successful or not
    }
  };

  return (
    <>
      <div className="clf-page" style={{ color: "white" }}>
        <h1>Brain tumor classification</h1>
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
            />
          </div>
        </center>

        <button
          type="submit"
          className="sumbit-btns"
          disabled={isLoading}
          onClick={getResult}
        >
          {isLoading ? "Loading..." : "Classify image"}
        </button>

        {result &&
          result.length > 0 && ( // Check if result is not null and has items
            <div className="acc-info">
              {result.map((r, i) => (
                <div key={i} className="prog-item">
                  <h4>{r.label}</h4>
                  <div
                    className="progress-fill"
                    style={{
                      width: `${Math.round(r.score * 100)}%`,
                      "--initial-width": "0%",
                      "--final-width": `${Math.round(r.score * 100)}%`,
                    }}
                  >
                    {`${Math.round(r.score * 100)}%`}
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </>
  );
}

export default ImageClassifier;
