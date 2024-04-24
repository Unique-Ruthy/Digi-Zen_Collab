// eslint-disable-next-line no-unused-vars
import React from "react";
import "./cybersecurity.css";
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
import Security from "./../../assets/security.png";
import Key from "./../../assets/key.png";
import Backup from "./../../assets/Signing and stamping contract agreement.png";
import Remote from "./../../assets/Remote work.png";
import Man from "./../../assets/Man talking to support chatbot.png";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const CyberSecurity = () => {
  return (
    <div>
      <div className="cyberWrapper">
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
                <h3 className="securityText">Cybersecurity</h3>
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
                  Cybersecurity involves protecting digital systems, networks,
                  and data from cyber threats, including hackers, malware, and
                  unauthorized access. It encompasses a range of practices,
                  technologies, and processes designed to prevent, detect, and
                  respond to security breaches and vulnerabilities. Key aspects
                  of cybersecurity include implementing robust security
                  measures, such as firewalls and encryption, educating users
                  about cybersecurity best practices.
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
              <h2>The ABC of CYBERSECURITY</h2>
              <div className="threeBoxes">
                <img id="key" src={Key} alt="KeyImg" />
                <div className="box">
                  <img src={Remote} alt="remoteImg" />
                  <h2 className="boxText">ADAPTATION</h2>
                  <p>
                    Continuously adapt to evolving cybersecurity threats by
                    staying informed about new risks and vulnerabilities.
                  </p>
                </div>
                <div className="box">
                  <img src={Backup} alt="backImg" />
                  <h2 className="boxText">BACKUP</h2>
                  <p>
                    Implement regular data backup practices to ensure the
                    protection and availability of important information.
                  </p>
                </div>
                <div className="box">
                  <img src={Man} alt="manImg" />
                  <div className="secureBox">
                    <h2 className="boxText">CAUTIOUSNESS</h2>
                    <p>
                      Exercise caution when interacting online and engaging with
                      digital content. This involves being skeptical of
                      unsolicited emails, messages, or requests for personal
                      information..
                    </p>
                  </div>
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
                  </Link>{" "}
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

export default CyberSecurity;
