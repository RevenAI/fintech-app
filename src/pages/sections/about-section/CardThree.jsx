import cardIcon from '../../../assets/resources/about-section/design13.png';
import downloadBtn from '../../../assets/resources/about-section/design8.png';

const CardThree = () => {
  return (
    <div className="card">
      {/* Card Icon at the top-left corner */}
      <div className="card-icon">
        <img src={cardIcon} alt="Card Icon" />
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h2>Secure & Transparent</h2>
        <p>
        Enjoy peace of mind with secure payment processing and complete transparency on fees and conversion rates.
        </p>
      </div>

      {/* Download Button at the bottom-left corner */}
      <div className="download-btn">
        <img src={downloadBtn} alt="Download Button" />
      </div>
    </div>
  );
};

export default CardThree;


