import React from "react";
import "./component.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <Link to="/" className="header-link">
        <h1 className="header-text">LEARNABLE TASK</h1>
      </Link>
    </div>
  );
}
