import TaskType from "../ts/taskType";
import Task from "./Task";

import urgency from "../ts/Urgency";

interface TaskListProps {
  hooks: {
    tasks: TaskType[]
    filterOption: string
    removeTask: (id: number) => void
    editTask: (id: number, text: string) => void
    checkTask: (id: number) => void
  }
}

export default function TaskList({hooks: {tasks, filterOption, removeTask, editTask, checkTask}}: TaskListProps) {
  const urgentTasks = tasks.filter(t => t.urgency === urgency.High)
  const mediumTasks = tasks.filter(t => t.urgency === urgency.Medium)
  const lowTasks = tasks.filter(t => t.urgency === urgency.Low)

  return <>
    <div 
      className="overflow-hidden border-black border w-72 h-72 rounded-2xl"
    >
      <ul 
        className="p-4 w-full h-full flex flex-col gap-1 overflow-x-hidden overflow-y-auto"
      >
      <p className="text-sm text-gray-500 self-center">Urgent</p>
        {
          urgentTasks.map(task => {
            if (filterOption === "pending" && task.complete) return
            if (filterOption === "complete" && !task.complete) return

            return <>
              <Task
                id={task.id}
                text={task.text}
                complete={task.complete}
                hooks={{
                  removeTask,
                  editTask,
                  checkTask,
                }}
              />  
            </>
          })
        }
      <p className="text-sm text-gray-500 self-center">Medium Urgency</p>
        {
          mediumTasks.map(task => {
            if (filterOption === "pending" && task.complete) return
            if (filterOption === "complete" && !task.complete) return
  
            return <>
              <Task
                id={task.id}
                text={task.text}
                complete={task.complete}
                hooks={{
                  removeTask,
                  editTask,
                  checkTask,
                }}
              />  
            </>          
          })
        }
      <p className="text-sm text-gray-500 self-center">Low Urgency</p>

        {
          lowTasks.map(task => {
            if (filterOption === "pending" && task.complete) return
            if (filterOption === "complete" && !task.complete) return
  
            return <>
              <Task
                id={task.id}
                text={task.text}
                complete={task.complete}
                hooks={{
                  removeTask,
                  editTask,
                  checkTask,
                }}
              />  
            </>          
          })
        }
      </ul>
    </div>
  </>
}