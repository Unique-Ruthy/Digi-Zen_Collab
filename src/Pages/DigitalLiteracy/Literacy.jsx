// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Literacy.css";
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
import Group from "./../../assets/Group.png";
import Key from "./../../assets/key.png";
import Employees from "./../../assets/Office_employees.png";
import Planning from "./../../assets/Planning_work.png";
import Security from "./../../assets/security.png";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Literacy = () => {
  return (
    <div>
      <div className="literacyWrapper">
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
                <img id="vector2" src={Vector2} alt="VectorImg" />
                <h3 className="overlay-text">Digital Literacy</h3>
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
                  In today`s rapidly evolving digital world, digital literacy is
                  indispensable. It encompasses the skills, knowledge, and
                  behaviours required to effectively and responsibly engage with
                  digital technologies. From basic internet navigation to
                  critical thinking and cybersecurity, digital literacy empowers
                  individuals to make informed decisions, communicate
                  efficiently, and participate meaningfully in the digital
                  society.
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
              <h2>The ABC of Digital Literacy</h2>
              <div className="threeBoxes">
                <img id="key" src={Key} alt="KeyImg" />
                <div className="box">
                  <img src={Group} alt="GroupImg" />
                  <h2 className="boxText">ACCESS</h2>
                  <p>
                    Ensuring equitable access to digital technologies and
                    resources for all individuals, regardless of their
                    socioeconomic background, geographic location, or physical
                    abilities.
                  </p>
                </div>
                <div className="box">
                  <img src={Employees} alt="EmployeesImg" />
                  <h2 className="boxText">BEHAVIOUR</h2>
                  <p>
                    Ensuring equitable access to digital technologies and
                    resources for all individuals, regardless of their
                    socioeconomic background, geographic location, or physical
                    abilities.
                  </p>
                </div>
                <div className="box">
                  <img src={Planning} alt="PlanningImg" />
                  <h2 className="boxText">COMPETENCE</h2>
                  <p>
                    Ensuring equitable access to digital technologies and
                    resources for all individuals, regardless of their
                    socioeconomic background, geographic location, or physical
                    abilities.
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

export default Literacy;
