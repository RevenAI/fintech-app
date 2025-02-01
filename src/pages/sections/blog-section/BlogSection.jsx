import cardOne from '../../../assets/resources/blog-section/card1.svg';
import cardTwo from '../../../assets/resources/blog-section/card2.svg';
import whatWeOffer from '../../../assets/resources/blog-section/what-we-offer.svg';
//import leftStyle from '../../../assets/resources/blog-section/left-style.svg';
//import rightStyle from '../../../assets/resources/blog-section/right-style.svg';
import downloadBtn from '../../../assets/resources/home-section/download-button.svg';
import Pay4MeVedio from './Pay4MeVedio';
import Testimonial from './Testimonial';
import testimonialIcon from '../../../assets/resources/blog-section/testimonial-icon.svg';

const BlogSection = () => {
  return (
    <>
      <div className="outside-blog-section">
       <div className='inside-blog-section'>
            <div className='blog-header'>
                <img src={whatWeOffer} alt="Learn more" />
                <h1>Simplified Payments for Your Relocation Dreams</h1>
            </div>

            <div className='blog-cards'>
              <img src={cardOne} alt="Learn more" />
              <img src={cardTwo} alt="Learn more" />
            </div>

            <img src={downloadBtn} alt="Download mobile app version" />
       </div>
    </div>

      <div className='blog-vedio'>  
            <Pay4MeVedio />
      </div>

      <div className='testimonial-block'>
      <img src={testimonialIcon} alt="Testimonial icon" />
      <h1>Don’t take our words for it, Take theirs.</h1>
          <Testimonial />
      </div>
      
    </>  
    )
}

export default BlogSection




