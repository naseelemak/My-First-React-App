import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to={`/`}>
        <span className="font-bold ">AppName</span>
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
