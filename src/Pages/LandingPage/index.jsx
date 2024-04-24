import About from "../../Components/About";
import Footer from "../../Components/Footer";
import Homepage from "../../Components/Hero";
import Service from "../../Components/Services";
import Category from "../../Components/category";

const LandingPage = () => {
  return (
    <div>
      <Homepage />
      <About />
      <Service />
      <Category />
      <Footer />
    </div>
  );
};

export default LandingPage;
