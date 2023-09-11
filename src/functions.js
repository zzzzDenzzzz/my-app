export const addTask = (newTaskText, tasks, setTasks, setNewTaskText) => {
  if (newTaskText.trim() !== "") {
    setTasks([...tasks, { text: newTaskText, completed: false }]);
    setNewTaskText("");
  }
};

export const deleteTask = (index, tasks, setTasks) => {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
};

export const toggleCompleted = (index, tasks, setTasks) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
};

export const deleteCompleted = (tasks, setTasks) => {
  const updatedTasks = tasks.filter((task) => !task.completed);
  setTasks(updatedTasks);
};

export const moveTask = (currentIndex, newIndex, tasks, setTasks) => {
  const updatedTasks = [...tasks];
  const taskToMove = updatedTasks[currentIndex];
  updatedTasks.splice(currentIndex, 1);
  updatedTasks.splice(newIndex, 0, taskToMove);
  setTasks(updatedTasks);
};
