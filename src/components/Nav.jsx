import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav({ onSearch, random }) {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <p className="navbar-brand">Rick & Morty by ElisSsS</p>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-secondary" onClick={() => random()}>
                Quiero un random!
              </button>
            </li>
            <li className="nav-item">
              <Link to={"/about"}>
                <button className="btn btn-outline-warning">About</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"}>
                <button className="btn btn-outline-warning">Home</button>
              </Link>
            </li>
          </ul>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </>
  );
}

export default Nav;
