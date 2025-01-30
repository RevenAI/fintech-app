import { createContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = useState(null);

  const handleNavClick = (content) => {
    const sectionId = `${content.toLowerCase()}-section`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSectionId(sectionId);
    }
  };

  return (
    <NavContext.Provider value={{ activeSectionId, handleNavClick }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext


