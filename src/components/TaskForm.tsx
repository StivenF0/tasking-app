import { useState } from "react";

interface FormProps {
  hooks: {
    addTask: (text: string) => void
  }
}

function isEmptyOrSpaces(str: string){
  return str === null || str.match(/^ *$/) !== null;
}
  
export default function Form({hooks: {addTask}}: FormProps) {
  const [taskInput, setTaskInput] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (isEmptyOrSpaces(taskInput)) return
    addTask(taskInput)
    setTaskInput("")
  }
  
  return <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="border border-black rounded-l-2xl p-2 pl-3 border-collapse focus:outline-none"
      />
      <input 
        type="submit"
        value="Add"
        className="border border-black rounded-r-2xl p-2 border-l-0 font-semibold cursor-pointer"
      />
    </form>
  </>
}