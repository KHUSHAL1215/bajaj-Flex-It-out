import React from "react";
import message from "../assets/message_icon.png";
import { useContext } from "react";
import { Context } from "../context/Context";

export const SidebarChats = ({item}) => {
    
    const {onSent} = useContext(Context) ;
    
    
    let item2 = item.slice(0, 30)+"...";
    
    {
      if(item.length < 30){
        item2 = item ;
      }
    }


    const clickHandler = ()=>{
        onSent(item) ;
    }

    return (
    <div onClick={clickHandler} className="flex items-center hover:bg-[rgb(233,238,246)] gap-3 rounded-full p-1">
      <img src={message} className="w-[20px] h-[20px]" alt="Message Icon" />
      <div className="flex justify-start hover:bg-[rgb(233,238,246)] items-center rounded-full h-9 w-64">
        <p>{item2} </p>
      </div>
    </div>
  );
};
