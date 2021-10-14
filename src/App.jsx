import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu";
import Topbar from "./components/topbar";
import Cover from './components/cover'
import About from './components/about'  
import Slider from './components/slider'
import Footer from "./components/footer"




function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
      <Cover/>
      <About/>
      <Slider/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
