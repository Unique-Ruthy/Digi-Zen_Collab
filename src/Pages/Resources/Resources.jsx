import { useState } from "react";
import "./Resources.css";

import Footer from "../../Components/Footer/index";

import People from "./../../assets/People.png";
import Data from "./../../assets/Datasecurity.png";
import Mobile from "./../../assets/Mobile.png";
import Isometric from "./../../assets/isometric.png";
import Shape from "./../../assets/Shape.png";
import Thumbs from "./../../assets/Thumbs.png";
import Marketing from "./../../assets/Marketing.png";
import Magnifying from "./../../assets/MagnifyingGlass.png";
import Cybright from "./../../assets/Cybright.png";
import Cybleft from "./../../assets/Cybleft.png";
import Last from "./../../assets/Last.png";
import { Nav } from "../../Components/NavBar/index";
import Button from "../../Components/Button";

const Resources = () => {
  const [textareaValue, setTextareaValue] = useState(
    "What do you want to learn?"
  );

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };
  return (
    <div>
      <Nav />
      <div className="openSpace"></div>
      <div className="overallContainer">
        <div className="upper">
          <div className="resources">
            <div className="leftSides">
              <img id="shapes" src={Shape} alt="Shape" />
              <div className="children">
                <h2>Resources</h2>
                <p className="resourcesText">
                  Access to digital technologies such as the internet can be an
                  equaliser of access to information, but there are downsides to
                  iwt. At Digizen, we aim to empower every kid, teenager, and
                  young adult with safe and responsible internet practices, to
                  make them responsible digital citizens. We have curated a
                  library of resources where they can get educated, and
                  informed.
                </p>
                <div className="searchPart">
                  <textarea
                    value={textareaValue}
                    onChange={handleChange}
                  ></textarea>
                  <img className="search" src={Magnifying} alt="Search" />
                </div>

                <div className="categorySide">
                  <h1 className="category">Categories</h1>
                  <div className="threeBoxes1">
                    <div className="rockleft">
                      <img src={Cybleft} alt="rockleft" id="rockleft" />
                    </div>
                    <div className="rockright">
                      <img src={Cybright} alt="rockleft" id="rockright" />
                    </div>

                    <div className="box1">
                      <div className="boxed">
                        <div className="picSpaces"></div>
                        <div className="pic">
                          <img src={Isometric} alt="DigitalCitizenship" />
                        </div>
                        <div className=" boxTxt">
                          <p>Digital Citizenship</p>
                          <button>Learn more</button>
                        </div>
                      </div>

                      <div className="boxed">
                        <div className="picSpaces"></div>
                        <div className="pic">
                          <img src={Data} alt="DataPrivacy" />
                        </div>
                        <p>Data Privacy</p>
                        <button>Learn more</button>
                      </div>
                    </div>
                  </div>
                  <div className="boxed cyberBox">
                    <div className="picSpaces"></div>
                    <div className="pic">
                      <img src={Mobile} alt="Cybersecurity" />
                    </div>
                    <p>Cybersecurity</p>
                    <button>Learn more</button>
                  </div>

                  <div className="box2">
                    <div className="threeBoxes2">
                      <div className="boxed">
                        <div className="picSpaces"></div>
                        <div className="pic">
                          <img src={Thumbs} alt="SocialMediaSafety" />
                        </div>
                        <p>Social media Safety</p>
                        <button>Learn more</button>
                      </div>

                      <div className="boxed">
                        <div className="picSpaces"></div>
                        <div className="pic">
                          <img src={Marketing} alt="DigitalLiteracy" />
                        </div>
                        <p>Digital Literacy</p>
                        <button>Learn more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSides">
              <img src={People} alt="People" id="people" />
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="lastly">
            <h2>Become a digital literate today with Digizens</h2>
            <Button variant="catBtn">Register account</Button>
            <div className="openSpace"></div>
            <div className="rocklast">
              <img src={Last} alt="rockleft" id="rocklast" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
