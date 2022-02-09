import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }


  return (
    <AppContext.Provider 
      value={{
        isModalOpen,
        closeModal,
        showModal,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      { children }
    </AppContext.Provider>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }