// src/PropertyContext.js
import React, { createContext, useContext, useState } from 'react';

const PropertyContext = createContext();

export const useProperty = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  const [propertyType, setPropertyType] = useState("all");

  return (
    <PropertyContext.Provider value={{ propertyType, setPropertyType }}>
      {children}
    </PropertyContext.Provider>
  );
};
