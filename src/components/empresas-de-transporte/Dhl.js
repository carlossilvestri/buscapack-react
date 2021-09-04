import React, { Fragment } from "react";
// Imagenes
import dhlLogo from "../../static/img/empresas-de-transporte/dhl-logo.jpg";
const DHL = () => {
  return (
    <Fragment>
      <article className="com-cub animate__animated animate__fadeIn">
          <div>
            <div className="com-cub__wrapper">
              <h2 className="com-cub__title color-active">DHL</h2>
            </div>
            <div className="com-cub__wrapper">
              <p className="com-cub__text">
                <img className="img-empresa" src={dhlLogo} alt="DHL Logo" />
                DHL es una de las compañías de logística líder en el mundo.
                Tiene a su disposición más de 400.000 personas en más de 220
                países y territorios, que se encargan de atender a diario a
                todos sus clientes cruzando fronteras para que su negocio crezca
                y participe en nuevos mercados. O simplemente para enviarle una
                carta a sus seres queridos.
              </p>
              <p className="com-cub__text">
                Si eres de los que vende en todo el mundo, no dudes en buscar a
                DHL Express para que forme parte de las empresas de transporte
                que te realiza los envíos. Ya que está presente en más de 220
                países y gestiona más de mil millones de envíos anuales.
              </p>
            </div>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">Ventajas de utilizar DHL Express</h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              Esta compañía de transporte internacional realiza envíos Premium.
              Brindando a sus clientes la posibilidad de recoger el paquete en
              un plazo no mayor a 24 horas dependiendo del país, logrando que el
              destinatario no espere mucho al recibirlo.
            </p>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              Los envíos con DHL Express son ideales para aquellos productos que
              no pueden estar mucho tiempo en tránsito, como los productos
              perecederos o cosmética natural. De igual manera, este servicio es
              útil cuando los clientes tienen una urgencia por adquirir un
              producto o por tener un documento cuanto antes.
            </p>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              También, con DHL Express se puede definir la hora de recogida del
              paquete o entregarlo en un punto de recogida Express. Además los
              clientes tendrán la posibilidad de hacer el rastreo de su compra
              en tiempo real.
            </p>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">Métodos de envío de DHL</h2>
          </div>
          <div className="com-cub__wrapper">
            <ul>
              <li>DHL Express Worldwide</li>
            </ul>
            <p className="com-cub__text">
              Cuenta con el servicio de entrega urgente para envíos
              internacionales, la entrega del paquete se hará el siguiente día
              laborable a la admisión del envío, el servicio está disponible
              para todas las localidades.
            </p>
            <p className="com-cub__text">
              El servicio DHL Express Worldwide tiene varias restricciones una
              de ellas es que los paquetes no pueden superar los 70 kilos cada
              uno. También, las medidas del paquete no deben ser mayores a 120
              centímetros de largo, 80 centímetros de alto y 80 centímetros de
              alto.
            </p>
            <ul>
              <li>DHL Express Domestic</li>
            </ul>
            <p className="com-cub__text">
              El servicio DHL Express Domestic cuenta con el servicio de entrega
              urgente para envíos nacionales, la entrega de los paquetes se
              harán al siguiente día laborable a la recogida del pedido. Lo
              mejor es que los clientes recibirán su compra antes de las 9:00 de
              la mañana o de las 12:00 del mediodía, dependiendo de la modalidad
              que elijan ellos.
            </p>
            <p className="com-cub__text">
              Los paquetes deben tener una medida máxima de 120 centímetros de
              largo, 80 centímetros de alto y 80 centímetros de ancho. Si los
              paquetes se entregan antes de las 9:00 de la mañana no pueden
              pesar más de 30 kilos. En cambio, si el horario de entrega es a
              las 12:00 del mediodía el peso permitido son 70 kilos por paquete.
            </p>
          </div>
          <div className="com-cub__wrapper">
            <h2 className="com-cub__title">
              ¿Qué debes tener en cuenta antes de embalar?
            </h2>
          </div>
          <div className="com-cub__wrapper">
            <p className="com-cub__text">
              Al elegir un embalaje adecuado el paquete se protegerá durante el
              transporte, la compañía DHL ofrece una selección de embalajes
              probados. Pero si prefieres usar uno propio ten en cuenta lo
              siguiente:
            </p>
            <ul>
              <li>Material</li>
            </ul>
            <p className="com-cub__text">
              Las cajas corrugadas deben ser de alta calidad. Si vas a enviar
              artículos frágiles o muy pesados recomendamos utilizar doble o
              triple refuerzo en las cajas.
            </p>
            <ul>
              <li>Resistencia</li>
            </ul>
            <p className="com-cub__text">
              Al momento de embalar busca el sello de resistencia del fabricante
              y así se le facilitará sobre el tipo de fabricación y resistencia
              de la caja. Si lo necesitas pídele más información al fabricante.
            </p>
            <ul>
              <li>Tamaño</li>
            </ul>
            <p className="com-cub__text">
              Evita usar cajas que estén medio vacías, ya que el paquete se
              puede mover en el transporte y se puede averiar. Tampoco las llene
              demasiado porque se pueden romper, lo mejor es buscar el tamaño
              adecuado para el contenido de su envío.
            </p>
          </div>
      </article>
    </Fragment>
  );
};

export default DHL;
