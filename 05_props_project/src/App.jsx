import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../component/card"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl text-10xl mb-4">
        vite react app and tailwind css
      </h1>
      <Card
        title="kids jumpsuit"
        price="$30"
        img="https://images.unsplash.com/photo-1593893513213-0ecc2ea282c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcHB5JTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D"
      />
      <Card
        title="women jumpsuit"
        price="$50"
        img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
      />
    </>
  );
}

export default App;
