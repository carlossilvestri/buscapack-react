import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Barra from "./Barra";

const Contacto = () => {
  return (
    <Fragment>
      <main>
        <Barra />
        <section>
          <article className="com-cub animate__animated animate__fadeIn">
            <div className="com-cub__wrapper">
              <h2 className="com-cub__title">Contacto</h2>
            </div>
            <div className="com-cub__wrapper">
              <p className="com-cub__text">
                <span className="texto12TeXGyreAdventorRegularGris">
                PUBLICIDAD DIGITAL 11824 S.L. con NIF B42981282 y domicilio en C/ Albacete 19 -2 de Valencia, inscrita en el Registro Mercantil de Valencia con el numero 2021/412 de protocolo, asiento 725 del Diario 954 con inscripción 1ª de la hoja V-197080, al folio 115 del tomo 10953 del archivo, libro numero 8231 es titular del Sitio Web accesible a través de la URL{" "}
                  <a
                    href="https://busca-pack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://busca-pack.com
                  </a>{" "}
                  (en adelante, la Plataforma o el Sitio Web u 11824, indistintamente).
                </span>
              </p>
            </div>
          </article>
        </section>
      </main>
    </Fragment>
  );
};

export default Contacto;
/*
            <div className="com-cub__wrapper">
              <h2 className="com-cub__title">Política de Privacidad</h2>
            </div>            
            <div className="com-cub__wrapper">
              <p className="com-cub__text">
              </p>
            </div>
*/
