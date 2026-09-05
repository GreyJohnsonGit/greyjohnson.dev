import { createContext, useContext } from 'react';
  
export const RevealContext = createContext({ reveal: false, setReveal: (_: boolean) => {} });
export const useReveal = () => useContext(RevealContext);