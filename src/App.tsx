import { useState } from "react";
import Footer from "./components/TaskFooter";
import Form from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTaskList from "./ts/taskHook";

export default function App() {
  const {tasks, addTask, removeTask, editTask, checkTask} = useTaskList()
  const [filterOption, setFilterOption] = useState("all")

  return <>
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Form hooks={{addTask}} />
      <div className="p-2"></div>
      <TaskList hooks={{tasks, filterOption, removeTask, editTask, checkTask}}/>
      <div className="p-2"></div>
      <Footer hooks={{filterOption, setFilterOption}}/>
    </div>
  </>
}
