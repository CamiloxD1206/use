import React, { useState, useEffect } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return { sumar, restar, count };
}

export const Contador = () => {
  const { sumar, restar, count } = useCounter();
  useEffect(() => {
    if (count == 10) {
      alert("el contador va en el numero 10");
    }
  });

  return (
    <>
      <button onClick={sumar}>➕</button>
      <h3>{count}</h3>
      <button onClick={restar}>➖</button>
  
    </>
  );
};
