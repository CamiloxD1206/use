import React, { useReducer } from "react";

// Definimos el reducer que maneja las acciones de la lista de tareas
const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const Reducer = () => {
  // Inicializamos el estado de las tareas utilizando useReducer
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const handleAddTask = (text) => {
    // Disparamos la acción para agregar una tarea
    dispatch({ type: "ADD_TASK", text });
  };

  const handleToggleTask = (id) => {
    // Disparamos la acción para marcar una tarea como completada
    dispatch({ type: "TOGGLE_TASK", id });
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddTask("Nueva tarea")}>Agregar Tarea</button>
    </div>
  );
};

export default Reducer;
