import footerRecImage from "../../assets/resources/footer1.svg";
import qrIconInFooter from "../../assets/resources/rq-block.svg";
import pay4meIconInFooter from "../../assets/resources/pay4meIconInFooter.svg";

const Footer = () => {
  const today = new Date();

  return (
    <div className="footer-container">
      <h1><b>_</b></h1>

      <div className="qr-section">
        <img src={qrIconInFooter} alt="Footer QR Code" />
      </div>

      <div className="firstFooter">
        <img src={footerRecImage} alt="Footer Decorative" />
      </div>

      <h3>&copy; {`2020 - ${today.getFullYear()} Pay4Me, Inc.`}</h3>

      <div className="footer-info">
        <img src={pay4meIconInFooter} alt="Pay4Me Icon" />
        <p>
          Pay4Me is a financial technology company making it easier for international students
          and immigrants to pay their tuition and fees in minutes. We offer our products and services
          in partnership with licensed transmitters and banking partners in their respective jurisdictions.
          All trademarks, logos, and brand names are the property of their respective owners. All company,
          product, and service names used on this website are for identification purposes only. Use of these
          names, trademarks, and brands do not imply endorsement.
        </p>
      </div>
    </div>
  );
};

export default Footer;


