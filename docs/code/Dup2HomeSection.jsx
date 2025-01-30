import { useEffect, useState } from 'react';
import tinyIcon from '../../../assets/resources/home-section/secure-global-fast-button.svg';
import appInfoData from '../../data/app-info.json';
import downloadBtn from '../../../assets/resources/home-section/download-button.svg';
import watchDemoBtn from '../../../assets/resources/home-section/watch-demo-button.svg';
import userImages from '../../src/utils/usersImageFetcher';
// hero section/slider images
import sliderImage1 from '../../../assets/resources/home-section/slider-images/slider1.png';
import sliderImage2 from '../../../assets/resources/home-section/slider-images/slider2.png';
import sliderImage3 from '../../../assets/resources/home-section/slider-images/slider3.png';
import sliderImage4 from '../../../assets/resources/home-section/slider-images/slider4.svg';
// hero section but not in slider
import googleImage from '../../../assets/resources/home-section/google-icon.svg';
import techstarImage from '../../../assets/resources/home-section/techstar-icon.svg';
import walletImage from '../../../assets/resources/home-section/wallet-balance.png';

const sliderImages = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];

const HomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
   <div className="home-container">
     <div className='home-inner-container'>
        <p><img src={ tinyIcon } alt='App Icon' /></p>
        <h1>{ appInfoData?.['app-info']?.[0]?.['hero-comment'] || "Loading..." }</h1>
        <p>{ appInfoData?.['app-info']?.[1]?.['ad-statement'] || "..." }</p>
     </div>

     <div className='home-bottons-holder'>
        <img src={ downloadBtn } alt='Download mobile app version' />
        <img src={ watchDemoBtn } alt='See demo products'/>
     </div>

     <div className="user-gallery">
      {userImages?.map((user) => (
        <img key={user.id} src={user.src} alt={user.alt} className="user-img" />
      ))}
      <p>{ appInfoData?.['app-info']?.[2]?.['trust-statement'] || "..." }</p>
    </div>

    <div className='hero-section'>
      <div className='home-circle'>
        {/* This is meant to be empty. It is behind all elements in hero section */}
      </div>
      
      <p><img src={techstarImage} alt="Support from TechStar" /></p>
      <p><img src={googleImage} alt="Our google rate" /></p>
      
      <div className="slider-container">
        <div className="slider-image">
          <img src={sliderImages[currentImageIndex]} alt={`Slider ${currentImageIndex + 1}`} />
        </div>
      </div>
      
      <p><img src={walletImage} alt="Wallet reader" /></p>
    </div>

   </div>
  )
}

export default HomeSection;


