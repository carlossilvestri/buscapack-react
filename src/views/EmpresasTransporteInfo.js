import React, { Fragment } from "react";
import Barra from "../components/Barra";
import DHL from "../components/empresas-de-transporte/Dhl";
import Envalia from "../components/empresas-de-transporte/Envalia";
import Gls from "../components/empresas-de-transporte/Gls";
// Estilos.
import "../static/styles/empresasTransporteInfo.scss";

const EmpresasTransporteInfo = () => {
  return (
    <Fragment>
      <main>
        <Barra />
        <section>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title text-center">
              EMPRESAS DE TRANSPORTE
            </h2>
          </div>
          <Gls/>
          <Envalia />
          <DHL />
        </section>
      </main>
    </Fragment>
  );
};

export default EmpresasTransporteInfo;
