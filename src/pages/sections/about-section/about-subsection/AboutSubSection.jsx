import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import howItWorksIcon from '../../../../assets/resources/about-section/about-subsection/comp9.png';
import downloadBtn from '../../../../assets/resources/home-section/download-button.svg';

const AboutSubSection = () => {
  return (
    <div className="outside-container">
      <div className="inside-container">
        <img 
          src={howItWorksIcon} 
          alt="Learn more about Pay4me." 
          className="how-it-works-icon"
        />
        <h1 className="section-heading">4 Simple Steps to Get Started</h1>
        
        <div className="sub-cards-container">
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        </div>

        <img 
          src={downloadBtn} 
          alt="Download mobile app version." 
          className="download-btn"
        />
      </div>
    </div>
  );
};

export default AboutSubSection;



/* import CardOne from "./CardOne"
import CardTwo from "./CardTwo"
import CardThree from "./CardThree"
import CardFour from "./CardFour"
import howItWorksIcon from '../../../../assets/resources/about-section/about-subsection/comp9.png';
import downloadBtn from '../../../../assets/resources/home-section/download-button.svg';

const AboutSubSection = () => {
  return (
   <div className="sub-outside-container">
       <div className="inside-container">
       <img src={ howItWorksIcon } alt="Learn more about Pay4me." />
        <h1>4 Simple Steps to Get Started</h1>
        <div className="sub-cards-container">
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        </div>

        <img src={ downloadBtn } alt="Download mobile app version." />
       </div>
   </div>
  )
}

export default AboutSubSection
 */