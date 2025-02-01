import Header from "./components/header/Header"
import AboutSection from "./pages/sections/about-section/AboutSection"
import BlogSection from "./pages/sections/blog-section/BlogSection"
import HomeSection from "./pages/sections/home-section/HomeSection"
import SupportSection from "./pages/sections/support-section/SupportSection"
import Footer from "./components/footer/Footer"
import useNavBar from "../hooks/useNavBar"
import MobileHeader from "./components/header/MobileHeader"
import AboutSubSection from "./pages/sections/about-section/about-subsection/AboutSubSection"

function App() {
  const homeRef = useNavBar("Home");
  const aboutRef = useNavBar("About");
  const blogRef = useNavBar("Blog");
  const supportRef = useNavBar("Support");
 
  return (
    <>
      <Header />
      <MobileHeader />
      <section ref={homeRef} id="home-section" className="sections">
          <HomeSection />
      </section>
      <section ref={aboutRef} id="about-section"   className="sections">
          <AboutSection />
          <AboutSubSection />
      </section>
      <section ref={blogRef} id="blog-section" className="sections">
          <BlogSection />
      </section>
      <section ref={supportRef} id="support-section" className="sections">
          <SupportSection />
      </section>
      <Footer />
    </>
  )
}

export default App
