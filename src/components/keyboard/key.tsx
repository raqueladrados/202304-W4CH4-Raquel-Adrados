import { useCallback, useState } from "react";
import { Telephone } from "../models/telephone";

type PropsType = {
  key: Telephone;
};
export function Key<T extends Telephone>({ key }: PropsType) {
  const [telephone, setTelephone] = useState([]);

  const handleCall )
  })
  //function MyComponent() {
  //const [age, setAge] = useState(28);
  //const [name, setName] = useState('Taylor');
  //const [todos, setTodos] = useState(() => createTodos());

  return (
    <>
      <ol className="keyboard">
        <li>
          <button className="key">1</button>
        </li>
        <li>
          <button className="key">2</button>
        </li>
        <li>
          <button className="key">3</button>
        </li>
        <li>
          <button className="key">4</button>
        </li>
        <li>
          <button className="key">5</button>
        </li>
        <li>
          <button className="key">6</button>
        </li>
        <li>
          <button className="key">7</button>
        </li>
        <li>
          <button className="key">8</button>
        </li>
        <li>
          <button className="key">9</button>
        </li>
        <li>
          <button className="key">0</button>
        </li>
        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </>
  );
}
