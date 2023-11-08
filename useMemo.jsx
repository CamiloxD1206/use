import React, { useState, useMemo } from "react";

const TaskList = ({ tasks }) => {
  const completedTasks = useMemo(() => {
    return tasks.filter(task => task.completed).length;
  }, [tasks]);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <p>Tareas completadas: {completedTasks}</p>
    </div>
  );
};

const Memo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hacer compras", completed: true },
    { id: 2, title: "Lavar el coche", completed: true },
    { id: 3, title: "Pasear al perro", completed: false },
    { id: 3, title: "barrer", completed: true },
  ]);

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Memo;
