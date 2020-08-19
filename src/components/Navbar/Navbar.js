import React from "react";
import Image from "../../Image.svg";
import "./navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img  src={Image} alt="city tours company" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
