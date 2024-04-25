import styles from "./editProfile.module.css";
import { IoMdArrowBack } from "react-icons/io";
import Button from "../../Components/Button";
import profile from "../../assets/profileCircle.png";
import user from "../../assets/userProfile.png";
import lock from "../../assets/lock.png";
import hybrid from "../../assets/carbonHybridNetworking.png";
import wheel from "../../assets/Wheel.png";
const EditProfile = () => {
  return (
    <div className={styles.editWrapper}>
      <div className={styles.totalWrapper}>
        <div className={styles.profIcon}>
          <div className={styles.iconWrapper}>
            <IoMdArrowBack />
          </div>
          <div className={styles.profileWrapper}>
            <p className={styles.userText}>Tanya Karani</p>
            <img src={profile} className={styles.profileImg} />
          </div>
        </div>

        <div className={styles.userWrapper}>
          <div className={styles.lockWrapper}>
            <img src={lock} className={styles.lockImage} />
          </div>
          <img src={user} className={styles.userImage} />
        </div>

        <div className={styles.totalInputBoxContainer}>
        <div className={styles.totalInputBox}>
          <div className={styles.hybridSite}>
            <div className={styles.hybridWrapper}>
              <img src={hybrid} className={styles.hybridImage} />
            </div>
            <div className={styles.inputBox}>
              <label type="text">Name</label>
              <input type="name" placeholder="" id="name" required />
            </div>
          </div>

          <div className={styles.profContainer}>
            <div className={styles.inputBox}>
              <label type="text">Age</label>
              <input type="text" placeholder="" className="age" required />
            </div>

            <div className={styles.inputBox}>
              <label type="text">Location</label>
              <input type="text" placeholder="" className="location" required />
            </div>
          </div>

          <div className={styles.occupationContainer}>
          <div className={styles.inputBox}>
            <label type="text">Occupation</label>
            <input type="text" placeholder="" id="ocupation" required />
          </div></div>
        </div>
        </div>
        <div className={styles.interestWrapper}>
          <p>Interests</p>
          <div className={styles.wheelWrapper}>
            <img src={wheel} className={styles.wheelImage} />
          </div>
        </div>

        <div className={styles.listWrapper}>
          <div className={styles.interestList}>
            <div className={styles.interestListThree}>
              <div className={styles.interestLists}>Digital Literacy</div>
              <div className={styles.interestLists}>Online Privacy</div>
              <div className={styles.interestLists}>Digital Identity</div>
            </div>

            <div className={styles.interestListTwo}>
              <div className={styles.cyberLists}>Cyber Security</div>
              <div className={styles.interestLists}>
                Digital Rights and Responsibilities
              </div>
            </div>
            <div className={styles.interestListTwo}>
              <div className={styles.interestLists}>Copyright and Fair Use</div>
              <div className={styles.DigitalLists}>Digital Wellbeing</div>
            </div>
            <div className={styles.interestListThree}>
              <div className={styles.parentalLists}>Parental Control</div>
              <div className={styles.interestLists}>Cyber Bullying</div>
              <div className={styles.interestLists}>Information Literacy</div>
            </div>
          </div>
        </div>

        <div className="button">
          <Button variant="profBtn">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;