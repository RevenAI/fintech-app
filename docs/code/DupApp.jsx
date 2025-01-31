import Header from "../../src/components/header/Header"
import AboutSection from "../../src/pages/sections/about-section/AboutSection"
import BlogSection from "../../src/pages/sections/blog-section/BlogSection"
import HomeSection from "../../src/pages/sections/home-section/HomeSection"
import SupportSection from "../../src/pages/sections/support-section/SupportSection"
import Footer from "../../src/components/footer/Footer"
import SectionsContext from "../../src/state/context/SectionsContext"
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
