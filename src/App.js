import React from "react";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import "./static/styles/responsive.pack.css"; // General Styles of the React App.
import Resultados from "./components/Resultados";
import AvisoLegal from "./components/AvisoLegal";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import PoliticaCookies from "./components/PoliticaCookies";
import Contacto from "./components/Contacto";
import ModalProvider from "./context/ModalContext";

/*
imr = import React from 'react';
sfc = Stateless Functional Component.
*/
const App = () => {
  return (
    <Fragment>
      <ModalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <Carrusel />} />
            <Route exact path="/results" component={() => <Resultados />} />
            <Route exact path="/aviso-legal" component={() => <AvisoLegal />} />
            <Route
              exact
              path="/politica-privacidad"
              component={() => <PoliticaPrivacidad />}
            />
            <Route
              exact
              path="/politica-coockies"
              component={() => <PoliticaCookies />}
            />
            <Route exact path="/contacto" component={() => <Contacto />} />
            <Route exact path="/modal/:company_name" component={() => <Carrusel />} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </ModalProvider>
    </Fragment>
  );
};

export default App;
