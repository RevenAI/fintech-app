import { createContext, useState } from "react";

const SectionsContext = createContext({});

/* eslint-disable react/prop-types */
export const SectionsContextProvider = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = useState("");

  const handleSmoothScroll = (content) => {
    const sectionId = `${content.toLowerCase()}-section`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSectionId(section);
    }
  };

  const contextData = {
    activeSectionId,
    setActiveSectionId,
    handleSmoothScroll
  };

  return (
    <SectionsContext.Provider value={contextData}>
      {children}
    </SectionsContext.Provider>
  );
};

export default SectionsContext;



