import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <div >
      <ul className="nav-ul">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/compare">COMPARE</Link></li>
        <li><Link to="/search">SEARCH</Link></li>
        <li><Link to="/explore">EXPLORE</Link></li>
      </ul>
    </div>
  );
}

export default Nav;