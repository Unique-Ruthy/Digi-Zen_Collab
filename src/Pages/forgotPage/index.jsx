import React, { useState } from "react";
import styles from "./forgot.module.css";
import Logo from "../../assets/digizenLogo.png";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import axios from "axios";

const ForgotPassword = () => {
  return (
    <div className={styles.forgotWrapper}>
      <div className={styles.forgotWrap}>
        <div action="" className={styles.forgotForm}>
          <Link to="/" className={styles.headerLink}>
            <div className={styles.forgotSpace}>
              <img
                src={Logo}
                alt="Description of the image"
                className={styles.forgotStyle}
              />
              <p>Digizen</p>
            </div>
          </Link>

          {/* <IoIosClose className={styles.closeIcon} /> */}

          <div className={styles.forgotTextWrap}>
            <h2 className={styles.forgotText}>Forgot Password?</h2>
            <p className= {styles.forgotLine}>
              Enter the email associated with your account, <br/>we will send a 4
              digit code for verification to <br />your email
            </p>
          </div>

          <div className={styles.inputFieldWrapper}>
            <div className={styles.forgotContainer}>
              <div className={styles.inputBox}>
                <form action="">
                  <label htmlFor="text">Your email</label>
                  <input type="email" placeholder="" id="email" required />
                </form>
              </div>
            </div>
          </div>

          <Button
            variant="forgotBtn"
            className={styles.forgotSubmit}
            type="submit"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;