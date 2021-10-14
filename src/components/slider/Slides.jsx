import React from "react"
import "./Slider.scss"

const slidesInfo = [
  {
    src:
      "https://i.ibb.co/VNk9xY5/thermometer-4353318-960-720.jpg",
    alt: "Project 1",
    desc: "Aplicacion del Clima",
    url: "https://github.com/CastilloJC/aplicacion-clima"

  },
  {
    src:
      "https://i.ibb.co/QNPF01D/bookkeeping-615384-960-720.jpg",
    alt: "Project 2",
    desc: "Calculadora",
    url: "https://github.com/CastilloJC/calc-app"
  },
  {
    src:
      "https://i.ibb.co/rG4sCBk/tulips-163550-960-720.jpg",
    alt: "Arte Floral Yoli",
    desc: "Arte Floral Yoli",
    url: "https://github.com/CastilloJC/floristeriayoli"
  },
]

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
    <span>{slide.desc}</span>
      <a href={slide.url}>  
      <span>Ir al repositorio</span>
      </a>
    </div>
  </div>
))

export default slides