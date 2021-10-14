import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) =>{
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#cover">Inicio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">Sobre mi</a>
        </li>
        <li className="desaparecer" onClick={()=>setMenuOpen(false)}>
          <a href="#works">Trabajos</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu