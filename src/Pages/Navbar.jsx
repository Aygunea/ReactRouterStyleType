import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <Dropdown
            title={
              <NavLink activeclassname="active" to="/practice">
                Practice Areas
                <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
            }
          >
            <ul>
              <li>
                <NavLink to="/">Elements</NavLink>
              </li>
              <li>
                <NavLink to="/">
                    Menu Two
                <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">Menu Three</NavLink>
              </li>
            </ul>
          </Dropdown>
        </li>
        <li>
          <NavLink activeclassname="active" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/attorneys">
            Attorneys
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
