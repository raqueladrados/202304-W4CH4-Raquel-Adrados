import { useState } from "react"
import { Telephone } from "../models/telephone"

export function useKeyboard() {
 const [keyboard, setKeyboard] = useState<Telephone[]>([])

 const handleHang = (){
  setKeyboard
 }
}


//function MyComponent() {
//const [age, setAge] = useState(28);
//const [name, setName] = useState('Taylor');
//const [todos, setTodos] = useState(() => createTodos());


