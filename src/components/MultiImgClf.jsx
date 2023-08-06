import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import upload from "../images/upload.png";

import testImage from "../images/b.png";

function MultiImgClf() {
  const huggingFace = new HfInference(process.env.REACT_APP_HF_TOKEN);
  
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
      const response = await huggingFace.zeroShotImageClassification({
        data: { inputs: [file, "s,sd"] },
        model: "microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224",
      });
      setResult(response);
      console.log(response);
    } catch (error) {
      console.error("Error making API request:", error);
      setResult(""); // Return an empty string if there's an error
    } finally {
      setIsLoading(false); // Hide the loading animation whether the request is successful or not
    }
  };
  console.log(result);
  return <></>;
}
export default MultiImgClf;
