import React, { useState } from "react";

const Footer = ({addTask}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  function toggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  function submitForm(e) {
    e.preventDefault()
    if (taskInput.length > 0) {
      addTask(taskInput)
      setTaskInput("")
    } else {
      alert("Заполните форму")
    }
  }

  return (
    <footer className="app-footer">
      <form action="#" className={isFormOpen ? "form" : "form form-hidden"} onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Введите..."
          className="form-input"
          value={taskInput}
          onChange={(e) => {setTaskInput(e.target.value)}}
        />
        <button className="form-btn">Добавить</button>
      </form>
      <button className="footer-btn" onClick={toggleForm}>
        {isFormOpen ? "-" : "+"}
      </button>
    </footer>
  );
};

export default Footer;
