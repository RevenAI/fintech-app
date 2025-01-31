import bgImg1 from "../../../assets/resources/about-section/design14.png";
import featureIcon from "../../../assets/resources/about-section/design7.png";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const AboutSection = () => {
  return (
    <div className="inner-about-section">
      <img src={featureIcon} alt="Features Icon" />
      <h1>What Truly Sets Us Apart</h1>

      <div className="firstBgImg">
        <img src={bgImg1} alt="Background image one" />
      </div>

      <div className="card-container">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </div>
  );
};

export default AboutSection;


