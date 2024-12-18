import React, { createContext, useState } from "react";
import run from "../config/gemini";

// Create the context
export const Context = createContext();

// Define the ContextProvider component
const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [greet, showGreet] = useState(true);
  const [sendvise, setSendVisi] = useState(false);

  const onSent = async (prompt = input) => { // Use 'prompt' or default to 'input'
    setResult("");
    setLoading(true);
    setRecentPrompt(prompt); // Set recentPrompt to provided 'prompt'
    showGreet(false);

    const delayPara = (index, nextWord) => {
      setTimeout(function () {
        setResult((prev) => prev + nextWord);
      }, 75 * index);
    };

    const x = await run(prompt); // Run with 'prompt' instead of 'input'
    let xarray = x.split("**");
    let newResponse = "";

    for (let i = 0; i < xarray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += xarray[i];
      } else {
        newResponse += "<b>" + xarray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setInput("");
    setSendVisi(false)
    setLoading(false);
  };

  const contextValue = {
    onSent,
    input,
    setInput,
    prevPrompt,
    setPrevPrompt,
    recentPrompt,
    setRecentPrompt,
    loading,
    setLoading,
    sendvise, setSendVisi,
    result,
    setResult,
    greet,
    showGreet,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
