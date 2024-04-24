import Logo from "../../Components/Logo";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div>
        <Logo />
      </div>

      <div>
        <div>
          <div>write up</div>
          <div> image</div>
        </div>

        <div>profile container</div>
      </div>

      <div>
        Housing Container
        <div>
          Recent Activities
          <div>
            <img />
            <div>for writeup</div>
          </div>
          <div>
            <img />
            <div>for writeup</div>
          </div>
          <div>
            <img />
            <div>for writeup</div>
          </div>
          <div>
            <img />
            <div>for writeup</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
