import Button from "../Button";
import styles from "./hero.module.css";
// import shapes from "../../assets/Digizen name in squares.png";
// import square from "../../assets/DigizensSquare.png";
import Navbar from "../NavBar";

const Homepage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.nav}>
          <Navbar />
        </div>

        <div className={styles.shapesWrapper}>
          <div className={styles.squareShapes}></div>
          <div className={styles.squareShape}>
            <div className={styles.heroText}>
              <h1>Digizen</h1>
              <p>Welcome to Digizens! Where Online Safety Feels Like Home!</p>
              <Button variant="tertiaryBtn">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
