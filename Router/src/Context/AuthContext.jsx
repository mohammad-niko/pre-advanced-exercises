import { createContext, useContext, useState } from "react";

const CreateAuthContext = createContext();

export function AuthContext({ children }) {
  const [isAuthenticated, setIsAuthenticted] = useState(false);

  function isLogin() {
    setIsAuthenticted(true);
  }
  function isLogout() {
    setIsAuthenticted(false);
  }

  return (
    <CreateAuthContext.Provider value={{ isLogin, isLogout, isAuthenticated }}>
      {children}
    </CreateAuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(CreateAuthContext);
}
