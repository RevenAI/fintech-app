import paymentIcon from '../../../../assets/resources/about-section/about-subsection/comp2.png';

const CardTwo = () => {
  return (
    <div className="card">
      <h4>3</h4>
      <h1>Setup Payment Details.</h1>
      <p>Securely link your local bank account or mobile wallet to the Pay4me app.</p>
      <img src={paymentIcon} alt="Payment Options Icon" className="icon-class" />
    </div>
  );
};

export default CardTwo;


