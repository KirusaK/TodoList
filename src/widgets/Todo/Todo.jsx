import { useContext } from "react";
import AddTasksForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import TodoInfo from "@/features/stats/TodoInfo.jsx";
import { TodoList } from "@/entities/todo";
import Button from "@/shared/ui/Button";
import { TasksContext } from "@/entities/todo";
import styles from "./Todo.module.scss";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTasksForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() => {
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Show first incomplete task
      </Button>
      <TodoList styles={styles} />
    </div>
  );
};

export default Todo;
