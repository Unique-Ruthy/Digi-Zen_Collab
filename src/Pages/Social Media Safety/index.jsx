// eslint-disable-next-line no-unused-vars
import React from "react";
import "./socialMediaSafety.css";
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
import AdjustSetting from "./../../assets/Finding a way, hiker looking at map.png";
import BlockAccounts from "./../../assets/Young woman with blonde hair sitting with laptop.png";
import careful from "./../../assets/Young woman with tablet.png";
import Security from "./../../assets/security.png";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const SocialMediaSafety = () => {
  return (
    <div>
      <div className="socialMediaWrapper">
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
                <h3 className="overlay-text">Social Media Safety</h3>
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
                  Social media safety involves adopting measures to protect
                  personal information and privacy while engaging with social
                  networking platforms. It encompasses actions such as
                  configuring privacy settings to control who can access your
                  profile and posts, using strong and unique passwords, being
                  selective about accepting friend requests or followers, and
                  exercising caution when sharing personal information or
                  clicking on links.
                </p>
                <p className="p2">
                  This overview explores the significance of prioritizing data
                  privacy and provides practical tips for enhancing digital
                  literacy skills. Join us on the journey to become savvy and
                  responsible digital citizens.
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
              <h2>The ABC OF SOCIAL MEDIA SAFETY</h2>
              <div className="threeBoxes">
                <img id="key" src={Key} alt="KeyImg" />
                <div className="box">
                  <img src={AdjustSetting} alt="adjustmentImg" />
                  <h2 className="boxText">ADJUST SETTINGS</h2>
                  <p>
                    Regularly review and adjust the privacy settings on your
                    social media accounts to ensure they align with your
                    preferences and comfort level.
                  </p>
                </div>
                <div className="box">
                  <img src={BlockAccounts} alt="blockImg" />
                  <h2 className="boxText">BLOCK ACCOUNTS</h2>
                  <p>
                    Be proactive in blocking and reporting suspicious accounts
                    or activity on social media.
                  </p>
                </div>
                <div className="box">
                  <img src={careful} alt="carefilImg" />
                  <h2 className="boxText">CAREFUL SHARING</h2>
                  <p>
                    Exercise caution when sharing personal information, photos,
                    or updates on social media platforms. Consider the potential
                    risks and consequences of sharing sensitive information
                    publicly.
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

export default SocialMediaSafety;
