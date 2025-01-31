import qrIcon from '../../../../assets/resources/about-section/about-subsection/comp6.png';

const CardOne = () => {
  return (
    <div className="card">
      <h4>1</h4>
      <h1>Download the Mobile App</h1>
      <p>Get started by downloading our mobile app, available on iOS and Android.</p>
      <img src={qrIcon} alt="QR Code" className="icon-class" />
    </div>
  );
};

export default CardOne;


