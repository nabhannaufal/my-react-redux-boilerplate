import React from "react";

import logo from "Images/logo.svg";
import classes from "./index.module.scss";

const LandingPage = () => {
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>React Redux Boilerplate</p>
        <a className={classes.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default LandingPage;
