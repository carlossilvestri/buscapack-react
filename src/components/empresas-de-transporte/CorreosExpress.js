import React, { Fragment } from "react";
import correosExpressLogo from "../../static/img/empresas-de-transporte/correos-express.jpg";

const CorreosExpress = () => {
  return (
    <Fragment>
      <article className="com-cub animate__animated animate__fadeIn">
        <div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title color-active">CORREOS EXPRESS</h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              <img className="img-empresa" src={correosExpressLogo} alt="DHL Logo" />
              Correos Express es la empresa de transporte urgente de España y la
              única con el 100% de oficinas y delegaciones propias, ofrece mayor
              seguridad, tiempos de respuesta más rápidos y mayor flexibilidad.
              Se encarga trabajar exclusivamente con envíos urgentes y en la
              actualidad ha realizado más de 69 millones de envíos anuales.
            </p>
            <p className="com-cub__text">
              Cuando utilizas Correos Express los paquetes que envíes tendrán
              algunos beneficios como lo son:
            </p>
            <ul>
              <li>
                Localización del destinatario en caso de que no se encuentre en
                el momento de la entrega.
              </li>
              <li>Se gestionan las incidencias que se presenten.</li>
              <li>Cuenta con rastreo online.</li>
              <li>Cuenta con un seguro básico.</li>
              <li>
                Se encarga de realizar dos intentos de entrega al destinatario.
              </li>
            </ul>
          </div>
        </div>
        <div className="com-cub__wrapper">
          <h2 className="com-cub__title">Servicios de Correos Express</h2>
        </div>
        <div className="com-cub__wrapper">
          <p className="com-cub__text">
            Con Correos Express tendrás a tu disposición los siguientes
            servicios. Sin ningún coste adicional.
          </p>
          <ul>
            <li>Recogida a domicilio</li>
          </ul>
          <p className="com-cub__text">
            La empresa brinda el servicio de recoger el pedido en la comodidad
            del hogar del destinatario o donde el cliente lo prefiera, tan solo
            tienes que solicitarlo en atención al cliente.
          </p>
          <ul>
            <li>Seguro de mercancía</li>
          </ul>
          <p className="com-cub__text">
            Los envíos que realizas en Correos Express incluyen un seguro básico
            de la mercancía.
          </p>
          <ul>
            <li>Seguimiento online</li>
          </ul>
          <p className="com-cub__text">
            La compañía ofrece a sus clientes rastreo del envío por vía online a
            través del área de cliente. Desde la recogida hasta la entrega.
          </p>
          <ul>
            <li>Localización inmediata</li>
          </ul>
          <p className="com-cub__text">
            Los dispositivos PDA con los que está dotada el 100% la flota,
            permite la localización inmediata del destinatario.
          </p>
          <ul>
            <li>Gestión proactiva de incidencias</li>
          </ul>
          <p className="com-cub__text">
            Este servicio comienza antes que el envío vuelva del reparto, desde
            allí se inicia la localización del destinatario para concertar el
            segundo intento de entrega en el menor tiempo posible.
          </p>
          <ul>
            <li>Segundo intento de entrega</li>
          </ul>
          <p className="com-cub__text">
            Si en el momento de la entrega del paquete, el envío no se puede
            concretar por ausencia del destinatario, la empresa hará un segundo
            intento de entrega antes del plazo de vencimiento del servicio.
          </p>
        </div>
        <div className="com-cub__wrapper">
          <h2 className="com-cub__title">Envíos al extranjero</h2>
        </div>
        <div className="com-cub__wrapper">
          <p className="com-cub__text">
            Con Correos Express el envío de paquetes al extranjero es muy
            sencillo. Ya que ofrece una cobertura internacional muy amplia con
            los mejores precios, brindando rapidez, puntualidad y seguridad en
            dos modelos de envío según tu necesidad:
          </p>
          <ul>
            <li>Internacional Express</li>
          </ul>
          <p className="com-cub__text">
            Ofrece los servicios aéreos urgentes puerta a puerta con cobertura
            mundial. De igual manera realiza entrega de documentos y paquetes en
            cualquier parte del mundo con óptimos tiempos de tránsito.
          </p>
          <ul>
            <li>Internacional Estándar</li>
          </ul>
          <p className="com-cub__text">
            Este servicio es más económico, realiza las entregas puerta a puerta
            con cobertura europea. El servicio estándar es ideal para aquellos
            envíos de carácter menos urgente, con óptimos tiempos de tránsito
            (la entrega es de entre 2-3 días en los principales países de la
            Unión Europea).
          </p>
        </div>
        <div className="com-cub__wrapper">
          <h2 className="com-cub__title">Baleares – Canarias Express</h2>
        </div>
        <div className="com-cub__wrapper">
          <p className="com-cub__text">
            Ofrece servicio de entrega de paquetes con destino a Baleares y
            Canarias, garantizando la entrega en días laborales, contando a
            partir de la admisión del envío. Sin embargo, como restricción los
            envíos no deben superar 40 kilos y las medidas no pueden superar los
            240 centímetros de largo, alto y ancho.
          </p>
          <p className="com-cub__text">
            Además se puede incluir un servicio complementario para que se pueda
            personalizar el envío, como pagos contra reembolso, entrega flexible
            o un seguro opcional.
          </p>
          <p className="com-cub__text">
            Los pedidos con destino a Gran Canaria y Tenerife se entregan al día
            laborable siguiente a la recogida del paquete.
          </p>
          <p className="com-cub__text">
            El plazo de entrega para el resto de las islas Canarias es de dos
            días laborables.
          </p>
        </div>
      </article>
    </Fragment>
  );
};

export default CorreosExpress;
