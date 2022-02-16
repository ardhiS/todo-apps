import React from "react";
import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please fill in the add task");
      return;
    }
    onAddTask({ text, day, remainder });
    setText("");
    setDay("");
    setRemainder("");
  };
  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Day and Time</label>
        <input
          type="text"
          placeholder="add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="">Set Remainder</label>
        <input
          type="checkbox"
          checked={remainder}
          value={remainder}
          onChange={(e) => setRemainder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" values="Save Task" />
    </form>
  );
};
export default AddTask;
