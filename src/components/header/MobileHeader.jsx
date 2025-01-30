import { useRef, useState } from "react";
import MobileMenus from "./MobileMenus";
import appLogoMobile from '../../assets/resources/home-section/pay4me-logo.svg';

const MobileHeader = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
   
    const toggleMenu = () => {
     setMenuOpen(!isMenuOpen);
   };
  
  return (
    <div className="mobile-header">
        <div className="app-logo-mobile">
            <img src={appLogoMobile} alt="Pay4Me Logo" />
        </div>

      <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span>&#10005;</span> // Close icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
      </div>

        {isMenuOpen && (
          <div ref={menuRef}>
            <MobileMenus 
            isOpen={isMenuOpen} 
            menuRef={menuRef} 
            setMenuOpen={setMenuOpen} 
            isMenuOpen={isMenuOpen} 
          /> 
          </div>
        ) }

    </div>
  )
}

export default MobileHeader
