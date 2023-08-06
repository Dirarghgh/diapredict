import { HfInference } from "@huggingface/inference";
import React from "react";
import { useState } from "react";

const TextSummarization = () => {
  const huggingFace = new HfInference(process.env.REACT_APP_HF_TOKEN);
  
  const model = "facebook/bart-large-cnn";

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
      const response = await huggingFace.summarization({
        data: inputText.trim(),
        model: model,
      });
      //   console.log(response);
      setResult(response.summary_text);
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
        <h1>Medical Text Summarization</h1>
      </center>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            <textarea
              value={inputText}
              onChange={handleInputChange}
              rows={10}
              cols={50}
              placeholder="Enter your input text here..."
            />
          </label>
          <center>
          <button type="submit" className="sumbit-btns" disabled={isLoading}>
            {isLoading ? "Loading..." : "Summarize Text"}
          </button>
          </center>
         
        </form>

        {result && (
          <>
            {/* <h2>Generated Text:</h2> */}
            <center>
              <div className="result summery">
                <p>{result}</p>
              </div>
            </center>
          </>
        )}
      </div>
    </>
  );
};

export default TextSummarization;
