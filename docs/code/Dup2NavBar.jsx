
import appLogo from '../../assets/resources/home-section/pay4me-logo.svg';
import downloadBtn from '../../assets/resources/home-section/download-button.svg';
import { useContext } from 'react';
import SectionsContext from '../../state/context/SectionsContext';

const NavBar = () => {
 const navLinks = ['Home', 'About', 'Blog', 'Support'];
 const { activeSectionId } = useContext(SectionsContext);

 const renderNavLink = (content) => {
  const sectionId = `${content.toLowerCase()}-section`;
  const handleNavClick = () => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView(section);
 }

   return <ul key={ content }>
    <li>
      <button
          onClick={ handleNavClick }
          className={ activeSectionId === content ? "activeSection" : "" }
          data-content={ content }
      >
          { content }
      </button>
    </li>
   </ul>
 }

  return (
    <nav className="nav-container">
      <div className="nav-bar">
        {/* application logo */}
        <img src={ appLogo } alt="Pay4Me Logo" />

           {/* Nav menu */}
       <div className="menu-buttons">
         { navLinks.map((nav) => renderNavLink(nav)) }
       </div>
      
      {/* download button in navbar */}
      <img src={ downloadBtn } alt="Download mobile app version" />
    </div>
    </nav>
  );
};

export default NavBar;

