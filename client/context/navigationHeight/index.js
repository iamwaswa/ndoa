import { createContext, useContext, useState } from 'react';

const NavigationHeightContext = createContext();

export function NavigationHeightContextProvider({ children }) {
  const [navigationHeight, setNavigationHeight] = useState(undefined);

  return (
    <NavigationHeightContext.Provider
      value={{ navigationHeight, setNavigationHeight }}
    >
      {children}
    </NavigationHeightContext.Provider>
  );
}

export function useNavigationHeightContext() {
  return useContext(NavigationHeightContext);
}
