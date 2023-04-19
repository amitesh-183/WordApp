import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between py-6 text-white bg-red-400 px-28">
      <h1 className="text-2xl font-bold ">UseState</h1>
      <nav>
        <ul className="flex gap-7">
          <li className=" hover:text-red-800">
            <Link to="/form"> WORD</Link>
          </li>
          <li className=" hover:text-red-800">
            <Link to="/todo"> TODO</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
