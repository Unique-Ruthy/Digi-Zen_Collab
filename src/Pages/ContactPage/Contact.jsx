import "./Contact.css";
import { useState } from "react";
// import Frame from "./images/frame.png";
// import mail from "./../../assets/mail.png";
import Clip from "./images/ClipPath.png";
import Logo from "./../../assets/digizenLogo.png";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    // Clear error message when user starts typing
    setErrors((prevState) => ({
      ...prevState,
      [id]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let formIsValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    }
    if (!formData.comments.trim()) {
      newErrors.comments = "Message is required";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // Perform actions like sending form data to backend here
    console.log(formData);
    // Optionally, you can clear the form data after submission
    setFormData({
      name: "",
      email: "",
      comments: "",
    });
  };

  return (
    <div>
      <div className="overallContact">
        <div className="contact" id="contactus">
          <div className="formPart">
            <Link to="/" className="contLink">
              <div className="imageSpace">
                <img src={Logo} alt="Digizen Logo" className="imageStyle" />
                <p>Digizen</p>
              </div>
            </Link>
            <div className="contactText">
              <h1>Contact Us</h1>
              <p>We want to hear from you. Feel free to reach out!</p>
            </div>
            <form className="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </label>

              <label htmlFor="email">
                Email Address
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </label>
              {errors.email && <p className="error">{errors.email}</p>}
              <label htmlFor="message">
                Message
                <textarea
                  value={formData.comments}
                  placeholder=""
                  id="comments"
                  onChange={handleChange}
                  required
                />
              </label>
              {errors.comments && <p className="error">{errors.comments}</p>}
              <div className="buttonPart">
                <button className="contactBtn">
                  Send
                  <span className="vector">
                    <AiOutlineMail className="img" />

                    {/* <img src={mail} alt="Mail Icon" className="img" /> */}
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="formside">
            <img src={Clip} alt="Form Side Image" id="formside" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
