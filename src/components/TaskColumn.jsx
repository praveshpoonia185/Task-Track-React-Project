import React from 'react';
import TaskCard from './TaskCard';
import './TaskColumn.css';

const TaskColumn = ({ title, icon, tasks, status }) => {
  return (
    <>
      <section className='task_column'>
        <h2 className='task_column_heading'><img className='task_column_icon' src={icon}></img>{title}</h2>

        {
          tasks.map((task, index) => {
            task.status === status && <TaskCard key={index} title={task.task} tags={task.tags}></TaskCard>
          })
        }
      </section>
    </>
  )
}

export default TaskColumn;
