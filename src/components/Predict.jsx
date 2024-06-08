import React, { useState } from "react";
import upload from "../images/upload.png";

function Predict() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [inputData, setInputData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const getResult = async (e) => {
    e.preventDefault();

    // Check for empty fields
    const emptyFields = Object.keys(inputData).filter(key => inputData[key] === "");
    if (emptyFields.length > 0) {
      setError("Please fill in all fields.");
      return;
    } else {
      setError("");
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error making API request:", error);
      setResult(""); // Return an empty string if there's an error
    } finally {
      setIsLoading(false); // Hide the loading animation whether the request is successful or not
    }
  };

  const clearInputs = () => {
    setInputData({
      Pregnancies: "",
      Glucose: "",
      BloodPressure: "",
      SkinThickness: "",
      Insulin: "",
      BMI: "",
      DiabetesPedigreeFunction: "",
      Age: ""
    });
    setResult(null); // Clear the result as well
    setError("");
  };

  return (
    <>
      <div className="clf-page" style={{ color: "white" }}>
        <h1>Diabetes prediction</h1>
        <center>
          <div className="img-clf">
            {/* Form inputs */}
            <form className="input-form" onSubmit={getResult}>
              <div className="input-row">
                <input
                  type="number"
                  name="Pregnancies"
                  placeholder="Pregnancies"
                  value={inputData.Pregnancies}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="Glucose"
                  placeholder="Glucose"
                  value={inputData.Glucose}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-row">
                <input
                  type="number"
                  name="BloodPressure"
                  placeholder="Blood Pressure"
                  value={inputData.BloodPressure}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="SkinThickness"
                  placeholder="Skin Thickness"
                  value={inputData.SkinThickness}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-row">
                <input
                  type="number"
                  name="Insulin"
                  placeholder="Insulin"
                  value={inputData.Insulin}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="BMI"
                  placeholder="BMI"
                  value={inputData.BMI}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-row">
                <input
                  type="number"
                  name="DiabetesPedigreeFunction"
                  placeholder="Diabetes Pedigree Function"
                  value={inputData.DiabetesPedigreeFunction}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="Age"
                  placeholder="Age"
                  value={inputData.Age}
                  onChange={handleInputChange}
                />
              </div>
              {error && <div className="error" style={{ color: "red" }}>{error}</div>}
              {result && (
                <div className="result" style={{ color: result.prediction === "diabetes" ? "red" : "green", fontWeight: "bold" }}>
                  {result.prediction === "diabetes" ? "OOPS! Diabetic" : "EL'Hmdallah , No Diabetic"}
                </div>
              )}
            </form>
          </div>
        </center>

        <div className="button-group" style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading}
            onClick={getResult}
            style={{ marginRight: "80px" }}
          >
            {isLoading ? "Loading..." : "Predict"}
          </button>
          <button
            className="submit-btn"
            onClick={clearInputs}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default Predict;
