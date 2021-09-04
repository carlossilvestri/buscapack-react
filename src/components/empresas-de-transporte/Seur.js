import React, { Fragment } from "react";
import seurLogo from "../../static/img/empresas-de-transporte/seur.jpg";

const CorreosExpress = () => {
  return (
    <Fragment>
      <article className="com-cub animate__animated animate__fadeIn">
        <div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title color-active">SEUR</h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              <img
                className="img-empresa"
                src={seurLogo}
                alt="Seur Logo"
              />
              SEUR es una empresa de transporte que tiene casi 80 años de
              historia, es pionera en el sector en España con tres grandes ejes
              de negocio: internacional, comercio electrónico y negocio B2B.
            </p>
            <p className="com-cub__text">
              Cuenta con equipo de 10.000 empleados que prestan el servicio a
              las compañías de todos los sectores desde las más pequeñas hasta
              las más grandes del país, además cuenta con 6.500 vehículos en su
              flota que además contribuyen con la conservación del planeta
              puesto que son ecológicos y tiene 2.500 tiendas.
            </p>
            <p className="com-cub__text">
              La compañía se caracteriza por estar innovando en sus servicios,
              por lo que ha creado soluciones que ayudan a mejorar la
              experiencia del cliente, una de ellas es Predict, en un sistema
              interactivo que ayuda a concretar la entrega de paquetes; o Now,
              que se encarga de realizar entregas muy urgentes en una o dos
              horas.
            </p>
            <p className="com-cub__text">
              SEUR tiene un acuerdo con DPD group, que es una de las compañías
              de trasporte internacional urgente en la que agrupa varias marcas
              como: Chronopost y SEUR, realizando entregas en todo el mundo.
              Este convenio logra la integración de varios países para ofrecer
              una experiencia única a sus clientes, basada en el conocimiento de
              sus necesidades, a la vez que se construyen relaciones sólidas con
              todos ellos.
            </p>
          </div>
        </div>
        <div className="com-cub__wrapper">
          <h2 className="com-cub__title">Principios básicos de SEUR </h2>
        </div>
        <div className="com-cub__wrapper">
          <p className="com-cub__text">
            SEUR es una compañía de transporte urgente que tiene como finalidad
            construir y mantener relaciones cada vez más estrechas con todos y
            cada uno de sus clientes. SEUR basa su filosofía de servicio en
            cuatro principios para que cada cliente se sienta a gusto con la
            compañía:
          </p>
          <ul>
            <li>Atender a las personas, no solo a sus envíos</li>
            <li>Reconocer y responder a las necesidades del cliente</li>
            <li>Ser proactivos, anticiparnos y actuar rápidamente</li>
            <li>Aportar cercanía en cada contacto</li>
          </ul>
        </div>
        <div className="com-cub__wrapper">
          <h2 className="com-cub__title">Servicios complementarios SEUR</h2>
          <h2 className="com-cub__title">SEUR Reembolso</h2>
        </div>
        <div className="com-cub__wrapper">
          <p className="com-cub__text">
            Este servicio consiste en gestionar el cobro en destino, así el
            receptor puede pagar a momento de recibir el paquete y tiene un
            plazo máximo de 24 horas en España o de 48 horas en Portugal. Además
            viene incluido un seguro de pérdidas o avería de la mercancía hasta
            el importe total del reembolso.
          </p>
          <h2 className="com-cub__title">SEUR Entrega en sábados</h2>
          <p className="com-cub__text">
            El servicio que presta SEUR se encarga del transporte de envíos y
            entregas de paquetes nacionales los días sábados, como si fuera un
            día laborable. No incluye los sábados festivos.
          </p>
          <h2 className="com-cub__title">SEUR Recogida en sábados</h2>
          <p className="com-cub__text">
            Además este servicio recoge los paquetes los sábados para garantizar
            un mejor servicio urgente. Aquella mercancía que se retire los
            sábados se entregará el martes garantizando el horario de entrega
            del servicio contratado.
          </p>
        </div>
        <div className="com-cub__wrapper">
          <h2 className="com-cub__title">SEUR Cambio</h2>
        </div>
        <div className="com-cub__wrapper">
          <p className="com-cub__text">
            Se presta el servicio de cambio de la mercancía, lo que significa
            que si compras algo y tienes que cambiarlo SEUR entrega la nueva
            mercancía y se lleva la devuelta, ya sea por mantenimiento o avería
            para que no te preocupes por nada.
          </p>
          <h2 className="com-cub__title">SEUR Comprobante entrega</h2>
          <p className="com-cub__text">
            La empresa se encarga de dar la garantía de que todos tus envíos de
            paquetería o mensajería son entregados mediante notas de entrega
            tradicional o mensaje digitalizado..
          </p>
          <h2 className="com-cub__title">SEUR Plus</h2>
          <p className="com-cub__text">
            Este servicio PLUS se encarga de que el envío sea mediante un
            transporte de circuito especial de envío con un seguro de 1800 euros
            sin justificar el contenido.
          </p>
          <h2 className="com-cub__title">SEUR Valor declarado</h2>
          <p className="com-cub__text">
            Este servicio cuenta con un seguro a todo riesgo para el transporte
            de envíos de gran valor o frágiles según el valor declarado. Es
            utilizado para envíos nacionales e internacionales.
          </p>
          <h2 className="com-cub__title">SEUR Gestión</h2>
          <p className="com-cub__text">
            Recogen la mercancía, realizan el transporte de paquetería y
            gestionan los trámites de envíos urgentes que incluyen
            procedimientos legales.
          </p>
        </div>
      </article>
    </Fragment>
  );
};

export default CorreosExpress;
