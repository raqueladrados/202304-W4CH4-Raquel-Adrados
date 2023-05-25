import { AppContext } from "./telephone.context";
import { TelephoneStructure } from "./telephone.context";
export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    sample: "Hola"
    telephoneContext: useTelephone()
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

