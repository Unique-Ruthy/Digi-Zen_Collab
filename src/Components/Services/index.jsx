import Card from "../Card";
import styles from "./service.module.css";
import EduResources from "../../assets/Virtual meeting on a laptop screen (1).png";
import Youngman from "../../assets/young man wearing vr glasses at the aquarium.png";
import youngWoman from "../../assets/Young woman taking selfies for social media (1).png";
import lines from "../../assets/Lines & diamonds.png";

const Service = () => {
  return (
    <div className={styles.serviceWrapper}>
      <div className={styles.serviceHeader}>
        <h1>What we Offer</h1>
        <div className={styles.serviceTextPrimary}></div>
        <div className={styles.serviceTextPrimary1}></div>
        <div className={styles.serviceTextPrimary2}></div>
        <div className={styles.serviceTextPrimary3}></div>
      </div>

      <div className={styles.cardWrapper} alt="serviceSession">
        <Card>
          <div className={styles.cardContentWrapper}>
            <img
              src={youngWoman}
              alt="Edu Resources"
              className={styles.secondCard}
            />
            <div className={styles.serviceText}>
              <h4>Interactive modules</h4>
              <p>
                Learn through interactive lessons, trivia, games and quizzes to
                easily grasp the various areas of the digital world and maximize
                your citizenship
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className={styles.cardContentWrapper}>
            <img
              src={Youngman}
              alt="Edu Resources"
              className={styles.firstCard}
            />

            <div className={styles.serviceText}>
              <h4>Educational Resources</h4>
              <p>
                Access informative articles, guides, and videos covering a wide
                range of digital citizenship topics from online safety and
                privacy to media literacy and cyber bullying prevention
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className={styles.cardContentWrapper}>
            <img
              src={EduResources}
              alt="Edu Resources"
              className={styles.thirdCard}
            />

            <div className={styles.serviceText}>
              <h4>Community Support</h4>
              <p>
                Connect with like minded individuals in our online community
                forums. Share experiences, seek advice, and collaborate on
                initiatives to promote positive digital citizenship
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <img src={lines} alt="lines" className={styles.lines} />
      </div>
    </div>
  );
};

export default Service;
