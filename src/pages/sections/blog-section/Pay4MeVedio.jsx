import { useState, useEffect } from "react";
import pictureForFalback from '../../../assets/resources/blog-section/pay4me-demo.png';

const Pay4MeVideo = () => {
  const [videoError, setVideoError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) {
        setVideoError(true); 
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [loaded]);

  const errStyling = { backgroundColor: "red", color: "black", textAlign: "center", fontSize: "small" };
  const fallbackStyling = { maxWidth: "100%" };

  return (
    <div className="blog-video">
      <div>
        {!videoError ? (
          <iframe
            src="https://www.youtube.com/embed/c9YJBE3re20"
            width="100%"
            height="400px"
            title="Pay4me App Clip"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          ></iframe>
        ) : (
          <div style={fallbackStyling}>
            <p style={errStyling}>⚠ Video is unavailable. Please check your internet connection.</p>
            <img style={fallbackStyling} src={pictureForFalback} alt="Video not available" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay4MeVideo;


