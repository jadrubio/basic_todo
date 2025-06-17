import React from 'react';
import './TaskForm.css'

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input type="text"  className="task_input" placeholder="Enter your task" />
        <div className="task_form_divider">
          <div>
            <button className="tag">Personal</button>
            <button className="tag">Work</button>
            <button className="tag">Urgent</button>
            <button className="tag">Something</button>
          </div>
          <div>
            <select className="task_status">
              <option value="todo">To do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
              <option value="abandoned">Abandoned</option>
            </select>
            <button type="submit" className="task_submit">+ Add Task</button>
          </div>
          </div>
      </form>
    </header>
  )
}

export default TaskForm;
