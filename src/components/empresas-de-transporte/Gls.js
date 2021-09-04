import React, { Fragment } from "react";
// Imagenes
import glsLogo from "../../static/img/empresas-de-transporte/gls-logo.jpg";
const Gls = () => {
  return (
    <Fragment>
      <article className="com-cub animate__animated animate__fadeIn">
        <div>
          <div>
            <div className="com-cub__wrapper">
              <h2 className="com-cub__title color-active">GLS</h2>
            </div>
            <div className="com-cub__wrapper">
              <p className="com-cub__text">
                <img className="img-empresa" src={glsLogo} alt="DHL Logo" />
                GLS es una empresa transportista que se dedica de forma
                exclusiva, a los servicios de paquetería estándar en España.
                Posee dos centrales, ubicados en Barcelona y Madrid y 30
                delegaciones en todo el país.
              </p>
              <p className="com-cub__text">
                La compañía inició sus actividades en 2005. Los servicios que
                presta la empresa han crecido exponencialmente. Las entregas
                flexibles han aumentado y también los servicios
                transfronterizos. Asimismo cuentan con transporte que cuida el
                medio ambiente, los envíos cubren las necesidades de los
                clientes particulares y empresas.
              </p>
              <p className="com-cub__text">
                La mayoría de paquetes internacionales transitan por el hub
                central de GLS ubicado en Neuenstein, Alemania. De igual modo,
                el servicio en áreas remotas e islas se hace a través de una
                empresa asociada a GLS.
              </p>
            </div>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">Servicios GLS</h2>
            <h2 className="com-cub__title">Envíos nacionales</h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              La empresa GLS tiene más de 480 agencias y 40 delegaciones propias
              para que tus envíos a España lleguen de manera rápida y segura. El
              tiempo de entrega del paquete estándar en la península es de 24
              horas laborables y de entre 24 y 72 cuando el destino es Islas
              Canarias, Baleares, Ceuta, Melilla, Andorra y Gibraltar.
            </p>
            <ul>
              <li>Envíos urgentes en menos de 24 horas</li>
            </ul>
            <p className="com-cub__text">
              El servicio de ExpressParcel es el producto premium de GLS, ideal
              para las entregas rápidas de paquetería nacional. Tiene horarios
              definidos a nivel nacional, el peso máximo es de 40 kg, la entrega
              está garantizada el siguiente día laborable. Además, cuenta con la
              mayor puntualidad y rapidez en cada envío, brindándole al cliente
              la posibilidad de elegir entre varias franjas horarias: 08:30,
              10:00, 14:00 o sábados.
            </p>
            <div className="com-cub__wrapper">
              <h2 className="com-cub__title">
                Envíos internacionales para empresas
              </h2>
            </div>
            <ul>
              <li>Enviar paquetes a Europa</li>
            </ul>
            <p className="com-cub__text">
              GLS tiene la flota de transporte más extensa de Europa. Por ello,
              los envíos se pueden entregar en los principales mercados europeos
              en tiempos estándar de 24 a 48 horas. Pero si envías paquetes a
              países más lejanos, el tiempo de entrega es de 72 a 96 horas.
            </p>
            <div className="com-cub__wrapper">
              <h2 className="com-cub__title">
                ¿Cuánto tarda en llegar un envío con GLS?
              </h2>
            </div>
            <p className="com-cub__text">
              Los envíos de GLS se enfocan en tener la mayor rapidez y
              puntualidad en todos sus servicios de paquetería y es una opción
              de envío que se puede tener en cuenta tanto para envíos nacionales
              como internacionales, los tiempos de tránsito para los envíos son
              los siguientes:
            </p>
            <ul>
              <li>
                Envíos Nacionales: Los plazos de entrega de GLS en la península
                es de 24 horas.
              </li>
              <li>
                Envíos Internacionales: Este servicio de entrega para envíos
                internacionales de GLS en Europa tiene un plazo de entrega del
                paquete de 24 a 96 horas, dependiendo del país de destino.
              </li>
            </ul>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">Planes peso volumétrico GLS</h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              La mayoría de correos como norma general tienen pesos máximos en
              el envío de paquetes, a continuación citamos los de GLS:
            </p>
            <ul>
              <li>
                <strong>Paq Today:</strong> Peso máximo por paquete: 5 kgs. Peso
                volumétrico máximo: 8 kgs.
              </li>
              <li>
                <strong>Paq Premium (Paq 48):</strong> Peso máximo por paquete:
                30 kg. Peso volumétrico máximo: 60 kg
              </li>
              <li>
                <strong>Paq Estándar (Paq 72):</strong> Peso máximo por paquete
                30 kg. Peso volumétrico máximo: 60 kg.
              </li>
              <li>
                <strong>Paquete Azul:</strong> Peso máximo por paquete 20 kg.
                Peso volumétrico máximo: 50 kg.
              </li>
            </ul>
            <p className="com-cub__text">
              Si se presenta un retraso o incidencia en el envío del paquete
              durante el transporte, la compañía pone a disposición del usuario
              un teléfono de atención al cliente en GLS, es el 902 11 33 00, al
              que podrás contactar de lunes a viernes de 9 a 19 horas.
            </p>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Gls;
