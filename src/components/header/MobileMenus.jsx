import downloadBtn from '../../assets/resources/home-section/download-button.svg';
import { useContext, useEffect } from 'react';
import SectionsContext from '../../state/context/SectionsContext';

/* eslint-disable react/prop-types */
const MobileMenus = ({ isOpen, menuRef, setMenuOpen, isMenuOpen }) => {
const mobileNavLinks = ['Home', 'About', 'Blog', 'Support'];
const { activeSectionId, handleSmoothScroll } = useContext(SectionsContext);

useEffect(() => {
    const clickOutToCloseMenu = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".menu-icon") // Prevent closing when clicking the icon
      ) {
        setMenuOpen(false);
      }
    };
  
    if (isMenuOpen) {
      document.addEventListener("mousedown", clickOutToCloseMenu);
    } else {
      document.removeEventListener("mousedown", clickOutToCloseMenu);
    }
  
    return () => document.removeEventListener("mousedown", clickOutToCloseMenu);
  }, [isMenuOpen, menuRef, setMenuOpen]);
  
  const renderMobileNavLink = (content) => {
    return (
      <ul key={content}>
        <li>
          <button
            onClick={() => handleSmoothScroll(content)} 
            className={activeSectionId === content ? "activeMobileSection" : ""}
            data-content={content}
          >
            {content}
          </button>
        </li>
      </ul>
    );
  };

  return (
    <nav className={`mobile-navbar-menu ${isOpen ? "active" : ""}`}>

    <div className="mobile-menu-container">
           {/* Nav menu */}
       <div className="mobile-menu-buttons">
         { mobileNavLinks.map((nav) => renderMobileNavLink(nav)) }
       </div>
      
      {/* download button in navbar */}
      <img src={ downloadBtn } alt="Download mobile app version" />
    </div>

    </nav>
  );
};


export default MobileMenus;

