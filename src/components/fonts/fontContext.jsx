import React, { createContext, useContext } from "react";
import "./fonts.css";
const FontContext = createContext();
export const useFont = () => useContext(FontContext);
export const FontProvider = ({ children }) => {
  const fontStyles = {
    fontFamily: "Poppins",
  };

  return (
    <FontContext.Provider value={fontStyles}>{children}</FontContext.Provider>
  );
};
