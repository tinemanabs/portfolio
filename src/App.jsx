import { Briefcase, Code, User } from "lucide-react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import TechStack from "./components/TechStack/TechStack";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div
        className="max-w-7xl mx-auto scroll-mt-25"
        id="mainContent"
        data-aos="fade-up"
      >
        <div className="px-5 sm:px-10 py-5">
          <About />
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-10 gap-10 xl:gap-2">
            <Experience />

            <div className="flex flex-col gap-10 xl:gap-16">
              <Education />
              <TechStack />
              <Certifications />
            </div>
          </div>

          <div className="mt-10">
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
