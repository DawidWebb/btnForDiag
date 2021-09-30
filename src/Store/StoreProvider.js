import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  // login Modal viev
  const [number, setNumber] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        number,
        setNumber,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
