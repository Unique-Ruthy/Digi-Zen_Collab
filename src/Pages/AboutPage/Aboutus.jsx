import { useEffect } from "react";
import Nav from "../../Components/NavBar/index";
import Footer from "../../Components/Footer/index";
// import Contact from "../../Pages/ContactPage/Contact";
import { Link } from "react-router-dom";
import "./aboutus.css";

import Vector from "./../../assets/aboutVector.png";
import Hero from "./../../assets/aboutHero.png";
import Instagram from "./../../assets/aboutInstagram.png";
import Line from "./../../assets/aboutLine.png";
import Linkedin from "./../../assets/aboutLinkedIn.png";
// import Star1 from "./../../assets/aboutStar1.png";
import Twitter from "./../../assets/aboutTwitter.png";
import Shield from "./../../assets/aboutShield.png";
import Profile from "./../../assets/aboutProfile.png";
import Briefcase from "./../../assets/aboutBriefcase.png";
import Ldiamonds from "./../../assets/aboutLDiamonds.png";

/* Team members */
import Sofiyat from "./../../assets/Sofiyat.png";
import Hafsah from "./../../assets/Hafsah.png";
import Saratu from "./../../assets/Saratu.png";
import Ruth from "./../../assets/Ruth.png";
import Titilayo from "./../../assets/Titilayo.png";
import Nancy from "./../../assets/Nancy.png";
import TaiwoOgunkeye from "./../../assets/TaiwoOgunkeye.png";
import Sherifat from "./../../assets/Sherifat.png";
import Sarat from "./../../assets/Sarat.png";
import Sooladegbin from "./../../assets/Sooladegbin.png";
import Stephanie from "./../../assets/Stephanie.png";
import Uduak from "./../../assets/Uduak.png";
import Temitope from "./../../assets/Temitope.png";
import Mufidat from "./../../assets/Mufidat.png";
import Mojolaoluwa from "./../../assets/Mojolaoluwa.png";
import Godly from "./../../assets/Godly.png";

