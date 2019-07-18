import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        <button type="button" class="btn btn-danger">Search</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
        <button type="button" class="btn btn-danger">Saved</button>
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
