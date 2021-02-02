import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaUser,
  FaVideo,
  FaRegIdCard,
} from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/" className="nav__links">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/video" className="nav__links">
            <FaVideo />
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="nav__links">
            <FaCalendarAlt />
          </Link>
        </li>
        <li>
          <Link to="/user" className="nav__links">
            <FaUser />
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav__links">
            <FaRegIdCard />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
