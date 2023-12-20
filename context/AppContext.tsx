"use client"

import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface AppContextProviderProps {
  children: ReactNode;
}

// Define un tipo genérico para representar estructuras dinámicas
type DynamicObject = Record<string, any>;

export type AppContextType = {
  areas: DynamicObject;
  setAreas: Dispatch<SetStateAction<DynamicObject>>;
// Estado array de objetos con keys indefinidas
  arrayExample: DynamicObject[];
  setArrayExample: Dispatch<SetStateAction<DynamicObject[]>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [areas, setAreas] = useState<DynamicObject>({saludo: "hola"});
  const [arrayExample, setArrayExample] = useState<DynamicObject[]>([]);

  // Cuerpo

  const contextValue: AppContextType = {
    areas,
    setAreas,
    arrayExample,
    setArrayExample,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
