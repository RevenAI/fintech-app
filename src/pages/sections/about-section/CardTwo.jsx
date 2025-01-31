import cardIcon from '../../../assets/resources/about-section/design12.png';
import downloadBtn from '../../../assets/resources/about-section/design8.png';

const CardTwo = () => {
  return (
    <div className="card">
      {/* Card Icon at the top-left corner */}
      <div className="card-icon">
        <img src={cardIcon} alt="Card Icon" />
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h2>Fast & Reliable Transactions</h2>
        <p>
        Ensure your payments are processed quickly, helping you meet important deadlines without stress.
        </p>
      </div>

      {/* Download Button at the bottom-left corner */}
      <div className="download-btn">
        <img src={downloadBtn} alt="Download Button" />
      </div>
    </div>
  );
};

export default CardTwo;


