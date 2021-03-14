import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import buscapackFondoBlanco from "../static/img/buscapck-logo-blanco.svg";

const Header = () => {
  return (
    <Fragment>
      <div
        className="com-cub-hero  has-searchbox-unfolded imagenFondo"
      >
        <header className="com-header ">
          <div className="com-header__logo">
            <Link className="" to={"/"}>
              <img
                src={buscapackFondoBlanco}
                alt="buscapck-logo-blanco"
                css={css`width: 160px;`}
              />
            </Link>
          </div>
          <nav className="com-header__menu">
            <button type="button" className="com-header__menu-toggle"></button>
            <ul className="com-header__menu-items">
              <li className="com-header__menu-item">
                <Link
                  className="com-header__menu-item-link"
                  to={"https://www.packlink.es/empresas-de-transporte/"}
                >
                  {" "}
                  Empresas de transporte
                </Link>
                <ul className="com-header__submenu-items">
                  <li className="com-header__submenu-item">
                    <Link
                      className="com-header__submenu-item-link"
                      to={"/correos"} 
                    >
                      Correos
                    </Link>
                  </li>
                  <li className="com-header__submenu-item">
                    <Link
                      className="com-header__submenu-item-link"
                      to={"https://www.packlink.es/empresas-de-transporte/"} 
                    >
                      Ver todos
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="com-header__menu-item com-header__menu-item--help">
                <Link
                  className="com-header__menu-item-link"
                  to={"https://support.packlink.com/hc/es-es"}
                >
                  Ayuda
                </Link>
              </li>
              <li className="com-header__menu-item com-header__menu-item--help">
                <Link
                  className="com-header__menu-item-link"
                  to={"https://support.packlink.com/hc/es-es"}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="com-cub-hero__wrapper">
            <h1 className="com-cub-hero__moto">Localizador, tracking y seguimiento de envíos nacionales e internacionales</h1>
         </div>
         <div className="com-searchbox">
            <section className="com-searchbox__wrapper">
               <header className="com-searchbox__header">
                  <ul className="com-searchbox__tabber">
                     <li className="com-searchbox__tab com-searchbox__tab--track is-active" >
                        <Link className="com-searchbox__tab-text com-searchbox__tab-text--desktop" to={"#"}>Seguimiento</Link>
                        <Link className="com-searchbox__tab-text com-searchbox__tab-text--mobile" to={"#"}>Seguimiento</Link>
                     </li>
                  </ul>
                  <Link to={"https://pro.packlink.es?internal_source=search_box&source_url=https%3A%2F%2Fwww.packlink.es%2Fseguimiento-envios%2F"}>
                  </Link>
               </header>
               <div className="com-searchbox__tab-content-wrapper">
                  <section className="com-searchbox__tab-content">
                  </section>
                  {/* <!-- NUMERO DE ENVIO --> */}
                  <section className="com-searchbox__tab-content is-active">
                     <form className="com-searchbox__form com-searchbox__form--tracking">
                        <div className="com-searchbox__input-wrapper com-searchbox__input-wrapper--tracking com-labeled-input">
                           {/* <!-- <label for="searchbox-tracking">Número de envío Buscapack</label> --> */}
                           <input type="text"
                              className="com-input com-searchbox__input--tracking"
                              required
                              defaultValue=""
                              id="searchbox-tracking"
                              placeholder="Número de Seguimiento de Envío"
                              name="num"/>
                        </div>
                        <button type="submit" className="com-searchbox__submit com-searchbox__submit--tracking">Buscar</button>
                     </form>
                  </section>
               </div>
            </section>
         </div>
      </div>
    </Fragment>
  );
};

export default Header;
