import Header from "./components/header/Header"
import AboutSection from "./pages/sections/about-section/AboutSection"
import BlogSection from "./pages/sections/blog-section/BlogSection"
import HomeSection from "./pages/sections/home-section/HomeSection"
import SupportSection from "./pages/sections/support-section/SupportSection"
import Footer from "./components/footer/Footer"
import SectionsContext from "./state/context/SectionsContext"
import { useContext } from "react"

function App() {
  const { homeRef, aboutRef, blogRef, supportRef } = useContext(SectionsContext);
 
  return (
    <>
      <Header />
      <section ref={ homeRef } className="sections">
          <HomeSection />
      </section>
      <section ref={ aboutRef }  className="sections">
          <AboutSection />
      </section>
      <section ref={ blogRef } className="sections">
          <BlogSection />
      </section>
      <section ref={ supportRef } className="sections">
          <SupportSection />
      </section>
      <Footer />
    </>
  )
}

export default App
