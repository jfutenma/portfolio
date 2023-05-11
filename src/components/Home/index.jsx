import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className={style.home}>
        <div className="fundo">
          <h6>Olá mundo, eu sou a</h6>
          <span id="nome">Juliana Futenma.</span>
          <a href="public/Curriculum_JulianaFutenma.pdf" download>
            <button className="curriculo">Baixar Currículo</button>
          </a>
        </div>
        <div className="texto">
          <p>
            Meu nome é Juliana Futenma, tenho 16 anos e faço técnico em
            Desenvolvimento de Sistemas na Etec de Cotia. Além de programação,
            gosto de Design UI/UX e pretendo seguir na carreira de software.
          </p>
        </div>

        <div className="titulo">
          <h3 id="st1">Linguagens</h3>
        </div>

        <div className="grupo">
          <button className="ling">HTML</button>
          <button className="ling">CSS</button>
          <button className="ling">C#</button>
          <button className="ling">React JS</button>
          <button className="ling">Java</button>
        </div>

        <h3 id="st2">Projetos</h3>

        <a href="https://github.com/jfutenma" target="_blank">
          <button class="curriculo" role="button">
            Github
          </button>
        </a>

        <div className="footer"></div>
      </div>
    </>
  );
};
export default Home;
