import styles from "./footer.module.css";
import { LogoFooter } from "../Logo";
import { LiaFacebookF } from "react-icons/lia";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerWrapper}>
        <LogoFooter className={styles.footerIcon} />
        <div className={styles.footer}>
          <div className={styles.address}>
            <p className={styles.footerList}>
              657, Blessed House, Lagos info@digizen.com{" "}
            </p>
          </div>

          <div className={styles.aboutfooter}>
            <h4 className={styles.aboutHeader}>About us</h4>
            <ul className={styles.footerList}>
              <li>Company</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className={styles.legalDoc}>
            <h4 className={styles.legalHeader}>Legal Issues</h4>
            <ul className={styles.footerList}>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Company Policy</li>
            </ul>
          </div>

          <div className={`${styles.contactus} ${styles.footerList}`}>
            <h4 className={styles.contactText}>Contact us</h4>
            <p className={styles.footerList}>+9000 0000 000</p>

            <div className={styles.socialIcons}>
              <LiaFacebookF className={styles.icons} />
              <GrInstagram className={styles.icons} />
              <RiTwitterXFill className={styles.icons} />
              <RiLinkedinFill className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRightWrapper}>
        <p className={styles.copyRight}>
          copyright &#169; 2024 Company All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
