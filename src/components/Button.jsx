import React from "react";

const Button = ({ text, icon, textSize, style }) => {
  return (
    <button
      className={`border border-slate-500 rounded-full flex  justify-center items-center ${textSize} ${style}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
