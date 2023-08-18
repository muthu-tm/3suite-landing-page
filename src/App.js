import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";
import CryptoCard from "./components/Marquee/CryptoCard";
import Products from "./components/Products/Products";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      
    >
      <Navbar />
      <Intro />
      <CryptoCard />
      <Products />
    </div>
  );
}

export default App;
