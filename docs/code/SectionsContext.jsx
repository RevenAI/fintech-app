//THis is te first version of the section contex. This version is replaced with the version that account for active section for special style

import { createContext, useRef } from "react";

const SectionsContext = createContext({});

/* eslint-disable react/prop-types */
export const SectionsContextProvider = ({ children }) => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const blogRef = useRef();
  const supportRef = useRef();

  const contextData = {
    homeRef,
    aboutRef,
    blogRef,
    supportRef,
  };

  return (
    <SectionsContext.Provider value={contextData}>
      {children}
    </SectionsContext.Provider>
  );
};

export default SectionsContext;

