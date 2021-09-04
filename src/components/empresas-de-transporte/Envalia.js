import React, { Fragment } from "react";
// Imagenes
import envaliaLogo from "../../static/img/empresas-de-transporte/envialia-logo.jpg";
const Envalia = () => {
  return (
    <Fragment>
      <article className="com-cub animate__animated animate__fadeIn">
        <div>
          <div>
            <div className="com-cub__wrapper">
              <h2 className="com-cub__title color-active">ENVIALIA</h2>
            </div>
            <div className="com-cub__wrapper">
              <p className="com-cub__text">
                <img className="img-empresa" src={envaliaLogo} alt="DHL Logo" />
                Envialia es una compañía de transporte de mensajería urgente y
                especializada en eCommerce, logística y distribución con
                implantación en España y Portugal. Situándose así en las
                primeras posiciones del ranking del sector con más de 30.000
                envíos diarios, gracias a los más de 300 puntos de entrega que
                coordinan el proceso logístico.
              </p>
              <p className="com-cub__text">
                La empresa nace con un espíritu innovador, priorizando la
                investigación y desarrollo de sistemas informáticos más
                avanzados que pone a disposición en todas las agencias para que
                tengan las herramientas y recursos que ayuden a facilitar un
                servicio de mayor calidad.
              </p>
              <p className="com-cub__text">
                Hoy en día, Enivialia, continúa exigiéndose para brindar un
                mejor servicio, es por ello que es la empresa de envíos con una
                de las tasas más bajas de incidencias por su estricto control de
                calidad. Convirtiéndola en una empresa de gran proyección a
                nivel nacional e internacional.
              </p>
            </div>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">
              ¿Cómo enviar un paquete con Envialia?
            </h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              En Envialia se puede contratar el envío a través de la página web,
              con tan solo rellenar el formulario de esta página e
              inmediatamente te mostrará todos los servicios y tarifas que tiene
              disponible. Las tarifas varían en función del servicio de
              mensajería que necesites.
            </p>
            <p className="com-cub__text">
              Dependiendo de la urgencia, se podrá utilizar los diferentes
              servicios que presta la empresa como: el servicio express que
              realiza la entrega en 24 horas del paquete que envíes en el
              territorio nacional; pero si tienes envíos menos urgentes, tiene
              un servicio de 48 a 72 horas, disponible para envíos de paquetes a
              destinos nacionales e internacionales, manteniendo siempre unas
              tarifas económicas.
            </p>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title text-center">Servicios que presta Envialia</h2>
            <h2 className="com-cub__title">Envíos con entrega en 24 horas</h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              Los envíos que realices con entrega en 24 horas llegarán al día
              siguiente antes de las 19:00 horas. El servicio tiene algunas
              restricciones en el envío del paquete en cuanto a las medidas y el
              peso, estas son: las medidas máximas son 160 cm, el peso no puede
              ser mayor a 47 kg y el valor máximo de alto + circunferencia, la
              circunferencia = (2 x ancho) + (2 x largo): 500.01 cm.
            </p>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">
              Envíos no urgentes con entrega en 48/72h
            </h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              También tiene el servicio de envíos no urgentes, la entrega del
              paquete se realiza durante los tres días laborables siguientes a
              su recogida. Este servicio de entrega se realiza en su mayoría
              después de 48 horas, a lo largo del día. Presenta las mismas
              restricciones en cuanto a tamaño en las entregas de 24 horas, son
              las siguientes: Las medidas no pueden superar los 160 cm, el peso
              debe ser de 47 kg y el valor máximo de alto + circunferencia,
              donde circunferencia = (2 x ancho) + (2 x largo) 500.01 cm.
            </p>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">Tarifas Envialia</h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              En la página de Envialia podrás conocer las tarifa, con tan solo
              realizar una búsqueda en el comparador de envíos, allí eliges el
              origen y destino de tu envío, además te la opción de colocar el
              tamaño y peso de tu paquete y al momento tendrás a tu disposición
              todas las tarifas para tu envío.
            </p>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Envalia;
