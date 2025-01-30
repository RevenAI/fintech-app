import { useContext } from "react";
import SectionsContext from "../../state/context/SectionsContext";
import appLogo from '../../assets/resources/home-section/pay4me-logo.svg';
import downloadBtn from '../../assets/resources/home-section/download-button.svg';

const NavBar = () => {
  const { homeRef, aboutRef, blogRef, supportRef, activeSection } = useContext(SectionsContext);

  return (
    <div className="nav-container">
      <div className="nav-bar">
        {/* application logo */}
        <img src={ appLogo } alt="Pay4Me Logo" />

        {/* Nav menu */}
      <ul>
        <li>
          <button
            onClick={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}
            className={activeSection === "home" ? "active-nav" : ""}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
            className={activeSection === "about" ? "active-nav" : ""}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => blogRef.current?.scrollIntoView({ behavior: "smooth" })}
            className={activeSection === "blog" ? "active-nav" : ""}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => supportRef.current?.scrollIntoView({ behavior: "smooth" })}
            className={activeSection === "support" ? "active-nav" : ""}
          >
            Support
          </button>
        </li>
      </ul>

      {/* download button in navbar */}
      <img src={ downloadBtn } alt="Download mobile app version" />
    </div>
    </div>
  );
};

export default NavBar;

