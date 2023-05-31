
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import TechStack from "./components/TechStack";
import Tes from "./components/Tes";
import { DarkModeProvider } from "./contexts/DarkModeProvider";

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Hero />
      
      <About />
      <TechStack />
      <Project />
      <Contact />
      {/* <Tes/> */}
    </DarkModeProvider>
  );
}

export default App;
