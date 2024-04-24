// eslint-disable-next-line no-unused-vars
import { useState, useRef, useEffect } from "react";
import styles from "./SignUp.module.css";
import {
  // FaFontAwesomeIcon,
  FaCircleInfo,
  FaFacebook,
  FaXmark,
  FaCheck,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../assets/digizenLogo.png";
import { Link } from "react-router-dom";
import Button from "../../Button/index.jsx";
// import Resources from "./../../category";
// import Resources from "./../../Pages/Resources/Resources.jsx";
import Resources from "../../../Pages/Resources/Resources.jsx";
import axios from "./../../../api/axios.js";

// import { Form } from "formik";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,22}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8, 24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);

      // clear input fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <Resources />
          <h1>Success!</h1>
        </section>
      ) : (
        <div className={styles.signWrapper}>
          <div className={styles.formWrap}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
              <Link to="/" className={styles.headerLink}>
                <div className={styles.signSpace}>
                  <img
                    src={Logo}
                    alt="Description of the image"
                    className={styles.imgStyle}
                  />
                  <p>Digizen</p>
                </div>
              </Link>

              {/* <IoIosClose className={styles.closeIcon} /> */}

              <div className={styles.signTextWrap}>
                <p
                  ref={errRef}
                  className={errMsg ? styles.errmsg : styles.offscreen}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <h2 className={styles.upText}>Sign Up</h2>
                <div className={styles.signLink}>
                  <p>
                    Have an account already?
                    <span>
                      <Link to="/Login" className={styles.span}>
                        Log In
                      </Link>
                    </span>
                  </p>
                </div>
              </div>

              <Button
                variant="authBtn"
                className={styles.signFab}
                type="submit"
              >
                <FaFacebook className={styles.faceBook} />
                Sign up with Facebook
              </Button>
              <Button
                variant="authBtn"
                className={styles.signFog}
                type="submit"
              >
                <FcGoogle className={styles.gooGle} />
                Sign up with Google
              </Button>

              <div className={styles.inputFieldWrapper}>
                <div className={styles.orLine}>
                  <hr className={styles.wfull} />
                  <p className={styles.orText}>OR</p>
                </div>

                <div className={styles.signContainer}>
                  <div className={styles.inputBox}>
                    <label htmlFor="fullname">
                      FullName:
                      <div className={styles.checksIcon}>
                        <span
                          className={validName ? styles.valid : styles.hide}
                        >
                          <FaCheck />
                        </span>
                        <span
                          className={
                            validName || !user ? styles.hide : styles.invalid
                          }
                        >
                          <FaXmark />
                        </span>
                      </div>
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      ref={userRef}
                      autoComplete="off"
                      placeholder="Enter FullName"
                      required
                      // value={values.FullName}
                      onChange={(e) => setUser(e.target.value)}
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        userFocus && user && !validName
                          ? styles.instructions
                          : styles.offscreen
                      }
                    >
                      <FaCircleInfo /> 4 to 24 characters.
                      <br />
                      Must begin with a letter. <br />
                      Letters, numbers, underscores, hyphens allowed
                    </p>
                  </div>

                  <div className={styles.inputBox}>
                    <label htmlFor="email" className={styles.labelWrapper}>
                      Email:
                      <div className={styles.checksIcon}>
                        <span
                          className={validEmail ? styles.valid : styles.hide}
                        >
                          <FaCheck />
                        </span>
                        <span
                          className={
                            validEmail || !user ? styles.hide : styles.invalid
                          }
                        >
                          <FaXmark />
                        </span>
                      </div>
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      id="email"
                      required
                      // value={values.email}
                      ref={userRef}
                      autoComplete="off"
                      // value={values.FullName}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="emailnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                    <p
                      id="emailnote"
                      className={
                        emailFocus && !validEmail
                          ? styles.instructions
                          : styles.offscreen
                      }
                    >
                      <FaCircleInfo /> Must contain @.
                      <br />
                      Enter a valid email address. <br />
                    </p>
                  </div>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="password">
                    Password:
                    <div className={styles.checksIcon}>
                      <span className={validPwd ? styles.valid : styles.hide}>
                        <FaCheck />
                      </span>
                      <span
                        className={
                          validPwd || !pwd ? styles.hide : styles.invalid
                        }
                      >
                        <FaXmark />
                      </span>
                    </div>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    required
                    onChange={(e) => setPwd(e.target.value)}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd
                        ? styles.instructions
                        : styles.offscreen
                    }
                  >
                    <FaCircleInfo /> 8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, <br /> a
                    number and a special character. <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                  </p>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <div className={styles.checkIcon}>
                      <span
                        className={
                          validMatch && matchPwd ? styles.valid : styles.hide
                        }
                      >
                        <FaCheck />
                      </span>
                      <span
                        className={
                          validMatch || !matchPwd ? styles.hide : styles.invalid
                        }
                      >
                        <FaXmark />
                      </span>
                    </div>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirm_pwd"
                    required
                    onChange={(e) => setMatchPwd(e.target.value)}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch
                        ? styles.instructions
                        : styles.offscreen
                    }
                  >
                    <FaCircleInfo /> 8 to 24 characters.
                    <br />
                    Must match the first password input field. <br />
                  </p>
                </div>
              </div>

              <Button
                disabled={!validName || !validPwd || !validMatch ? true : false}
                variant="authBtnSubmit"
                // className={styles.signSubmit}
                // type="submit"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
