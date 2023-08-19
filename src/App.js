import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";
import CryptoCard from "./components/Marquee/CryptoCard";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Team from "./components/OurTeam/Team";
import Contact from "./components/Contact/Contact";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <CryptoCard />
      <Products />
      <About />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
