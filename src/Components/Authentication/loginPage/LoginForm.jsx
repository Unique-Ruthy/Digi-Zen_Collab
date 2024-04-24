import { useState, useRef, useEffect, useContext } from "react";
import styles from "./LoginForm.module.css";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { IoIosClose } from "react-icons/io";
import Logo from "./../../../assets/digizenLogo.png";
import { Link } from "react-router-dom";
import Button from "../../Button";
// import Resources from "../../../Pages/Resources";
import Resources from "../../../Pages/Resources/Resources";
import AuthContext from "../../../context/AuthProvider";
import axios from "../../../api/axios";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response))
      const accessToken = response?.accessToken;
      const roles = response?.data?.roles;
      // console.log(email, pwd);
      setAuth({ email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.responsible?.status === 401) {
        setErrMsg("Unauthorised User");
      } else {
        setErrMsg("Login Failed");
      }
      console.log(err);
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
        <div className={styles.loginWrapper}>
          <div className={styles.formWrapper}>
            <form className={styles.formWrap} onSubmit={onSubmitHandler}>
              <Link to="/" className={styles.headerLink}>
                <div className={styles.imageSpace}>
                  <img
                    src={Logo}
                    alt="Digizen Logo"
                    className={styles.imageStyle}
                  />
                  <p>Digizen</p>
                </div>
              </Link>
              <div className={styles.registerLink}>
                <p
                  ref={errRef}
                  className={errMsg ? styles.errmsg : styles.offscreen}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <h2 className={styles.loginHeader}>Log in</h2>
                <p>
                  Don`t have an account? <Link to="/Register">Sign up</Link>
                </p>
              </div>

              <div className={styles.socialIco}>
                <Button variant="authBtn" className={styles.fab} type="button">
                  <FaFacebook className={styles.faceBook} />
                  Log in with Facebook
                </Button>
                <Button variant="authBtn" className={styles.fog} type="button">
                  <FcGoogle className={styles.gooGle} />
                  Log in with Google
                </Button>
              </div>

              <div className={styles.orLine}>
                <hr className={styles.wfull} />
                <p className={styles.orText}>or</p>
              </div>

              <div className={styles.inputFieldWrapper}>
                <div className={styles.inputBox}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                  <IoEyeOffSharp className={styles.icon} />
                </div>

                <div className={styles.rememberForgot}>
                  <label htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    Remember me{" "}
                  </label>
                  <Link to="#">Forgot your password?</Link>
                </div>

                <Button
                  variant="authBtnLoginSubmit"
                  className={styles.submit}
                  type="submit"
                >
                  Log In
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
