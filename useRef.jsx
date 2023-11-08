import React, { useRef, useState } from "react";

const Reduce = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleChange = () => {
    setText(inputRef.current.value);
  };

  return (
    <div>
      <h2>Ejemplo de useRef con Input</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Escribe algo..."
        onChange={handleChange}
      />
  
      <p>Texto ingresado: {text}</p>
    </div>
  );
};

export default Reduce;
