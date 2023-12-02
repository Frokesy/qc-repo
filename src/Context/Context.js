import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState('false')
  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar)
  }
  return (
    <AppContext.Provider value={{ handleSidebarToggle, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
