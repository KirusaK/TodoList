import Router from "./routing/Router";
import TasksPage from "@/pages/TasksPage";
import TaskPage from "@/pages/TaskPages";
import "./styles";

const App = () => {
  const routes = {
    "/TodoList/": TasksPage,
    "/TodoList/tasks/:id": TaskPage,
    "*": () => <div>404 Page not found</div>,
  };

  return <Router routes={routes} />;
};

export default App;
