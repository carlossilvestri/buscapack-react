import React, { Fragment, useContext, useState } from "react";
import "../static/styles/modal.scss"; // Styles of the Modal
import xButton from "../static/img/buttons/button-x.svg";
import { ModalContext } from "../context/ModalContext";
import buscaPackLogoNaranja from "../static/img/buscapck-logo-naranja.svg";

const Modal1 = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [phaseTwo, setphaseTwo] = useState(false);
  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const togglePhaseTwo = () => {
    console.log("Diste click");
    if (phaseTwo) {
      setphaseTwo(false);
    } else {
      setphaseTwo(true);
    }
  };
  return (
    <Fragment>
      <div>
        <section className="cont-modal-main fondo-blanco animate__animated animate__bounceInRight">
          <div className="tajeta">
            <div className="container-elements-tarjeta">
              <div className="flex-elemts">
                <div className="cont-btn-salir">
                {!phaseTwo ? (<div></div> ) : null}
                {phaseTwo ? (<button
                    type="button"
                    className="btn btn-default animate__animated animate__fadeIn"
                    aria-label="Left Align"
                    onClick={togglePhaseTwo}
                  >
                    <span
                      className="glyphicon glyphicon-arrow-left"
                      aria-hidden="true"
                    ></span>
                  </button> ) : null}
                  <img src={xButton} alt="X button" onClick={toggleModal} />
                </div>
                {!phaseTwo ? (
                  <h3 className="title-vale1 animate__animated animate__fadeIn">¿Necesitas?</h3>
                ) : null}
                {phaseTwo ? (
                  <img
                    src={buscaPackLogoNaranja}
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px" }}
                    alt="buscapck-logo-blanco"
                  />
                ) : null}
                {!phaseTwo ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseTwo}
                  >
                    Hablar con un agente
                  </button>
                ) : null}
                {!phaseTwo ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseTwo}
                  >
                    Solicitar asistencia
                  </button>
                ) : null}
                {!phaseTwo ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseTwo}
                  >
                    Otro
                  </button>
                ) : null}
                {phaseTwo ? (
                  <a
                    href="tel:11824"
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    role="button"
                    style={{ width: "200px", textDecoration: "none" }}
                  >
                    Llamar ahora
                  </a>
                ) : null}

                {phaseTwo ? (
                  <span className="text-descriptivo animate__animated animate__fadeIn">
                    Publicidad de servicio de teléfonos de información de
                    abonados,llamando le facilitamos el teléfono de la compañía
                    y/o le ponemos en contacto con ella, el precio máximo por
                    minuto tres euros y dos céntimos, impuestos incluidos.
                    Duración máxima de la llamada diez minutos. Servicio
                    prestado por 11824 servicio informacion telefonica, S.L.
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Modal1;
