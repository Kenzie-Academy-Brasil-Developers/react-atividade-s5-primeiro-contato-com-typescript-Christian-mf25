import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { useState } from "react";
import "./App.css";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [list, setList] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const user = { name, age, hobby };
    setList([...list, user]);
  };

  return (
    <main className="App">
      <div className="App-header">
        <form>
          <Input
            placeholder="name"
            label="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="age"
            label="age"
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Input
            placeholder="hobby"
            label="hobby"
            onChange={(e) => setHobby(e.target.value)}
          />
          <button type="button" onClick={() => handleSubmit(name, age, hobby)}>
            enviar
          </button>
        </form>

        <ul className="list">
          {list.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              age={item.age}
              hobby={item.hobby}
            />
          ))}
        </ul>

      </div>
    </main>
  );
}

export default App;
