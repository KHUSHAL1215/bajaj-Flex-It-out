import React, { useState } from "react";
import menuicon from "../assets/menu_icon.png";
import plusIcon from "../assets/plus_icon.png";
import question from "../assets/question_icon.png";
import setting from "../assets/setting_icon.png";
import history from "../assets/history_icon.png";
import message from "../assets/message_icon.png";
import { useContext } from "react";
import { Context } from "../context/Context";
import { SidebarChats } from "./SidebarChats";

export const Sidebar = () => {
  const {
    input,
    setInput,
    prevPrompt,
    recentPrompt,
    loading,
    result,
    greet,
    showGreet,
    onSent,
  } = useContext(Context);
  const [visible, setVisible] = useState(false);

  const menuHandler = () => {
    console.log("Menu toggled");
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col justify-between h-[100vh] overflow-hidden p-4 bg-[rgb(240,244,249)] items-start">
      <div className="flex flex-col gap-14 items-start">
        {/* Menu Icon */}
        <div
          onClick={menuHandler}
          className="flex rounded-full hover:bg-[rgb(229,235,242)] p-2 cursor-pointer"
        >
          <img className="w-[20px] h-[20px]" src={menuicon} alt="Menu Icon" />
        </div>

        {/* Plus Icon and New Chat */}
        <div className="overflow-hidden flex flex-col gap-10">
          <div
            style={{ maxWidth: "140px" }}
            className="flex rounded-full bg-[rgb(229,235,242)] p-2 gap-3 justify-start items-center"
          >
            <img className="w-[19px] h-[19px]" src={plusIcon} alt="Plus Icon" />
            {visible && (
              <div className="w-[90px] p-1 flex justify-start items-center">
                <p>New Chat</p>
              </div>
            )}
          </div>

          {/* Recents Section */}
          <div className="flex flex-col gap-3">
            {visible && (
              <div className="flex justify-start items-center h-9">
                <p>Recents</p>
              </div>
            )}

            <div className="overflow-auto max-h-72 flex flex-col gap-3 scrollbar-slim">
              {visible &&
                prevPrompt.map((item, index) => (
                  <SidebarChats key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex rounded-full hover:bg-[rgb(229,235,242)] p-2 gap-2 justify-start items-center">
          <img
            className="w-[20px] h-[20px]"
            src={question}
            alt="Question Icon"
          />
          {visible && (
            <div className="flex justify-start items-center rounded-full h-9 w-64">
              <p>Help</p>
            </div>
          )}
        </div>

        <div className="flex rounded-full hover:bg-[rgb(229,235,242)] p-2 gap-2 justify-start items-center">
          <img className="w-[20px] h-[20px]" src={history} alt="History Icon" />
          {visible && (
            <div className="flex justify-start items-center rounded-full h-9 w-64">
              <p>Activity</p>
            </div>
          )}
        </div>

        <div className="flex rounded-full hover:bg-[rgb(229,235,242)] p-2 gap-2 justify-start items-center">
          <img className="w-[20px] h-[20px]" src={setting} alt="Setting Icon" />
          {visible && (
            <div className="flex justify-start items-center rounded-full h-9 w-64">
              <p>Setting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
