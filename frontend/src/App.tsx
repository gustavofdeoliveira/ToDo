import React, { useEffect } from "react";

import Menu from "./components/Menu/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import ModalCreateTask from "./components/Utilities/ModalTask";
import { Task } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { modalActions } from "./store/Modal.store";
import { tasksActions } from "./store/Tasks.store";
import { getAuthenticationToken } from "./components/Service/auth";
import { getTasks } from "./components/Service/task";

const App: React.FC = () => {

  
  const [token, setToken] = React.useState<string>("");

  const loadToken = async () => {
    const token = await getAuthenticationToken();
    setToken(token.token);
    return token.token;
  };

  React.useEffect(() => {
    if (token) {
    localStorage.setItem("token", token);
  
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  


  const modal = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  };

  const createNewTaskHandler = (task: Task) => {
    dispatch(tasksActions.addNewTask(task));
  };

  useEffect(() => {
    loadToken().then((tkn) => {
      getTasks(tkn).then((data) => {
        dispatch(tasksActions.setTasks(data.task));
      });
    });	
  }
  , []);


  return (
      <div>

    <div className="bg-slate-200 min-h-screen text-slate-600 flex dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">

      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a task"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Menu />
      <TasksSection />
      
    </div>
      </div>
  );
};

export default App;
