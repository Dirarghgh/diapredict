import { HfInference } from "@huggingface/inference";
import React from "react";
import { useState } from "react";

const TextGenerationForm = () => {
  const huggingFace = new HfInference(process.env.REACT_APP_HF_TOKEN);
  const model = "ayajafar/next-word-prediction";

  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await huggingFace.textGeneration({
        data: inputText.trim(),
        model: model,
      });
      //   console.log(response);
      setResult(response.generated_text);
    } catch (error) {
      console.error("Error making API request:", error);
      setResult(""); // Return an empty string if there's an error
    } finally {
      setIsLoading(false); // Hide the loading animation whether the request is successful or not
    }
  };

  return (
    <>
      <center>
        {" "}
        <h1>Medical Text generator</h1>
      </center>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            <textarea
              value={inputText}
              onChange={handleInputChange}
              rows={4}
              cols={50}
              placeholder="Enter your input text here..."
            />
          </label>
          <center>
            <button type="submit" className="sumbit-btns" disabled={isLoading}>
              {isLoading ? "Loading..." : "Generate Text"}
            </button>
          </center>
        </form>

        {result && (
          <>
            <center>
              <div className="result">
                <p>{result}</p>
              </div>
            </center>
          </>
        )}
      </div>
    </>
  );
};

export default TextGenerationForm;
