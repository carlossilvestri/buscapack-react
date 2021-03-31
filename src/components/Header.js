import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import buscapackFondoBlanco from "../static/img/buscapck-logo-blanco.svg";

const Header = () => {
  const [numEnvio, setnumEnvio] = useState('');

  // Funciones
  const irATrackingmorePage = ()=>{
    if(numEnvio !== ''){
      // console.log('irATrackingmorePage ', numEnvio);
      window.location = "https://www.trackingmore.com/es/" + numEnvio;
    }
  }
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
                <a
                  className="com-header__menu-item-link"
                  href="https://www.packlink.es/empresas-de-transporte/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Empresas de transporte
                </a>
              </li>
              <li className="com-header__menu-item com-header__menu-item--help">
                <Link
                  className="com-header__menu-item-link"
                  to={"/contacto"}
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
               </header>
               <div className="com-searchbox__tab-content-wrapper">
                  <section className="com-searchbox__tab-content">
                  </section>
                  {/* <!-- NUMERO DE ENVIO --> */}
                  <section className="com-searchbox__tab-content is-active">
                     <div className="com-searchbox__form com-searchbox__form--tracking">
                        <div className="com-searchbox__input-wrapper com-searchbox__input-wrapper--tracking com-labeled-input">
                           {/* <!-- <label for="searchbox-tracking">Número de envío Buscapack</label> --> */}
                           <input type="text"
                              className="com-input com-searchbox__input--tracking"
                              required
                              defaultValue=""
                              onChange={e => setnumEnvio(e.target.value)}
                              id="searchbox-tracking"
                              placeholder="Número de Seguimiento de Envío"
                              name="num"/>
                        </div>
                        <button type="button" className="com-searchbox__submit com-searchbox__submit--tracking" onClick={ irATrackingmorePage }>Buscar</button>
                     </div>
                  </section>
               </div>
            </section>
         </div>
      </div>
    </Fragment>
  );
};

export default Header;
