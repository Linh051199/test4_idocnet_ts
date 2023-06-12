import React from "react";
import "./GlobalStyle.scss";

interface IProp {
  children: any;
}

const GlobalStyle: React.FC<IProp> = ({ children }) => {
  return <div>{children}</div>;
};

export default GlobalStyle;
