import styles from "./category.module.css";
import { HiArrowRight } from "react-icons/hi2";
import youngLady from "../../assets/young woman with vr glasses.png";
import cyberSecurity from "../../assets/cybersecurity.png";
import instagram from "../../assets/instagram.png";
import privacy from "../../assets/privacy-tip.png";
import social from "../../assets/social-myspace.png";
import DigitalLiteracy from "../../assets/Digital Literacy.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryImageWrap}>
        <img
          src={youngLady}
          alt="a youngLady"
          className={styles.categoryImage}
        />
      </div>

      <div className={styles.categoryHeader}>
        <h1>Category</h1>
        <div className={styles.categoryText}></div>
        <div className={styles.categoryText1}></div>
        <div className={styles.categoryText2}></div>
        <div className={styles.categoryText3}></div>
      </div>

      <div>
        <ul className={styles.category}>
          <Link to="/DigitalCitizenship" className={styles.links}>
            <ul className={styles.categoryLists}>
              <li className={styles.categoryList}>
                <img
                  src={social}
                  alt="Digital Citizenship"
                  className={styles.imgWrapper}
                />
              </li>
              <p>Digital Citizen</p>
              <HiArrowRight className={styles.categoryArrow} />
            </ul>
          </Link>

          <Link to="/DataPrivacy" className={styles.links}>
            <ul className={styles.categoryLists}>
              <li className={styles.categoryList}>
                <img
                  src={privacy}
                  alt="privacy setting"
                  className={styles.imgWrapper}
                />
              </li>
              <p>Data Privacy</p>
              <HiArrowRight className={styles.categoryArrow} />
            </ul>
          </Link>

          <Link to="/SocialMediaSafety" className={styles.links}>
            <ul className={styles.categoryLists}>
              <li className={styles.categoryList}>
                <img
                  src={instagram}
                  alt="Social Media Safety"
                  className={styles.imgWrapper}
                />
              </li>
              <p>Social Media Safety</p>
              <HiArrowRight className={styles.categoryArrow} />
            </ul>
          </Link>

          <Link to="/Literacy" className={styles.links}>
            <ul className={styles.categoryLists}>
              <li className={styles.categoryList}>
                <img
                  src={DigitalLiteracy}
                  alt="Digital Literacy"
                  className={styles.imgWrapper}
                />
              </li>
              <p>Digital Literacy</p>
              <HiArrowRight className={styles.categoryArrow} />
            </ul>
          </Link>

          <Link to="/CyberSecurity" className={styles.links}>
            <ul className={styles.categoryLists}>
              <li className={styles.categoryList}>
                <img
                  src={cyberSecurity}
                  alt="Cyber Security"
                  className={styles.imgWrapper}
                />
              </li>
              <p>Cyber Security</p>
              <HiArrowRight className={styles.categoryArrow} />
            </ul>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Category;
