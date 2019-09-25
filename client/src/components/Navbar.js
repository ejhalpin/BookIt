import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div>
      <Link to="/">Search</Link>
      <Link to="/saved">Saved</Link>
    </div>
  );
};

export default Navbar;
