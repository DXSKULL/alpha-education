import React from "react";
import { Link } from "react-router-dom";
import {ROUTES} from "../../utils/consts"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to={ROUTES.HOME_PAGE} className="nav-link">
            HomePage
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.BLOGS_PAGE} className="nav-link">
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
