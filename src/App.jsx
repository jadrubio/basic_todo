import React from 'react';
import "./App.css"
import TaskForm from "./components/TaskForm.jsx";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <section className="task_column">To Do</section>
        <section className="task_column">In Progress</section>
        <section className="task_column">Done</section>
        <section className="task_column">Abandoned</section>
      </main>

    </div>
  )
}

export default App;
