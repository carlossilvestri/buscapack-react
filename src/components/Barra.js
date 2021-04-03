import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Barra = () => {
  const history = useHistory();
  const p = history.location.pathname;
  const [textoBarra, settextoBarra] = useState("");
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
    textoDeLaBarra(p);
  }, [p]);
  // console.log(p);
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
                  <div className="alert alert-warning" role="alert" style={{marginBottom: '0px'}}>
                    ¿Contactar a la empresa de envíos? Te ayudamos da
                    click
                    <button type="button" className="btn btn-primary" style={{marginLeft: '10px'}}>
                      aquí
                    </button>
                  </div>
                </li>
              </div>
            </ol>
          </div>
        </nav>
        <div dangerouslySetInnerHTML={{__html: TRNum}}></div>
      </div>
    </Fragment>
  );
};

export default Barra;
