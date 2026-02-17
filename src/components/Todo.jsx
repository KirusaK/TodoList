import { useContext } from "react";
import AddTasksForm from "./AddTasksForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";
import Button from "./Button.jsx";
import { TasksContext } from "../context/TaskContext.jsx";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTasksForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() => {
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Show first incomplete task
      </Button>
      <TodoList />
    </div>
  );
};

export default Todo;
