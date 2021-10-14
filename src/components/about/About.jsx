import React from "react"
import "./About.scss"
import Portfolio from "../../components/portfolio/Portfolio"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-desc">
        <h3>Hola..</h3>
        <p>
        Mi nombre es  Juan Carlos Castillo, soy desarrollador web <span style={{fontSize:"25px"}}>Full-Stack</span>, especializado mas al area del FrontEnd con especial manejo en ReactJS. Usando buenas practicas y correcto manejo de los estados.
        <br />
        <br />
        Con enfoque siempre en aprender nuevas tecnologias, frameworks, utilidades para mejorar profesionalmente. 
        </p>
        <br />
        <br />
        <Portfolio/>
        <br />
        <p> Aunque actualmente mi nivel de experiencia es de JR, considero que mis conocimientos van mucho mas alla.
          <br />
            Con conocimiento de conexiones entre el area del Front y del Back para realizar webs completamente funcionales.
        </p>
        <br />
        <p>Siempre dispuesto a trabajar en equipo y colaborar para ayudar con mi talento.</p>
        
      </div>
    </div>
  );
};

export default About