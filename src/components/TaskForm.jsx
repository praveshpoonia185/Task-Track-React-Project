import React, { useState } from 'react';
import './TaskForm.css'; 
import Tag from './Tag.jsx';  

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "To Do",  
    tags: [], 
  });

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state with new values
    setTaskData(prev => ({
      ...prev,  // Preserve existing state
      [name]: value,  // Update the specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    // Log the task data (or handle form submission as needed)
    console.log(taskData);

    setTasks((prev)=> {
      return [...prev, taskData];
    })
  };

  const checkTag = (tag)=> {
    return taskData.tags.some((item)=> item !== tag);
  }

  // Toggle tag selection
  const selectTag = (tag) => {
    setTaskData(prev => {
      // Check if the tag is already selected
      const tags = prev.tags.includes(tag)
        ? prev.tags.filter(item => item !== tag)  // Remove tag if it's selected
        : [...prev.tags, tag];  // Add tag if it's not selected

      return { ...prev, tags };  // Update state with the new tags array
    });
  };

  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          name='task'
          type='text'
          className='task_input'
          placeholder='Enter your task'
          onChange={handleChange}  // Call handleChange on input change
        />

        <div className='task_form_bottom_line'>
          <div>
            {/* Render Tag components with different tag names */}
            <Tag tagName="HTML" selectTag={selectTag} selected = {checkTag("HTML")} />
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag('CSS')} />
            <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
          </div>

          <div>
            <select
              className='task_status'
              name='status'
              onChange={handleChange}  // Call handleChange on status change
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type='submit' className='task_submit'>+ Add Task</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;


// WHAT IS PROPS?
// "PROPS" stands for "Properties"
// "Props" is a way to pass data from parent component to the child component. In props we can pass any type of data like string, number, boolean, array, object or even functions.
// "Props" is a way to Pass data from a Parent Component to a Child Component

// So for passing the props, in component we add attribute with any name then we can pass our value in it.
// Now for getting the props value, we can pass props as parameter in the child component function. Remember this props is object. So we have to write 'props.tagName'



// REACT STRICT MODE:
// "React.StrictMode" is a tool provided by React that help Developers write Better Quality Code by highlighting potential problems during development

// When we wrap our Application with "React.StrictMode", it activates additional checks and warnings that will help to identify issues before they cause problem in Production