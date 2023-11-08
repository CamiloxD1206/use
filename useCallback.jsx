import React, { useState, useCallback } from "react";

const Button = ({ onClickHandler }) => {
  return <button onClick={onClickHandler}>Haz clic</button>;
};

const Callback = () => {
  const handleClick = useCallback(() => {
    console.log("¡Botón pulsado!");
  }, []);

  return (
    <div>
      <h2>Ejemplo de useCallback</h2>
      <Button onClickHandler={handleClick} />
    </div>
  );
};

export default Callback;
