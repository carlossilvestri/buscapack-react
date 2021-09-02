import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal1 from "./Modal1";
import { ModalContext } from "../context/ModalContext";
import companiesJson from "../jsons/track-companies.json";

const Barra = () => {
  const history = useHistory();
  const p = history.location.pathname;
  const [textoBarra, settextoBarra] = useState("");
  const { modal, setModal } = useContext(ModalContext);
  let TRNum = `
  <div id="TRNum"></div>
  `;
  useEffect(() => {
    const textoDeLaBarra = (path = "") => {
      switch (path) {
        case "/":
          settextoBarra("ALGUNAS EMPRESAS DE ENVÍO");
          break;
        case "/aviso-legal":
          settextoBarra("AVISO LEGAL");
          break;
        case "/politica-privacidad":
          settextoBarra("Política de Privacidad");
          break;
        case "/politica-coockies":
          settextoBarra("Política de Cookies");
          break;
        case "/contacto":
          settextoBarra("Contacto");
          break;
        default:
          settextoBarra("");
          break;
      }
    };
    const verModal = (p = "") => {
      // v2
      let arraySearch = p.split("/");
      let searchValue = arraySearch[1];

      console.log("searchValue ", searchValue);
      console.log("companiesJson ", companiesJson);
      if (searchValue) {
        for (let i = 0; i < companiesJson.length; i++) {
          if (companiesJson[i].courier_code === searchValue) {
            setModal(true);
            return;
          }
        }
        // No se encontro
        setModal(false);
        // console.log("textoCompany ", textoCompany);
        // console.log("imgPorDefecto ", imgPorDefecto);
      }else{
        // No se coloco nada se esta en  /
        setModal(false);
      }
    };
    textoDeLaBarra(p);
    verModal(p);
  }, [p]);
  // console.log(p);
  /*const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };*/
  return (
    <Fragment>
      <div>
        <nav className="com-breadcrumbs">
          <div className="com-breadcrumbs__wrapper">
            <ol className="com-breadcrumbs__items">
              <div>
                <li className="com-breadcrumbs__item">
                  <Link to={"/"} itemProp="item">
                    <span itemProp="name">Buscapack</span>
                  </Link>
                </li>
                <li className="com-breadcrumbs__item">
                  <span itemProp="name">{textoBarra} </span>
                </li>
              </div>
              <div>
                <li className="com-breadcrumbs__item">
                  <div
                    className="alert alert-warning"
                    role="alert"
                    style={{
                      marginBottom: "0px",
                      textAlign: "center",
                      marginTop: "15px",
                    }}
                  >
                    ¿Contactar a la empresa de envíos? Te ayudamos da click
                    <a
                      href="https://buscapack-contacto.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-primary"
                      style={{ marginLeft: "10px" }}
                    >
                      aquí
                    </a>
                  </div>
                </li>
              </div>
            </ol>
          </div>
        </nav>
        <div dangerouslySetInnerHTML={{ __html: TRNum }}></div>
        {/* Mostrar Modal */}
        {modal ? <Modal1 /> : null}
      </div>
    </Fragment>
  );
};

export default Barra;
