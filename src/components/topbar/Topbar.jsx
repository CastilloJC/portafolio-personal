import "./topbar.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) =>{
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#cover" className="logo">
            Portafolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+51 934 994 636</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>juancastillodeveloper@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>https://github.com/CastilloJC</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar
