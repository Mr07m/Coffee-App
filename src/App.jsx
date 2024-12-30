import Header from "./Components/Header";
import Home from "./Components/Home";
import MenuContainer from "./Components/MenuContainer";
import About from "./Components/About";
import ServiceContainer from "./Components/ServiceContainer";
import ReviewContainer from "./Components/ReviewContainer";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Element } from "react-scroll";
function App() {
  return (
    <>
      <Header />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="Menu">
        <MenuContainer />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Services">
        <ServiceContainer />
      </Element>
      <Element name="Review">
        <ReviewContainer />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
