import React, { Fragment, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../static/styles/modal.scss"; // Styles of the Modal
import xButton from "../static/img/buttons/button-x.svg";
import { ModalContext } from "../context/ModalContext";
import buscaPackLogoNaranja from "../static/img/buscapck-logo-naranja.svg";
import companiesJson from "../jsons/track-companies.json";

const Modal1 = () => {
  // Activa o desactiva el modal.
  const { modal, setModal } = useContext(ModalContext);
  // Fases
  const [phaseOne, setphaseOne] = useState(false);
  const [phaseTwo, setphaseTwo] = useState(false);
  const [phaseThree, setphaseThree] = useState(false);
  // Variables a usar en el Pop Up.
  const [nombreCompany, setNombreCompany] = useState("");
  // const [companyCode, setCompanyCode] = useState("");
  const [imgPorDefecto, setImgPorDefecto] = useState("");
  // Get the router object
  const history = useHistory();
  const p = history.location.pathname;
  // History - Router
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
            // setCompanyCode(searchValue);
            setNombreCompany(companiesJson[i].courier_name);
            setModal(true);
            setImgPorDefecto(companiesJson[i].courier_logo);
            setphaseOne(true);
            setphaseTwo(false);
            setphaseThree(false);
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
  const togglePhaseOne = () => {
    // console.log("Diste click");
    if (phaseTwo) {
      setphaseTwo(false);
      setphaseThree(false);
      setphaseOne(false);
    } else {
      setphaseTwo(false);
      setphaseThree(false);
      setphaseOne(true);
    }
  };
  const togglePhaseTwo = () => {
    // console.log("Diste click");
    if (phaseTwo) {
      setphaseTwo(false);
      setphaseThree(false);
      setphaseOne(false);
    } else {
      setphaseTwo(true);
      setphaseThree(false);
      setphaseOne(false);
    }
  };
  // Permite mostrar el boton de llamar
  const togglePhaseThree = () => {
      // console.log("Diste click. Dentro de togglePhaseThree");
      if (phaseThree) {
        setphaseThree(false);
        setphaseTwo(false);
        setphaseOne(false);
      } else {
        setphaseThree(true);
        setphaseTwo(false);
        setphaseOne(false);
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
                  {phaseThree? (
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
                  ) : null} 
                  <img src={xButton} alt="X button" onClick={toggleModal} />
                </div>
                {phaseTwo ? (
                  <h3 className="title-vale1 animate__animated animate__fadeIn">
                    ¿Qué necesita?
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
                {phaseTwo ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Localizar un envío
                  </button>
                ) : null}
                {phaseTwo ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Hablar con un agente
                  </button>
                ) : null}
                {phaseTwo ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Solicitar asistencia
                  </button>
                ) : null}
                {phaseTwo ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Otro
                  </button>
                ) : null}
                {phaseOne ? (
                  <h3 className="title-vale1 animate__animated animate__fadeIn">
                    ¿Es usted cliente de {nombreCompany}?
                  </h3>
                ) : null}
                {phaseOne && imgPorDefecto.length > 0 ? (
                  <img
                    src={imgPorDefecto}
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px", maxWidth: '200px' }}
                    alt="img-company-from-db"
                  />
                ) : null}
                {phaseOne ? (
                  <button
                    onClick={togglePhaseTwo}
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px", textDecoration: "none" }}
                  >
                    Sí
                  </button>
                ) : null}
                {phaseOne ? (
                  <button
                    onClick={togglePhaseTwo}
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px", textDecoration: "none" }}
                  >
                    No
                  </button>
                ) : null}

                {phaseOne ? (
                  <span className="text-descriptivo animate__animated animate__fadeIn">
                    {/* Publicidad de servicio de teléfonos de información de
                    abonados,llamando le facilitamos el teléfono de la compañía
                    y/o le ponemos en contacto con ella, el precio máximo por
                    minuto tres euros y dos céntimos, impuestos incluidos.
                    Duración máxima de la llamada diez minutos. Servicio
                    prestado por 11824 servicio informacion telefonica, S.L. */}
                  </span>
                ) : null}
                {/* Start Fase 3. */}
                {phaseThree ? (
                  <h3 className="title-vale1 animate__animated animate__fadeIn" style={{ fontSize: '28px' }}>
                    Información recogida, pulse para ser atendido.
                  </h3>
                ) : null}
                {/* Start Img de la compania. */}
                {phaseThree && imgPorDefecto.length > 0 ? (
                  <img
                    src={imgPorDefecto}
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px", maxWidth: "210px" }}
                    alt="img-company-from-db"
                  />
                ) : null}
                {/* Fin Img de la compania. */}
                {/* Start Img lo de buscapack naranja (Cuando no hay img de la compania). */}
                {phaseThree && imgPorDefecto.length === 0 ? (
                  <img
                    src="/static/img/buscapck-logo-naranja.svg"
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px" }}
                    alt="buscapck-logo-blanco"
                  />
                ) : null}
                {/* Fin Img lo de buscapck naranja (Cuando no hay img de la compania). */}
                {phaseThree ? (
                  <a
                    href="tel:11824"
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    role="button"
                    style={{ width: "200px", textDecoration: "none" }}
                  >
                    Llamar ahora
                  </a>
                ) : null}

                {phaseThree ? (
                  <span className="text-descriptivo animate__animated animate__fadeIn">
                    Publicidad de servicio de teléfonos de información de
                    abonados,llamando le facilitamos el teléfono de la compañía
                    y/o le ponemos en contacto con ella, el precio máximo por
                    minuto tres euros y dos céntimos, impuestos incluidos.
                    Duración máxima de la llamada diez minutos. Servicio
                    prestado por 11824 servicio informacion telefonica, S.L.
                  </span>
                ) : null}
                {/* Fin Fase 3. */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Modal1;