const Aboutus = () => {
  useEffect(() => {
    function handleContactUsClick(event) {
      event.preventDefault();
      document
        .getElementById("contactus")
        .scrollIntoView({ behavior: "smooth" });
    }
    const contactUsLink = document.querySelector('a[href="#contactus"]');
    if (contactUsLink) {
      contactUsLink.addEventListener("click", handleContactUsClick);
    }

    return () => {
      if (contactUsLink) {
        contactUsLink.removeEventListener("click", handleContactUsClick);
      }
    };
  }, []);

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="openSpaces"></div>
      <div className="overallContainer">
        <div className="upperside">
          <div className="doubleImg">
            <div className="leftSide">
              <h2>
                About us
                <span>
                  <img src={Vector} id="vectorUse" alt="vectorImg" />
                </span>
              </h2>
              <img src={Line} id="line" alt="lineUse" />
              <p className="leftSideP">
                Our platform helps kids, teens, and young adults learn how to
                navigate technology safely, respectfully, and responsibly.
              </p>
              <div className="leftsideButton">
                <button>Get started</button>
              </div>
            </div>
            <div className="rightSide">
              <img src={Hero} alt="heroImg" id="hero" />
            </div>
          </div>
        </div>
        <div className="lowerside">
          <div className="boxes">
            <div className="threeBoxes">
              <div className="box">
                <div className="box-content">
                  <img src={Shield} alt="shieldImg" />
                  <span className="texts">Online Safety</span>
                </div>
                <p>
                  Online safety means users are protective of themselves and
                  others against online risks and harm, that may put their
                  personal information at risk
                </p>
              </div>
              <div className="box">
                <div className="box-content">
                  <img src={Briefcase} alt="briefcaseImg" />
                  <span className="texts">Responsible Online Behaviour</span>
                </div>
                <p>
                  Responsible online behaviour involves engaging other users
                  online in a manner that respects their privacy and
                  information, and their creative works, as well as not
                  spreading misinformation
                </p>
              </div>
              <div className="box">
                <div className="box-content">
                  <img src={Profile} alt="profileImg" />
                  <span className="texts">Respectful Online Interactions</span>
                </div>
                <p>
                  Respectful online interactions ensure an overall safer, more
                  fun, and enhanced technology experiences by users.
                </p>
              </div>
            </div>
          </div>
          <div className="meetTeam">
            <div className="headings">
              <h2>
                Meet the Team
                <span>
                  <img src={Vector} id="vectorUse2" alt="vectorImg" />
                </span>
              </h2>
              <img src={Line} id="lineUse2" alt="lineImg" />
            </div>

            <div className="theTeam">
              <div className="teamDetails">
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Sherifat} alt="Sherifat" />
                    </div>
                    <h3>Sherifat Sanni</h3>
                    <p>Data Scientist</p>
                    <div className="socials">
                      <Link to="www.linkedin.com/in/sherifat-oniyide-87897520b">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Saratu} alt="Saratu" />
                    </div>
                    <h3>Saratu Miller</h3>
                    <p>Product Manager</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/saratumiller">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/atumiller?utm_source=qr&igsh=OGU0MmVlOWVjOQ%3D%3D">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Ruth} alt="Ruth" />
                    </div>
                    <h3>Ruth Uwakwe</h3>
                    <p>Web Developer</p>
                    <div className="socials">
                      <Link to="">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Nancy} alt="Nancy" />
                    </div>
                    <h3>Nancy Karani</h3>
                    <p>Product Design</p>
                    <div className="socials">
                      <Link to="www.linkedin.com/in/nancykarani">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Hafsah} alt="Hafsah" />
                    </div>
                    <h3>Hafsah Abubakar</h3>
                    <p>CyberSecurity</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/hafsah-bege">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="https://twitter.com/Begeight">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/begeight?igsh=OGQ5ZDc2ODk2ZA==">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Titilayo} alt="Titilayo" />
                    </div>
                    <h3>Dada Titilayo</h3>
                    <p>Data Scientist</p>
                    <div className="socials">
                      <Link to="www.linkedin.com/in/titilayo-dada-1117b3240">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="https://x.com/adedolapo4J?s=09">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Sofiyat} alt="Sofiyat" />
                    </div>
                    <h3>Gbadamosi Sofiyat</h3>
                    <p>Web Developer</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/gbadamosi-sofiyat-73104a224">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="https://twitter.com/SofiyatG">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/_1shin_min?igsh=aW15MDA5YjJheHpo">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Sarat} alt="Sarat" />
                    </div>
                    <h3>Sarat Abdulwahab</h3>
                    <p>Product Manager</p>
                    <div className="socials">
                      <Link to="http://linkedin.com/in/sarat-abdulwahab">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/__zahhraa__?igsh=MWJrd20wYnBwbzR2MA%3D%3D&utm_source=qr">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Uduak} alt="Chidinma" />
                    </div>
                    <h3>Chidinma Onyejiuwa</h3>
                    <p>Mobile App Developer</p>
                    <div className="socials">
                      <Link to="www.linkedin.com/in/chidinmaonyyejiuwa">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="Twitter.com/oma_chidinma">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="Instagram.com/chim_nma">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img
                        className="member"
                        src={TaiwoOgunkeye}
                        alt="TaiwoOgunkeye"
                      />
                    </div>
                    <h3>Taiwo Ogunkeye</h3>
                    <p>Data Scientist</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/taiwo-ogunkeye/">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img
                        className="member"
                        src={Mojolaoluwa}
                        alt="Mojolaoluwa"
                      />
                    </div>
                    <h3>Mojolaouluwa</h3>
                    <p>Product Designer</p>
                    <div className="socials">
                      <Link to="https://ng.linkedin.com/in/mojolaoluwa-adeniyi-3951831a5">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="https://twitter.com/Mo_jolaoluwa_">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/mo.jolaoluwa/">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Godly} alt="Godly" />
                    </div>
                    <h3>Godly Dabara</h3>
                    <p>Cybersecurity</p>
                    <div className="socials">
                      <Link to="hhttps://www.linkedin.com/in/godly-dabara-751300169?">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/god_ly.d?igsh=MWRrdzhpMjloa3k2Zw%3D%3D&utm_source=qr">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Stephanie} alt="Stephanie" />
                    </div>
                    <h3>Isaiah Stephanie</h3>
                    <p>Product Manager</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/isaiah-stephanie">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img
                        className="member"
                        src={Sooladegbin}
                        alt="Sooladegbin"
                      />
                    </div>
                    <h3>Ogunbadejo Sooladegbin</h3>
                    <p>Web Developer</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/sooladegbin-ogunbadejo-937a7a22a/">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/little_templeton/?hl=en">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Temitope} alt="Temitope" />
                    </div>
                    <h3>Temitope Olatidoye</h3>
                    <p>Data Scientist</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/temitope-olatidoye-bsc-aat-msc-aca-acca-in-view-068593b4?">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.instagram.com/topelaoye?igsh=bm4xZXlibWdzYWJ4&utm_source=qr">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Uduak} alt="Uduak" />
                    </div>
                    <h3>Uduak Njoku</h3>
                    <p>Data Scientist</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/uduak-njoku">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members">
                  <div className="eachMember">
                    <div className="picSpace"></div>
                    <div className="memberPic">
                      <img className="member" src={Mufidat} alt="Mufidat" />
                    </div>
                    <h3>Mufidat Abdulsalam</h3>
                    <p>Product Designer</p>
                    <div className="socials">
                      <Link to="https://www.linkedin.com/in/mufidat-abdulsalam-81044717b">
                        <img src={Linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={Twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={Instagram} alt="instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lastly">
            <img src={Ldiamonds} alt="line&DiamondsImg" />
            <h3>Do you have any Queries?</h3>
            <button>
              <Link to="contactus">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Aboutus;
