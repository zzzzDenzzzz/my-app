import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  // Функция для добавления нового пункта в список
  const addTask = () => {
    if (newTaskText.trim() !== "") {
      setTasks([...tasks, { text: newTaskText, completed: false }]);
      setNewTaskText("");
    }
  };

  // Функция для удаления задачи по индексу
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Функция для обновления состояния выполненности задачи по индексу
  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Функция для удаления выполненных задач
  const deleteCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  // Функция для перемещения пунктов в списке
  const moveTask = (currentIndex, newIndex) => {
    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks[currentIndex];
    updatedTasks.splice(currentIndex, 1);
    updatedTasks.splice(newIndex, 0, taskToMove);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        className="form__field"
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={addTask} className="glow-on-hover">
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
                  onChange={() => toggleCompleted(index)}
                />
              </td>

              <td style={{ textAlign: "center" }}>{task.text}</td>

              <td>
                <button
                  onClick={() => deleteTask(index)}
                  className="glow-on-hover"
                >
                  Удалить
                </button>
              </td>

              {index === 0 && (
                <td>
                  {index < tasks.length - 1 && (
                    <button
                      onClick={() => moveTask(index, index + 1)}
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
                        onClick={() => moveTask(index, index + 1)}
                        className="glow-on-hover"
                      >
                        Вниз
                      </button>{" "}
                      <button
                        onClick={() => moveTask(index, index - 1)}
                        className="glow-on-hover"
                      >
                        Вверх
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        onClick={() => moveTask(index, index - 1)}
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
        <button onClick={deleteCompleted} className="glow-on-hover" style={{marginTop:"30px"}}>
          Удалить выполненные
        </button>
      )}
    </div>
  );
}

export default App;
