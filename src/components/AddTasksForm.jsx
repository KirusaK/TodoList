import Field from "./Field.jsx";
import Button from "./Button.jsx";
import { useContext } from "react";
import { TasksContext } from "../context/TaskContext.jsx";

const AddTasksForm = () => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        id="new-task"
        label="New task title"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add </Button>
    </form>
  );
};

export default AddTasksForm;
