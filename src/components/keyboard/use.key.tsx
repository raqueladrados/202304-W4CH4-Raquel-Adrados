import { useState } from "react";
import { Telephone } from "../models/telephone";

export function useKeyboard() {
  const message = "Llamando";
  const [keyboardCall, setKeyboardCall] = useState(false);

  const handleHang = (telephone: Telephone) => {
    setKeyboardCall(keyboardCall);
    return message;
  };

  return {
    handleHang,
  };
}

//function MyComponent() {
//const [age, setAge] = useState(28);
//const [name, setName] = useState('Taylor');
//const [todos, setTodos] = useState(() => createTodos());
