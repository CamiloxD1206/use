import React from "react";
import ReactDOM from "react-dom/client";
import { Contador } from "./App";
import { AuthProvider } from "../AuthContext";
import Login from "../Login";
import Memo from "../useMemo";
import Callback from "../useCallback";
import Referencia from "../useRef";
import Reducer from "../useReducer";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

<AuthProvider>
<Contador/>
<hr />
      <div className="App">
        <Login />
      </div>
      <hr />
      <Memo/>
      <hr />
      <Callback/>
      <Referencia/>
      <Reducer/>
    </AuthProvider>
  </React.StrictMode>
);
