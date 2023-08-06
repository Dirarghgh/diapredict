import React, { useState , useEffect } from "react";
import { HfInference } from "@huggingface/inference";

function NotesClf() {
//   console.log(process.env.REACT_APP_HF_TOKEN);

  const huggingFace = new HfInference(process.env.REACT_APP_HF_TOKEN);

  const model = "ugaray96/biobert_ncbi_disease_ner";

  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setIsLoading(true);

    try {
      const response = await huggingFace.tokenClassification({
        data: "The patient has a history of heart disease and high blood pressure",
        model: model,
      });
    //   console.log(response);
      setResult(response);
    } catch (error) {
      console.error("Error making API request:", error);
      setResult(""); // Return an empty string if there's an error
    } finally {
      //   setIsLoading(false); // Hide the loading animation whether the request is successful or not
    }
  };

//   useEffect(() => {
//     handleSubmit(); // Call the handleSubmit function when the component mounts
//   }, []);

//   console.log(result);

  return (
    <>
        {/* {result.map((r,i)=>{
            return <div key={i}><h1>{r.entity_group}</h1></div>
        })} */}
    </>
  );
}

export default NotesClf;
