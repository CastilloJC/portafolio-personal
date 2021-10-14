import "./portfolio.scss";
import { featuredPortfolio } from "../../data";

const Portfolio = ()=>{
  return (
    <div className="portfolio" id="portfolio">
      <h1>Tecnologias que manejo</h1>
      <div className="container">
        {featuredPortfolio.map((d) => (
          <div className="item" key={d.id}>
            <img
              src={d.img}
              alt=""

            />
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio