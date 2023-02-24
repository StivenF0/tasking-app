import { useMemo, useState } from "react"

interface TaskProps {
  id: number
  text: string
  complete: boolean
  hooks: {
    removeTask: (id: number) => void
    editTask: (id: number, text: string) => void
    checkTask: (id: number) => void
  }
}

export default function Task({id, text, complete, hooks: {removeTask, editTask, checkTask}}: TaskProps) {
  const [editing, setEditing] = useState(false)
  const [taskInput, setTaskInput] = useState(text)
  
  useMemo(() => {
    if (editing) {
      setTaskInput(text)
      return
    } else {
      editTask(id, taskInput)
    }
  }, [editing])

  const handleCheck = () => checkTask(id)
  const handleDelete = () => removeTask(id)
  const handleEdit = () => {
    setEditing((currEditing: boolean) => {
      return !currEditing
    })
  }

  return <>
    <li className="list-none flex justify-between bg-slate-200 w-full py-3 px-4 outline-b outline-white">
      <span className="flex mr-auto w-48">
        <input 
          type="checkbox"
          defaultChecked={complete}
          onClick={handleCheck}
          className="mr-2"
        />
        {!editing 
          ? complete 
            ? <s className="text-gray-400">{text}</s>
            : <span className="w-full overflow-hidden overflow-ellipsis whitespace-pre-wrap break-words">{text}</span>
          : <input 
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className="w-4/5 overflow-x-hidden border-black border-2 focus:outline-none rounded-xl px-2"
            />
        }
      </span>
      <span className="flex items-center">
        <button 
          onClick={handleEdit}
          className="flex items-center justify-center mr-4 border border-black w-8 h-5 relative bg-white before:h-[calc(1.25rem-2px)] before:w-1 before:bg-cyan-500 before:absolute before:right-2"
        />
        <button 
          onClick={handleDelete}
          className="bg-red-500 h-6 w-1 flex items-center justify-center relative rotate-45 before:bg-red-500 before:absolute before:h-6 before before:w-1 before:-rotate-90"
        />
      </span>
    </li>
  </>
}