import React, { useState } from "react";
import InputComponent from "./components/Input";

export default function App() {
  const [nameValue, setNameValue] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    setName(nameValue);
    e.preventDefault();
  };

  return (
    <div>
      {name.length < 3 ? <h1>input your name</h1> : <h1>hello, {name}!</h1>}

      <form onSubmit={handleSubmit}>
        <InputComponent onChange={(value) => setNameValue(value)} />
      </form>
    </div>
  );
}
