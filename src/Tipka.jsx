import React from "react";
import { useContext } from "react";
import ThemeContext from "./Context";

const Tipka = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <button className={theme}>tema</button>
    </div>
  );
};

export default Tipka;
