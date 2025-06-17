import React from 'react';
import "./App.css"

const App = () => {
  return (
    <div>
      <header className="app_header">Header</header>
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
