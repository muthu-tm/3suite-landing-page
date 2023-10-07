import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import CryptoCard from "./components/Marquee/CryptoCard";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Team from "./components/OurTeam/Team";
// import "animate.css/animate.min.css";
import Footer from "./components/Footer/Footer";
import NewsletterSubscribe from "./components/Newsletter/Subscribe";
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
   <NewsletterSubscribe/>
      <Footer />
    </div>
  );
}

export default App;
