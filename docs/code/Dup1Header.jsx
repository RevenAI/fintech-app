import { useRef, useState } from "react";
import NavBar from "./NavBar"
import MobileMenus from "./MobileMenus";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
 
  const toggleMenu = () => {
   setMenuOpen(!isMenuOpen);
 };

  return (
   <header>
     <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span>&#10005;</span> // Close icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
      </div>

        {/* Conditional rendering of NavMenus for small screens */}
        {isMenuOpen && (
          <div ref={menuRef}>
            <MobileMenus 
            isOpen={isMenuOpen} 
            menuRef={menuRef} 
            setMenuOpen={setMenuOpen} 
            isMenuOpen={isMenuOpen} 
          /> 
          </div>
        )}

     <NavBar />
   </header>
  )
}

export default Header


