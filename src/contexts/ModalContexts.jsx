import { createContext, useState } from "react";

export const ModalContext = createContext(false);

// eslint-disable-next-line react/prop-types
export function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  return (
    <ModalContext.Provider value={{ modal, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}
