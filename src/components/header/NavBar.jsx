import appLogo from '../../assets/resources/home-section/pay4me-logo.svg';
import downloadBtn from '../../assets/resources/home-section/download-button.svg';
import { useContext } from 'react';
import SectionsContext from '../../state/context/SectionsContext';

const NavBar = () => {
  const navLinks = ['Home', 'About', 'Blog', 'Support'];
  const { activeSectionId, handleSmoothScroll } = useContext(SectionsContext);

  const renderNavLink = (content) => {
    return (
      <ul key={content}>
        <li>
          <button
            onClick={() => handleSmoothScroll(content)} 
            className={activeSectionId === content ? "activeSection" : ""}
            data-content={content}
          >
            {content}
          </button>
        </li>
      </ul>
    );
  };

  return (
    <nav className="nav-container">
      <div className="nav-bar">
        {/* Application Logo */}
        <img src={appLogo} alt="Pay4Me Logo" />

        {/* Nav Menu */}
        <div className="menu-buttons">
          {navLinks.map((nav) => renderNavLink(nav))}
        </div>

        {/* Download Button */}
        <img src={downloadBtn} alt="Download mobile app version" />
      </div>
    </nav>
  );
};

export default NavBar;

