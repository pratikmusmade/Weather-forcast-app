import React from "react";
import backgroundImage from "../assets/backgroundImage.jpg";

function ContainerWithBgImg({ children }) {
  return (
    <div className="w-full h-full  relative bg-slate-700 flex">
      <img
        src={backgroundImage}
        className="w-full h-full bg-no-repeat absolute bg-cover bg-center bg-fixed opacity-65 z-0"
     />
      {children}
    </div>
  );
}

export default ContainerWithBgImg;
