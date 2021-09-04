import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

// Imagenes
import buscaPackLogoNaranja from "../static/img/buscapck-logo-naranja.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="com-footer">
        <section className="com-sitemap">
          <div className="com-sitemap__wrapper">
            <div className="com-sitemap__category">
              <ul className="com-sitemap__items">
                <li className="com-sitemap__item">
                  <Link to={`/aviso-legal`}>
                    Aviso Legal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="com-sitemap__category">
              <ul className="com-sitemap__items">
                <li className="com-sitemap__item">
                  <Link to={`/politica-privacidad`}>
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div className="com-sitemap__category">
              <ul className="com-sitemap__items" data-js="sitemap-category-items">
                <li className="com-sitemap__item">
                  <Link to={`/politica-coockies`}>
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="com-footer__legal">
          <div className="com-footer__logo">
            <Link className="" to={`/`}>
              <img
                src={buscaPackLogoNaranja}
                alt="buscapck-logo-naranja"
                css={css`width: 160px;`}
              />
            </Link>
          </div>
          <div className="com-footer__legal-terms">
            © 2021 busca-pack.com - Todos los derechos reservados.
            {/* <br/> */}
            <div className="com-footer__legal-links">
              <div className="com-footer__legal-link">
                <Link to={`/politica-privacidad`}>
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Fragment>
  );
};

export default Footer;
