
import React, { createContext, useState } from "react";

// Crear el Context. Todo Context tiene un Provider
export const ModalContext = createContext();
// Crear el Provider. El Provider es donde se encontran las funciones y state.
const ModalProvider = (props) => {
  // Crear el state del context.
  const [modal, setModal] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;