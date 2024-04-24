import logo from "../../assets/digizenLogo.png";
import styles from "./logo.module.css";
import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const Logo = ({ className }) => {
  return (
    <div className={styles.logoWrapper}>
      <div className={clsx(styles.logoIcon, className)}>
        <img src={logo} alt="logo" className={styles.logoNav} />
        <p className={styles.logoText}>Digizens</p>
      </div>
    </div>
  );
};
export default Logo;

// eslint-disable-next-line react/prop-types
export const LogoFooter = ({ className }) => {
  return (
    <div className={styles.logoWrapper}>
      <div className={clsx(styles.logoIcon, className)}>
        <img src={logo} alt="logo" className={styles.footerLogo} />
        <p className={styles.logoTextSecondary}>Digizens</p>
      </div>
    </div>
  );
};
