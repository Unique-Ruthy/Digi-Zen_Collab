import Button from "../Button";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutWrapperMain}>
        <div className={styles.aboutWrapperSecondary}>
          <div className={styles.aboutText1}>
            <h1>About us</h1>
            <p>
              We are here to guide and support you in your digital journey,
              making sure you navigate the online world with confidence and
              care. Let us build a safer, friendlier internet together. Join our
              community today!
            </p>

            <Button variant="secondary" className={styles.aboutBtn}>
              Meet the team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
