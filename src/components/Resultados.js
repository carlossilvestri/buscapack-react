import React, { Fragment } from "react";
// Estilos
import "../static/styles/results.css";
// Imagenes
import tlfImg from "../static/img/icons/tlf.svg";
import checkedImg from "../static/img/icons/checked.svg";
import dateImg from "../static/img/icons/date.svg";
import laptopImg from "../static/img/icons/laptop.svg";

const Resultados = () => {

  return (
    <Fragment>
      <main>
        <div className="cont-all-results animate__animated animate__fadeIn">
          {/* <!-- Start Header de la descripcion de la compania --> */}
          <section className="cont-header">
            <div className="cont-logo">
              <img
                src={"//s.trackingmore.com/images/icons/express/companylogo/21050.jpg"}
                alt="Logo"
              />
            </div>
            <h3>USPS Tracking</h3>
            <div className="cont-extra-info">
              <div className="cont-tlf">
                <img src={tlfImg} alt="Tlf" />
                <p>Tlf 123431</p>
              </div>
              <div className="cont-web">
                <img src={laptopImg} alt="laptop" />
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.google.com
                  </a>
              </div>
            </div>
          </section>
          {/* <!-- End Header de la descripcion de la compania -->
        <!-- Start Seccion de los resultados del tracking --> */}
          <section className="cont-results">
            <div className="cont-results-header">
              <h4>Transit (2)</h4>
            </div>
            <div className="cont-results-body">
              <div className="cont-1-info">
                <p>País de Origen: US</p>
                <p>País de Destino: US</p>
              </div>
              <div className="cont-2-info">
                <img src={checkedImg} alt="checked" />
                <p className="p-light">
                  Llegó a su destino: arrived_destination_date
                </p>
              </div>
              <ul>
                <li className="cont-3-info">
                  <div className="cont-date">
                    <img src={dateImg} alt="date" />
                    <p className="p-light">2021-03-13 05:25</p>
                  </div>
                  <p className="p-light">
                    Departed USPS Regional Facility, Your item departed our USPS
                    facility in SEMINOLE-ORLANDO FL DISTRIBUTION CENTER on March
                    13, 2021 at 5:25 am. The item is currently in transit to the
                    destination.,SEMINOLE-ORLANDO FL DISTRIBUTION
                    CENTER,2021-03-13 05:25
                  </p>
                </li>
                <li className="cont-3-info">
                  <div className="cont-date">
                    <img src={dateImg} alt="date" />
                    <p className="p-light">2021-03-13 05:25</p>
                  </div>
                  <p className="p-light">
                    Departed USPS Regional Facility, Your item departed our USPS
                    facility in SEMINOLE-ORLANDO FL DISTRIBUTION CENTER on March
                    13, 2021 at 5:25 am. The item is currently in transit to the
                    destination.,SEMINOLE-ORLANDO FL DISTRIBUTION
                    CENTER,2021-03-13 05:25
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* <!-- End Seccion de los resultados del tracking  --> */}
        </div>
      </main>
    </Fragment>
  );
};

export default Resultados;
