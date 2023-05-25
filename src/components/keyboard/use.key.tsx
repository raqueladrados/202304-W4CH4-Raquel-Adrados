import { useState } from "react";

export function useKeyboard() {
  const message = "Llamando";
  const [keyboardCall, setKeyboardCall] = useState(false);

  const handleHang = () => {
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
