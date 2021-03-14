import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Barra = () => {
    const history = useHistory();
    const p = history.location.pathname;
    const [textoBarra, settextoBarra] = useState('');
    useEffect(() => {
        const textoDeLaBarra = (path ='') => {
            switch(path){
                case '/':
                    settextoBarra('ALGUNAS EMPRESAS DE ENVÍO');
                break;
                case '/aviso-legal':
                    settextoBarra('AVISO LEGAL');
                break;
                case '/politica-privacidad':
                    settextoBarra('Política de Privacidad');
                break;
                case '/politica-coockies':
                    settextoBarra('Política de Cookies');
                break;
                default:
                    settextoBarra('');
                break;
            }
        }
        textoDeLaBarra(p);
    }, []);
    // console.log(p);
  return (
    <Fragment>
      <nav className="com-breadcrumbs">
        <div className="com-breadcrumbs__wrapper">
          <ol className="com-breadcrumbs__items">
            <li className="com-breadcrumbs__item">
              <Link to={"/"} itemProp="item">
                <span itemProp="name">Buscapack</span>
              </Link>
            </li>
            <li className="com-breadcrumbs__item">
              <span itemProp="name">{textoBarra}</span>
            </li>
          </ol>
        </div>
      </nav>
    </Fragment>
  );
};

export default Barra;
