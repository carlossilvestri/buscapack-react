import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// import { css } from "@emotion/react";
import styled from '@emotion/styled';
// Estilos
import "../static/styles/utilidades.scss";
import "../static/styles/carrusel.css";
// Imagenes
import upsLogo from "../static/img/carrusel/ups-logo.jpg";
import fedexLogo from "../static/img/carrusel/fedex-logo.png";
import Barra from "./Barra";

// Styled Components:
const SeccionAltura = styled.div`
    height: 80vh;
    h3{
        margin-bottom: 50px;
        margin-top: 30px;
    }
`;
const Carrusel = () => {
  return (
    <Fragment>
      <main>
        <Barra/>
        <SeccionAltura>
            <div className="container">
               <h3 className="title-1">Algunas empresas de Envío</h3>
               <div id="theCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#theCarousel" data-slide-to="0" className="active"></li>
                     <li data-target="#theCarousel" data-slide-to="1"></li>
                     <li data-target="#theCarousel" data-slide-to="2"></li>
                     <li data-target="#theCarousel" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                     <div className="item active">
                        <img src={upsLogo} alt="Ilustracion" /> 
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                     </div>
                     <div className="item">
                        <img src={fedexLogo} alt="pintura" />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                     </div>
                     <a className="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
                     <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                     <span className="sr-only">anterior</span>
                     </a>
                     <a className="right carousel-control" href="#theCarousel" role="button" data-slide="next">
                     <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                     <span className="sr-only">siguiente</span>
                     </a>
                  </div>
               </div>
            </div>
         </SeccionAltura>
      </main>
    </Fragment>
  );
};

export default Carrusel;
