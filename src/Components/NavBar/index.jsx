import { useState } from "react";
import Button from "../Button";
import styles from "./navbar.module.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import Navprofile from "./../../assets/Profile Circle.png";
import profile from "../../assets/Icon Frame.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.maxWidth}>
        <div>
          <Logo />
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <div className={`${styles.navBar} ${isOpen ? styles.open : ""}`}>
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

          <Link to="/Register">
            <Button variant="tertiary">Sign Up</Button>
          </Link>

          <Link to="/Login">
            <Button variant="tertiary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.maxWidth}>
        <div>
          <Logo />
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <div className={`${styles.navBar} ${isOpen ? styles.open : ""}`}>
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

          <Link to="/Register">
            <Button variant="tertiary">Sign Up</Button>
          </Link>

          <Link to="/Login">
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.maxWidth}>
        <div>
          <Logo />
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <div className={`${styles.navBar} ${isOpen ? styles.open : ""}`}>
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

          <Link to="/Register">
            <Button variant="tertiary">Sign Up</Button>
          </Link>

          <Link to="/Login">
            <Button variant="tertiary">Login</Button>
          </Link>
        </div>
        <div
          className={`${styles.profileWrapper} ${isOpen ? styles.open : ""}`}
        >
          <img src={Navprofile} className={styles.profileImg} />
          <p className={styles.userText2}>User Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
