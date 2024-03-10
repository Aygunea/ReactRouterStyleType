import React from "react";
import Navbar from "../Pages/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          Justice
          <span>.</span>
        </a>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
