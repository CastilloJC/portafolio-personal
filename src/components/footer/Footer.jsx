import React from "react";
import "./Footer.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-info">
        <h1>Juan Carlos Castillo</h1>
      </div>
      <div className="footer-contact">
        <h1>Talento Disponible</h1>
      </div>
      <div className="footer-sns">
        <div className="sns-links">

          <a href="https://www.linkedin.com/in/juan-castillo1993/" target="_blank" rel="noreferrer">
            <i className="linkedin"></i>        
            <LinkedInIcon sx={{ fontSize: 40 }} color="primary"/>
          </a>
          <a href="https://github.com/CastilloJC/" target="_blank" rel="noreferrer">
            <i className="github"></i>
            <GitHubIcon sx={{ fontSize: 40 }} color="primary"/>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;