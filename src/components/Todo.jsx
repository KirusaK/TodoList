import AddTasksForm from "./AddTasksForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Купить молок", isDone: false },
    { id: "task-2", title: "Погладить кота", isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log("Delete all tasks");
  };

  const deleteTask = (taskId) => {
    console.log(`Delete task with id: ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? "Выполнена" : "Не выполнена"}`);
  };

  const filterTasks = (query) => {
    console.log(`Поиск ${query}`);
  };

  const addTask = () => {
    console.log("Add task");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTasksForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
