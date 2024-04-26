import { useState } from "react";
import styles from "./forgot.module.css";
import Logo from "../../assets/digizenLogo.png";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { sendVerificationCode } from "./../../api/api4forgot"; // Import your API function to send verification code

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Call the API function to send the verification code
      await sendVerificationCode(email);
      setIsSent(true);
    } catch (error) {
      setError("Failed to send verification code. Please try again.");
    }
  };

  return (
    <div className={styles.forgotWrapper}>
      <div className={styles.forgotWrap}>
        <div action="" className={styles.forgotForm}>
          <Link to="/" className={styles.headerLink}>
            <div className={styles.forgotSpace}>
              <img
                src={Logo}
                alt="Digizen Logo"
                className={styles.forgotStyle}
              />
              <p>Digizen</p>
            </div>
          </Link>

          <div className={styles.forgotTextWrap}>
            <h2 className={styles.forgotText}>Forgot Password?</h2>
            {!isSent && (
              <p className={styles.forgotLine}>
                Enter the email associated with your account,
                <br />
                we will send a 4-digit code for verification to your email.
              </p>
            )}
            {isSent && (
              <p className={styles.forgotLine}>
                A verification code has been sent to your email.
              </p>
            )}
          </div>

          <div className={styles.inputFieldWrapper}>
            <div className={styles.forgotContainer}>
              <div className={styles.inputBox}>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="submit"
                    variant="forgotBtn"
                    className={styles.forgotSubmit}
                  >
                    {isSent ? "Resend Code" : "Continue"}
                  </Button>
                </form>
                {error && <p className={styles.error}>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
