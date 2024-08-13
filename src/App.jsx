import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

import toDoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';

const App = () => {
  const [tasks, settasks] = useState([]);
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn title="To Do" icon={toDoIcon} tasks={tasks} status="To Do"></TaskColumn>
        <TaskColumn title="Doing" icon={doingIcon} tasks={tasks} status="doing"></TaskColumn>
        <TaskColumn title="Done" icon={doneIcon} tasks={tasks} status="done"></TaskColumn>
      </main>
    </div>
  )
}

export default App;