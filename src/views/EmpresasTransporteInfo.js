import React, { Fragment } from "react";
import Barra from "../components/Barra";
import DHL from "../components/empresas-de-transporte/Dhl";
import Envalia from "../components/empresas-de-transporte/Envalia";
import Gls from "../components/empresas-de-transporte/Gls";
import CorreosExpress from "../components/empresas-de-transporte/CorreosExpress";
import Seur from "../components/empresas-de-transporte/Seur";
// Estilos.
import "../static/styles/empresasTransporteInfo.scss";
import Correos from "../components/empresas-de-transporte/Correos";

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
          <Correos/>
          <Seur/>
          <CorreosExpress/>
          <Gls/>
          <Envalia />
          <DHL />
        </section>
      </main>
    </Fragment>
  );
};

export default EmpresasTransporteInfo;
