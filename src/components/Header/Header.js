import React from "react";
import { Link } from "react-router-dom";

import Button from "../utils/Button/Button";
import logo from "../../assets/InSportify_logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const navElement = ["Home", "Events", "Venues", "About"];
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo"></img>
          </Link>
        </div>
        <ul className={styles.nav}>
          {navElement.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
      </div>

      <div className={styles.actions}>
        <Button to="/">Create Events</Button>
        <Button to="">Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
