import React, { useState } from "react";
import profile from "../assets/6c5af4211ea306034cd976bfad54d9c1(1).jpg";
import campass from "../assets/compass_icon.png";
import bulb from "../assets/bulb_icon.png";
import code from "../assets/code_icon.png";
import message from "../assets/message_icon.png";
import send from "../assets/send_icon.png";
import gallery from "../assets/gallery_icon.png";
import mic from "../assets/mic_icon.png";
import { useContext } from "react";
import { Context } from "../context/Context";
import gemini_logo from "../assets/gemini_icon.png";

export const Main = () => {
  const {
    input,
    setInput,
    prevPrompt,
    setRecentPrompt,
    recentPrompt,
    setPrevPrompt,
    loading,
    result,
    greet,sendvise, setSendVisi,
    showGreet,
    onSent,
  } = useContext(Context);

  

  const changeHandler = (event) => {
    setSendVisi(true);
    setInput(event.target.value);

    if (event.target.value === "") {
      setSendVisi(false);
    }
  };


  const handleClick = (event) => {
    // Access the p tag within the clicked div
    const paraText = event.currentTarget.querySelector("p").innerText;
    console.log("Paragraph text:", paraText);
    setPrevPrompt((prev) => [...prev, paraText]);
    setRecentPrompt(paraText); // Set recentPrompt to selected text
    onSent(paraText);
  };


  return (
    <div className="flex flex-col p-4 h-full justify-between items-center">
      <nav className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-[21px] font-normal">Gemini</h1>
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={profile}
            alt="Profile Icon"
          />
        </div>
      </nav>
      {/* // Result Section */}
      {!greet && (
        <div className="result-box flex flex-col mx-auto w-full max-w-[50rem] overflow-y-auto max-h-[400px] p-6 rounded-lg shadow-lg bg-white scrollbar-slim">
          <div className="flex items-center gap-5 mb-4">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={profile}
              alt="Profile Icon"
            />
            <p className="text-gray-700 text-lg font-semibold">
              {recentPrompt}
            </p>
          </div>

          {loading ? (
            <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
          ) : (
            <div className="flex gap-5 mt-4">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={gemini_logo}
                alt="Gemini Logo"
              />
              <p
                className="text-gray-800 text-17px font-light leading-7 text-left"
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            </div>
          )}
        </div>
      )}

      {greet && (
        <div className="flex flex-start flex-wrap flex-col mx-auto w-full max-w-[50rem]">
          {/* Greeting Section */}
          <div className="flex justify-start items-start flex-col w-full ">
            <div className="text-gradient font-bold text-[56px] text-[#c4c7c5] font-medium">
              Hey, Champ.
            </div>
            <div className="text-[56px] text-[#c4c7c5] font-medium mt-[-20px]">
              How can I help you today?
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-wrap overflow-auto gap-2 h-[200px] mt-4">
            <div onClick={handleClick} className="flex-1 bg-[rgb(240,244,249)] rounded-md flex flex-col justify-between p-4">
              <p className="text-left">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <img
                className="w-[35px] h-[35px] self-end"
                src={campass}
                alt="Compass Icon"
              />
            </div>
            <div onClick={handleClick}  className="flex-1 bg-[rgb(240,244,249)] rounded-md flex flex-col justify-between p-4">
              <p className="text-left">
                Briefly summarize this concept: urban planning
              </p>
              <img
                className="w-[35px] h-[35px] self-end"
                src={bulb}
                alt="Bulb Icon"
              />
            </div>
            <div onClick={handleClick}  className="flex-1 bg-[rgb(240,244,249)] rounded-md flex flex-col justify-between p-4">
              <p className="text-left">
                Brainstorm team bonding activities for our work retreat
              </p>
              <img
                className="w-[35px] h-[35px] self-end"
                src={message}
                alt="Message Icon"
              />
            </div>
            <div onClick={handleClick}  className="flex-1 bg-[rgb(240,244,249)] rounded-md flex flex-col justify-between p-4">
              <p className="text-left">
                Tell me about React js and React native
              </p>
              <img
                className="w-[35px] h-[35px] self-end"
                src={code}
                alt="Code Icon"
              />
            </div>
          </div>
        </div>
      )}
      {/* Input Section */}
      <div className="w-full max-w-[52rem] flex flex-col p-2 items-center justify-center">
        <div className="w-full flex items-center justify-start h-[64px] rounded-full p-2 bg-[rgb(240,244,249)]">
          <div className="flex-1">
            <input
              type="text"
              onChange={changeHandler}
              className="w-full bg-[rgb(240,244,249)] h-full p-2 rounded-full outline-none"
              placeholder="Ask Gemini"
              value={input}
            />
          </div>

          <div className="flex gap-3 ml-3">
            <button>
              <img
                className="w-[24px] h-[24px]"
                src={gallery}
                alt="Gallery Icon"
              />
            </button>
            <button>
              <img className="w-[24px] h-[24px]" src={mic} alt="Mic Icon" />
            </button>
            {sendvise && (
              <button
                onClick={() => {
                  setPrevPrompt((prev) => [...prev, input]);
                  onSent();
                }}
              >
                <img className="w-[24px] h-[24px]" src={send} alt="Send Icon" />
              </button>
            )}
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 mt-2">
          Gemini may display inaccurate info, including about people, so
          double-check its responses.
        </div>
      </div>
    </div>
  );
};
