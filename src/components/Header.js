import React, { Fragment } from "react";
// import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buscapackFondoBlanco from "../static/img/buscapck-logo-blanco.svg";
// import axios from "axios";

const Header = () => {
  // const [numEnvio, setnumEnvio] = useState("");
  let formularioHTML = `
  <form class="com-searchbox__form com-searchbox__form--tracking"
        role="form" action="//track.trackingmore.com" method="get" onsubmit="return false"
        >
          <div class="com-searchbox__input-wrapper com-searchbox__input-wrapper--tracking com-labeled-input">
            <!-- <label for="searchbox-tracking">Número de envío Buscapack</label> -->
            <input type="text"
              class="com-input com-searchbox__input--tracking"
              required
              value=""
              id="button_tracking_number"
              name="button_tracking_number" 
              placeholder="Número de Seguimiento de Envío"
              name="num"/>
          </div>
          <input type="hidden" name="lang" value="es" />
          <input id="button_express_code" type="hidden" name="lang" value="" />
          <button id="query" onclick="return doTrack()" type="submit" class="com-searchbox__submit com-searchbox__submit--tracking">Buscar</button>
        </form>
  `;
  // Funciones
  /*const irATrackingmorePage = () => {
    if (numEnvio !== "") {
      // console.log('irATrackingmorePage ', numEnvio);
      window.location = "https://www.trackingmore.com/es/" + numEnvio;
    }
  };*/
  /*useEffect(() => {
    const testApi = async () => {
      try {
        const url = `https://api.trackingmore.com/v3/trackings/courier`;
        const result = await axios.get(url, {
          headers: {
            "Tracking-Api-Key": "6c43fcfc-653a-4dc4-8c1a-9fe19d330a9b",
          },
        });
        console.log("result  ", result);
      } catch (error) {
        console.log("There was a mistake: ", error);
      }
    };

    // testApi();
  }, []);*/

  return (
    <Fragment>
      <div>
      <div className="com-cub-hero  has-searchbox-unfolded imagenFondo">
        <header className="com-header ">
          <div className="com-header__logo">
            <Link className="" to={"/"}>
              <img
                src={buscapackFondoBlanco}
                alt="buscapck-logo-blanco"
              />
            </Link>
          </div>
          <nav className="com-header__menu">
            <button type="button" className="com-header__menu-toggle"></button>
            <ul className="com-header__menu-items">
              <li className="com-header__menu-item">
                <a
                  className="com-header__menu-item-link"
                  href="https://www.trackingmore.com/carriers.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Empresas de transporte
                </a>
              </li>
              <li className="com-header__menu-item com-header__menu-item--help">
                <Link className="com-header__menu-item-link" to={"/contacto"}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="com-cub-hero__wrapper">
          <h1 className="com-cub-hero__moto">
            Localizador, tracking y seguimiento de envíos nacionales e
            internacionales
          </h1>
        </div>
        <div className="com-searchbox">
          <section className="com-searchbox__wrapper">
            <header className="com-searchbox__header">
              <ul className="com-searchbox__tabber">
                <li className="com-searchbox__tab com-searchbox__tab--track is-active">
                  <Link
                    className="com-searchbox__tab-text com-searchbox__tab-text--desktop"
                    to={"#"}
                  >
                    Seguimiento
                  </Link>
                  <Link
                    className="com-searchbox__tab-text com-searchbox__tab-text--mobile"
                    to={"#"}
                  >
                    Seguimiento
                  </Link>
                </li>
              </ul>
            </header>
            <div className="com-searchbox__tab-content-wrapper">
              <section className="com-searchbox__tab-content"></section>
              {/* <!-- NUMERO DE ENVIO --> */}
              <section className="com-searchbox__tab-content is-active">
                <div dangerouslySetInnerHTML={{__html: formularioHTML}}></div>
              </section>
            </div>
          </section>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Header;
