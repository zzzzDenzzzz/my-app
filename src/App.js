import React, { useState } from "react";
import "./App.css";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  deleteCompleted,
  moveTask,
} from "./functions";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <div>
      <input
        className="form__field"
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button
        onClick={() => addTask(newTaskText, tasks, setTasks, setNewTaskText)}
        className="glow-on-hover"
      >
        Добавить новый пункт
      </button>

      <table border="1" className="table">
        <caption>Список дел</caption>

        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Text</th>
            <th>Button delete</th>
            <th>Button down/up</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(index, tasks, setTasks)}
                />
              </td>

              <td style={{ textAlign: "center" }}>{task.text}</td>

              <td>
                <button
                  onClick={() => deleteTask(index, tasks, setTasks)}
                  className="glow-on-hover"
                >
                  Удалить
                </button>
              </td>

              {index === 0 && (
                <td>
                  {index < tasks.length - 1 && (
                    <button
                      onClick={() => moveTask(index, index + 1, tasks, setTasks)}
                      className="glow-on-hover"
                    >
                      Вниз
                    </button>
                  )}
                </td>
              )}
              {index > 0 && (
                <td style={{ textAlign: "right" }}>
                  {index < tasks.length - 1 ? (
                    <>
                      <button
                        onClick={() => moveTask(index, index + 1, tasks, setTasks)}
                        className="glow-on-hover"
                      >
                        Вниз
                      </button>{" "}
                      <button
                        onClick={() => moveTask(index, index - 1, tasks, setTasks)}
                        className="glow-on-hover"
                      >
                        Вверх
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        onClick={() => moveTask(index, index - 1, tasks, setTasks)}
                        className="glow-on-hover"
                      >
                        Вверх
                      </button>{" "}
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {tasks.some((task) => task.completed) && (
        <button
          onClick={() => deleteCompleted(tasks, setTasks)}
          className="glow-on-hover"
          style={{ marginTop: "30px" }}
        >
          Удалить выполненные
        </button>
      )}
    </div>
  );
}

export default App;
