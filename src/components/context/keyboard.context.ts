import { createContext } from "react";
import { useKeyboard } from "../keyboard/key";

export type KeyboardStructure = {
  KeyboardContext: ReturnType<typeof useKeyboard>;
  sample: string;
};

export const AppContext = createContext<KeyboardStructure>(
  {} as KeyboardStructure
);
