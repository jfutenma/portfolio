import React from "react";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className={style.menu}>
        <div class="linha">
          <header>
            <h1 className={style.logo}>JF</h1>
            <div className="links">
              <ul class="menu inline sem-marcador">
                <li>
                  <Link to="">Sobre</Link>
                </li>
                <li>
                  <a href="https://github.com/jfutenma" target="_blank" >Projetos</a>
                </li>
                <li>
                  <Link to="">Contato</Link>
                </li>
              </ul>
            </div>
            <div className="redes">
              <a className="rede" href="mailto:juuhf.de@gmail.com" target="_blank"><img src="public/email.png" alt="" /></a>
              <a className="rede" href="https://www.linkedin.com/in/jfutenma/" target="_blank"><img src="public/linkedin.png" alt="" /></a>
              <a className="rede" href="https://wa.me/5511939535903?text=Ol%C3%A1,%20sou%20a%20Juliana%20Futenma!" target="_blank"><img src="public/whatsapp.png" alt="" /></a>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};
export default Menu;
