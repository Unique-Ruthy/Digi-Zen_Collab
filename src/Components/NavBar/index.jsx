import Button from "../Button";
import styles from "./navbar.module.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import Navprofile from "./../../assets/Profile Circle.png";
import profile from "../../assets/Icon Frame.png";

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.maxWidth}>
        <div>
          <Logo />
        </div>
        <div className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navLists}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Resources" className={styles.link}>
                Resources
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Blog" className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/About" className={styles.link}>
                About
              </Link>
            </li>
          </ul>

          <Link to="/SignUpForm">
            <Button variant="tertiary">Sign Up</Button>
          </Link>

          <Link to="/LoginForm">
            <Button variant="tertiary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.maxWidth}>
        <div>
          <Logo />
        </div>
        <div className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navLists}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Resources" className={styles.link}>
                Resources
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Blog" className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Aboutus" className={styles.link}>
                About
              </Link>
            </li>
          </ul>

          <Link to="/SignUpForm">
            <Button variant="tertiary">Sign Up</Button>
          </Link>

          <Link to="/LoginForm">
            <Button variant="tertiary">Login</Button>
          </Link>
        </div>
        <div className={styles.profileWrapper}>
          <img src={profile} className={styles.profileImg} />
          <p className={styles.userText}>User Profile</p>
        </div>
      </div>
    </div>
  );
};

export const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.maxWidth}>
        <div>
          <Logo />
        </div>
        <div className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navLists}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Resources" className={styles.link}>
                Resources
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Blog" className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.navLists}>
              <Link to="/Aboutus" className={styles.link}>
                About
              </Link>
            </li>
          </ul>

          <Link to="/SignUpForm">
            <Button variant="tertiary">Sign Up</Button>
          </Link>

          <Link to="/LoginForm">
            <Button variant="tertiary">Login</Button>
          </Link>
        </div>
        <div className={styles.profileWrapper}>
          <img src={Navprofile} className={styles.profileImg} />
          <p className={styles.userText2}>User Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
