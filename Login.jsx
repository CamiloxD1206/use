import React from "react";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>¡Has iniciado sesión!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <p>No has iniciado sesión.</p>
          <button onClick={login}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

export default Login;
