import React from "react";
import Icon from "@mdi/react";
import { mdiTable, mdiViewGridOutline } from "@mdi/js";

const Navbar = ({ isGrid, handleChangeView }) => {
  return (
    <div className="h-20 bg-gray-200 flex items-center justify-between px-6 rounded my-2">
      <h1 className="text-2xl">Seznam studentů</h1>
      <button
        onClick={handleChangeView}
        className="text-blue-500 bg-inherit flex items-center m-2 p-1 rounded-md border-2 border-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-300"
      >
        <Icon size={1} path={isGrid ? mdiTable : mdiViewGridOutline} />{" "}
        {isGrid ? "Tabulka" : "Grid"}
      </button>
    </div>
  );
};

export default Navbar;
