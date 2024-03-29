import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from "./components//Banner/Banner";
import { People } from "./components/People/People";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/Aboutme/aboutme";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <AboutMe />
      <People />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
