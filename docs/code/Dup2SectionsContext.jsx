import { createContext, useState } from "react";

const SectionsContext = createContext({});

/* eslint-disable react/prop-types */
export const SectionsContextProvider = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = useState("");

  const contextData = {
    activeSectionId,
    setActiveSectionId
  };

  return (
    <SectionsContext.Provider value={contextData}>
      {children}
    </SectionsContext.Provider>
  );
};

export default SectionsContext;



