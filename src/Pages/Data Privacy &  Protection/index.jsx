// eslint-disable-next-line no-unused-vars
import React from "react";
import "./dataSecurity.css";
import { NavBar } from "../../Components/NavBar/index";
import Footer from "../../Components/Footer/index";
import BugImg from "./../../assets/bug.png";
import Shape from "./../../assets/shape.png";
import Vector2 from "./../../assets/Vector_2.png";
import Subs from "./../../assets/subscription.png";
import CarbonHybrid from "./../../assets/carbon_hybrid.png";
import Carbon from "./../../assets/carbon.png";
import Dashicons from "./../../assets/dashicons.png";
import Computer from "./../../assets/computer.png";
import Key from "./../../assets/key.png";
import Control from "./../../assets/Woman working with analytics interface.png";
import Awareness from "./../../assets/Finding a way, hiker looking at map.png";
import Behaviour from "./../../assets/Hiring a new employee or partnership.png";
import Security from "./../../assets/security.png";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const DataPrivacy = () => {
  return (
    <div>
      <div className="dataPrivacyWrapper">
        <div>
          <NavBar />
        </div>
        <div className="overallContainer">
          <div className="upperside">
            <div className="tripleImg">
              <div className="leftSideImg">
                <img id="bug" src={BugImg} alt="BugImg" />
              </div>
              <div className="middleSideImg">
                <img id="vector" src={Vector2} alt="VectorImg" />
                <h3 className="overlay-text">Data Privacy and Protection</h3>
              </div>
              <div className="lastImg">
                <img id="shape" src={Shape} className="shape" alt="Shape" />
                <img
                  src={Subs}
                  alt="SubscriptionImg"
                  className="overlay-image"
                />
              </div>
            </div>
            <div className="textArea">
              <div className="firstImg">
                <img className="hybrid" src={CarbonHybrid} alt="HybridImg" />
              </div>
              <div className="texts">
                <p>
                  Data privacy and protection are fundamental principles that
                  involve safeguarding individuals` personal information from
                  unauthorized access, use, or disclosure in digital
                  environments. In today`s interconnected world, where vast
                  amounts of data are generated, collected, and processed,
                  maintaining privacy is essential for preserving individuals`
                  autonomy, dignity, and trust.
                </p>
                <p className="p2">
                  This overview explores the significance of digital literacy in
                  fostering responsible digital citizenship and provides
                  practical tips for enhancing digital literacy skills. Join us
                  on the journey to become savvy and responsible digital
                  citizens.
                </p>
              </div>
              <div className="secondImg">
                <img className="hyb" src={Carbon} alt="HybImg" />
              </div>
            </div>
            <div className="buttons">
              <Button variant="catBtn">Download 101 Guide</Button>
              <Button variant="catBtn">Take Quiz</Button>
              <Button variant="catBtn">Blog</Button>
            </div>
          </div>
          <div className="lowerside">
            <div className="boxes">
              <h2>The ABC of DATA PRIVACY AND PROTECTION</h2>
              <div className="threeBoxes">
                <img id="key" src={Key} alt="KeyImg" />
                <div className="box">
                  <img src={Awareness} alt="awarenessImg" />
                  <h2 className="boxText">AWARENESS</h2>
                  <p>
                    Understand the importance of safeguarding personal data and
                    the risks of sharing it online.
                  </p>
                </div>
                <div className="box">
                  <img src={Behaviour} alt="behaviourImg" />
                  <h2 className="boxText">BEHAVIOUR</h2>
                  <p>
                    Adopt privacy-conscious behaviours like using strong
                    passwords and reviewing privacy settings.
                  </p>
                </div>
                <div className="box">
                  <img src={Control} alt="controlImg" />
                  <h2 className="boxText">CONTROL</h2>
                  <p>
                    Take charge of personal data by managing privacy settings
                    and permissions on devices and accounts.
                  </p>
                </div>
              </div>
            </div>
            <div className="remains">
              <h3>Become a digital literate today with Digizens</h3>
              <div className="others">
                <img src={Computer} alt="ComputerImg" />
                <div className="remainsButton">
                  <Link to="/Resources">
                    <Button variant="catBtn">Resource Bank</Button>
                  </Link>
                </div>
                <img src={Dashicons} alt="Dashicons" />
              </div>
            </div>

            <div className="lastly">
              <img src={Security} alt="SecurityImg" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DataPrivacy;
