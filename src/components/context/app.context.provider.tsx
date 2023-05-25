import { AppContext } from "./keyboard.context";
import { useKeyboard } from "../keyboard/key";
export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    sample: "Hola",
    keyboardContext: useKeyboard(),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
