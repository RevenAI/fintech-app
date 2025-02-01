import Accordion from "./Accordion";
import FAQsIcon from "../../../assets/resources/support-section/FAQs.svg";
import image from "../../../assets/resources/support-section/image.svg";
import blog1 from "../../../assets/resources/support-section/blog1.svg";
import blog2 from "../../../assets/resources/support-section/blog2.svg";
import blog3 from "../../../assets/resources/support-section/blog3.svg";
import nextIcon from "../../../assets/resources/support-section/next-icon.svg";
import previousIcon from "../../../assets/resources/support-section/previous-icon.svg";

const SupportSection = () => {
  return (
    <>
      <div className="support-section-container">
          <div className="support-header">
            <img src={FAQsIcon} />
            <h1>Got Questions?</h1>
            <p>We’ve got answers</p>
          </div>

          <div className="ask-me-block">
              <img src={image} alt="Questions section" />
              <Accordion />
          </div>

          <h1><b>_</b></h1>
          <div className="lstest-blog-support">
            <h1>Latest Blog & Resources</h1>
            <img src={blog1} alt="First blog" />
            <img src={blog2} alt="Second blog" />
            <img src={blog3} alt="Third blog" />
          </div>

          <div>
            <img src={previousIcon} alt="Go back" />
            <img src={nextIcon} alt="Go to next post" />
          </div>
          <h1><b>_</b></h1>
      </div>
    </>
  )
}

export default SupportSection