import { useContext, useEffect, useRef } from "react"
import useOnScreen from "./useOnScreen";
import SectionsContext from "../src/state/context/SectionsContext";

const useNavBar = (navLinkId) => {
    const ref = useRef(null);
    const { setActiveSectionId } = useContext(SectionsContext);
    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnScreen) {
            setActiveSectionId(navLinkId)
        }
    }, [isOnScreen, navLinkId, setActiveSectionId])
  return ref;
}

export default useNavBar
