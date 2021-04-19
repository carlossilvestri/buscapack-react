import React, { Fragment, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../static/styles/modal.scss"; // Styles of the Modal
import xButton from "../static/img/buttons/button-x.svg";
import { ModalContext } from "../context/ModalContext";
import buscaPackLogoNaranja from "../static/img/buscapck-logo-naranja.svg";
import companiesJson from "../jsons/track-companies.json";

const Modal1 = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [phaseTwo, setphaseTwo] = useState(false);
  const [nombreCompany, setNombreCompany] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [imgPorDefecto, setImgPorDefecto] = useState("");
  // Get the router object
  const history = useHistory();
  const p = history.location.pathname;
  // History
  /*
  // v1
  let arraySearch = history.location.search.split("=");
  let searchValue = arraySearch[1];
  */
  // v2
  let arraySearch = p.split("/");
  let searchValue = arraySearch[1];

  useEffect(() => {
    const getCompanyCode = () => {
      console.log("p ", p);
      console.log("searchValue ", searchValue);
      // Get current history
      // let array = p.split("/");
      // let finalPosition = array.length;
      // console.log("arraySearch desde modal ", searchValue);
      // console.log("finalPosition ", finalPosition);
      if (searchValue) {
        for (let i = 0; i < companiesJson.length; i++) {
          if (companiesJson[i].courier_code === searchValue) {
            // console.log("Encontrada ");
            setCompanyCode(searchValue);
            setNombreCompany(companiesJson[i].courier_name);
            setModal(true);
            setImgPorDefecto(companiesJson[i].courier_logo);
            setphaseTwo(true);
            return;
            // console.log("imgPorDefecto ", imgPorDefecto);
          }
        }
        // No se encontro
        setModal(false);
        // console.log("textoCompany ", textoCompany);
        // console.log("imgPorDefecto ", imgPorDefecto);
      } else {
        // No se coloco nada se esta en  /
        setModal(false);
      }
    };
    getCompanyCode();
  }, [searchValue]);
  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const togglePhaseTwo = () => {
    // console.log("Diste click");
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
                  {phaseTwo ? <div></div> : null}
                  {/* {phaseTwo ? (
                    <button
                      type="button"
                      className="btn btn-default animate__animated animate__fadeIn"
                      aria-label="Left Align"
                      onClick={togglePhaseTwo}
                    >
                      <span
                        className="glyphicon glyphicon-arrow-left"
                        aria-hidden="true"
                      ></span>
                    </button>
                  ) : null} */}
                  <img src={xButton} alt="X button" onClick={toggleModal} />
                </div>
                {!phaseTwo ? (
                  <h3 className="title-vale1 animate__animated animate__fadeIn">
                    ¿Necesitas?
                  </h3>
                ) : null}
                {phaseTwo && imgPorDefecto.length === 0 ? (
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
                  <h3 className="title-vale1 animate__animated animate__fadeIn">
                    ¿Es usted cliente de {nombreCompany}?
                  </h3>
                ) : null}
                {phaseTwo && imgPorDefecto.length > 0 ? (
                  <img
                    src={imgPorDefecto}
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px", maxWidth: '200px' }}
                    alt="img-company-from-db"
                  />
                ) : null}
                {phaseTwo ? (
                  <a
                    href={`https://buscapack-contacto.com/${companyCode}`}
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px", textDecoration: "none" }}
                  >
                    Sí
                  </a>
                ) : null}
                {phaseTwo ? (
                  <a
                    href={`https://buscapack-contacto.com/${companyCode}`}
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px", textDecoration: "none" }}
                  >
                    No
                  </a>
                ) : null}

                {phaseTwo ? (
                  <span className="text-descriptivo animate__animated animate__fadeIn">
                    {/* Publicidad de servicio de teléfonos de información de
                    abonados,llamando le facilitamos el teléfono de la compañía
                    y/o le ponemos en contacto con ella, el precio máximo por
                    minuto tres euros y dos céntimos, impuestos incluidos.
                    Duración máxima de la llamada diez minutos. Servicio
                    prestado por 11824 servicio informacion telefonica, S.L. */}
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
