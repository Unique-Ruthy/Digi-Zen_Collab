// eslint-disable-next-line no-unused-vars
import React from "react";
import "./digitalCitizenship.css";
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
import awareness from "./../../assets/happy woman holding diploma at graduation.png";
import Benefit from "./../../assets/Teamwork of colleagues in the office.png";
import communication from "./../../assets/Woman in marketing and advertising.png";
import Security from "./../../assets/security.png";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const DigiCitizenship = () => {
  return (
    <div>
      <div className="digitalCitizenshipWrapper">
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
                <img id="vector4" src={Vector2} alt="VectorImg" />
                <h3 className="overlay-text">Digital Citizenship</h3>
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
                  Digital citizenship refers to the responsible and ethical use
                  of technology and digital platforms, encompassing a range of
                  behaviours, skills, and attitudes that promote positive
                  interactions and engagement in online spaces. It involves
                  understanding one`s rights and responsibilities as a digital
                  user, practising respectful and ethical behaviour online, and
                  participating actively in digital communities. Digital
                  citizenship encompasses various aspects, including:.
                </p>
                <p className="p2">
                  This overview explores the significance of fostering
                  responsible digital citizenship and provides practical tips
                  for enhancing digital literacy skills. Join us on the journey
                  to become savvy and responsible digital citizens.
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
              <h2>The ABC OF DIGITAL CITIZENSHIP</h2>
              <div className="threeBoxes">
                <img id="key" src={Key} alt="KeyImg" />
                <div className="box">
                  <img src={awareness} alt="awarenessImg" />
                  <h2 className="boxText">AWARENESS</h2>
                  <p>
                    Understand the rights, responsibilities, and opportunities
                    of being a digital citizen.
                  </p>
                </div>
                <div className="box">
                  <img src={Benefit} alt="benefitImg" />
                  <h2 className="boxText">BENEFIT</h2>
                  <p>
                    Seek to maximize the positive impact of digital technology
                    on individuals, communities, and society as a whole.
                  </p>
                </div>
                <div className="box">
                  <img src={communication} alt="communicationImg" />
                  <h2 className="boxText">COMMUNICATION</h2>
                  <p>
                    Engage in meaningful and constructive interactions while
                    being mindful of others` feelings and perspectives.
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

export default DigiCitizenship;
