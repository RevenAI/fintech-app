import cardIcon from '../../../assets/resources/about-section/design6.png';
import downloadBtn from '../../../assets/resources/about-section/design8.png';

const CardOne = () => {
  return (
    <div className="card">
      {/* Card Icon at the top-left corner */}
      <div className="card-icon">
        <img src={cardIcon} alt="Card Icon" />
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h2>Global Accessibility</h2>
        <p>
          Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are.
        </p>
      </div>

      {/* Download Button at the bottom-left corner */}
      <div className="download-btn">
        <img src={downloadBtn} alt="Download Button" />
      </div>
    </div>
  );
};

export default CardOne;


