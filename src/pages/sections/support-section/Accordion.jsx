import { useState } from "react";
import accordionData from "../../../data/accordionData";



const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-header" onClick={() => toggleAccordion(index)}>
            {item.title}
            <span className={`icon ${openIndex === index ? "open" : ""}`}>&#9662;</span>
          </button>
          <div className={`accordion-content ${openIndex === index ? "show" : ""}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

