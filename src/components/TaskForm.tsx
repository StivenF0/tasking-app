import { useState, useRef } from "react";
import Urgency from "../ts/Urgency";

interface FormProps {
  hooks: {
    addTask: (params: object) => void
  }
}

function isEmptyOrSpaces(str: string){
  return str === null || str.match(/^ *$/) !== null;
}
  
export default function Form({hooks: {addTask}}: FormProps) {
  const textRef = useRef<HTMLInputElement>(document.createElement("input"));
  const urgencyRef = useRef<HTMLSelectElement>(document.createElement("select"));


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const textValue = textRef.current.value;
    const urgencyValue = urgencyRef.current.value;

    if (isEmptyOrSpaces(textValue)) return
    addTask({ text: textValue, urgency: urgencyValue})
  }
  
  return <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        ref={textRef}
        className="border border-black rounded-l-2xl p-2 pl-3 border-collapse focus:outline-none"
      />
      <div className="inline-block border border-l-0 border-black p-2 pl-3">
        <select className="bg-white focus:outline-none" defaultValue={Urgency.Medium} ref={urgencyRef} name="urgency">
          <option value={Urgency.High}>High</option>
          <option value={Urgency.Medium}>Medium</option>
          <option value={Urgency.Low}>Low</option>
        </select>
      </div>
      <input 
        type="submit"
        value="Add"
        className="border border-black rounded-r-2xl p-2 border-l-0 font-semibold cursor-pointer"
      />

    </form>
  </>
}