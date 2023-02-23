import { useEffect, useState } from "react"
import TaskType from "./taskType"
import Urgency from "./Urgency"

export default function useTaskList() {
  const storedTasks = localStorage.getItem("tasks") || "[]"
  const [tasks, setTasks] = useState<TaskType[]>(JSON.parse(storedTasks))
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })

  const addTask = (params: {text: string, urgency: Urgency}) => {
    const { text, urgency } = params;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: text,
        complete: false,
        urgency: urgency
      },
    ])
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const editTask = (id: number, text: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task

        return {
          id: task.id,
          text: text,
          complete: task.complete,
          urgency: task.urgency
        } as TaskType
      })
    )
  }

  const checkTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task

        return {
          id: task.id,
          text: task.text,
          complete: !task.complete,
          urgency: task.urgency
        } as TaskType
      })
    )
  }
  
  return {tasks, addTask, removeTask, editTask, checkTask}
}