import React from "react";
import PratikProfile from '../assets/PraikProfile.jpeg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';function Header() {
  console.log(PratikProfile)
  return (
    <header className=" w-full flex">
      <div
      style={{backgroundColor : ""}}
       className="flex justify-center items-center bg-emerald-700 text-white m-5 px-6 py-1  rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="27"
          width="27"
          fill="white"
          viewBox="0-960 960 960"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <input
          type="text"
          className="h-7 mx-4  pr-36 py-5 bg-transparent outline-none font-NotoSans text-sm"
          placeholder="Search City"
        />
      </div>

    <div className=" bg-emerald-700 text-white m-5 px-6 py-1 rounded-full flex items-center gap-3 ml-auto">
      <img className="h-7 w-7 rounded-full" src={PratikProfile} alt="" />
      <span>Pratik Musmade <ExpandMoreIcon/></span>
    </div>

    </header>
  );
}

export default Header;
