import tinyIcon from '../../../assets/resources/home-section/secure-global-fast-button.svg';
import appInfoData from '../../../../data/app-info.json';
import downloadBtn from '../../../assets/resources/home-section/download-button.svg';
import watchDemoBtn from '../../../assets/resources/home-section/watch-demo-button.svg';
import usersData from '../../../data/usersData';
// hero section images
import heroImage from '../../../assets/resources/home-section/slider-images/image1.svg';
import googleImage from '../../../assets/resources/home-section/google-icon.svg';
import techstarImage from '../../../assets/resources/home-section/techstar-icon.svg';
import edgeLine from '../../../assets/resources/home-section/section-one-line.svg';
import WalletBalance from '../../../components/Recipe/WalletBalance';
// affiliate companies images
import accrossImg from '../../../assets/resources/home-section/accross-icon.svg';
import mpowerImg from '../../../assets/resources/home-section/mpower-icon.svg';
import paystackImg from '../../../assets/resources/home-section/paystack-icon.svg';
import prodigyImg from '../../../assets/resources/home-section/prodigy-icon.svg';
import stripeImg from '../../../assets/resources/home-section/stripe-icon.svg';

const affilateCompaniesImg = [
  { src: accrossImg, alt: 'Accross' },
  { src: mpowerImg, alt: 'MPower' },
  { src: paystackImg, alt: 'Paystack' },
  { src: prodigyImg, alt: 'Prodigy' },
  { src: stripeImg, alt: 'Stripe' },
];

const HomeSection = () => {
  return (
    <div className="home-container">
      <div className="home-inner-container">
        <p><img src={tinyIcon} alt="App Icon" /></p>
        <h1>{appInfoData?.['app-info']?.[0]?.['hero-comment'] || "Loading..."}</h1>
        <p className='p-text'>{appInfoData?.['app-info']?.[1]?.['ad-statement'] || "..."}</p>
      </div>

      <div className="home-buttons-holder">
        <img src={downloadBtn} alt="Download mobile app version" />
        <img src={watchDemoBtn} alt="See demo products" />
      </div>

      <div className="user-gallery">
        {usersData?.map((user) => (
          <img key={user.id} src={user.image.src} alt={user.image.alt} className="user-img" />
        ))}
        <p>{appInfoData?.['app-info']?.[2]?.['trust-statement'] || "..."}</p>
      </div>

      <div className="hero-section">
        <div className="home-circle"></div>
        <div className="techstar-image">
          <img src={techstarImage} alt="Support from TechStar" />
        </div>
        <div className="google-image">
          <img src={googleImage} alt="Our google rate" />
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero Image" />
        </div>
        <div className="wallet-image">
          <WalletBalance />
        </div>
        <div className="edge-line">
          <img src={edgeLine} alt="Seal Line" />
        </div>
      </div>

       {/* Affiliate Companies Section */}
       <div className="affilate-images">
        {affilateCompaniesImg.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} className="affilate-img" />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;




