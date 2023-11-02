/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

const useAppContext = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = {
    isModalOpen,
    setIsModalOpen,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useAppContext };
