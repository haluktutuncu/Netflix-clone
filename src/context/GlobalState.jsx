/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [email, setEmail] = useState();
  return (
    <GlobalContext.Provider value={{ email, setEmail }}>
      {children}
    </GlobalContext.Provider>
  );
}
