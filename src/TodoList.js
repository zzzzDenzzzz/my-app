import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
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
      <input className="form__field"
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={addTask} className="glow-on-hover">Добавить новый пункт</button>

      {tasks.map((task, index) => (
        <div key={index} className="task">
          {/* Checkbox для выполненных задач */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(index)}
          />

          {/* Текст задачи */}
          {task.text}

          {/* Кнопка "крестик" для удаления задачи */}
          <button onClick={() => deleteTask(index)} className="glow-on-hover">Удалить</button>

          {/* Кнопки перемещения пунктов */}
          {index > 0 && (
            <button onClick={() => moveTask(index, index - 1)} className="glow-on-hover">Вверх</button>
          )}
          {index < tasks.length - 1 && (
            <button onClick={() => moveTask(index, index + 1)} className="glow-on-hover">Вниз</button>
          )}
        </div>
      ))}

      {/* Кнопка "удалить выполненные" */}
      {tasks.some((task) => task.completed) && (
        <button onClick={deleteCompleted} className="glow-on-hover">Удалить выполненные</button>
      )}
    </div>
  );
}

export default TodoList;
