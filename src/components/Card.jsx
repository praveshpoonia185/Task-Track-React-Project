// WHAT IS COMPONENT ?
// "Component" is Reusable Piece of code that used to define certain part of user interface



// WHAT IS THE DIFFERENCE BETWEEN JS AND JSX EXTENSION ?
// First of all, we can write any extension because they both work same
// But generally, we use ".jsx" extension because when our application grow we may have to write some JavaScript code
// And at the same time, this JSX extension will tell you which file is React component and which file is just Vanilla JavaScript
// And also when we use ".jsx" extension, our code editor can give us Better service like syntax suggestion, error checking and other features used to write JSX code

// But some developers also use ".js" extension and if you are working on Single Project with Multiple Developers, then you have to use the same extension that they are already using



// NOTE: Always write component name with "Capital Letter", Otherwise it will not work in Browser



// import React from "react";   // here we import React from react library 

// There are two Types of React Components:
// "Functional" Components and "Class Components"

// "Class Components" are little old for current time because for implementing Class Components, we have to learn some of the Advanced concepts of JavaScript and also "Class Component" is little complex than Functional Component

// When Facebook developed React first time, there was only one Component type, which is "Class Component"
// But as React developed, "Functional Components" come and that makes React very simple and Easy


// import React from 'react'

// const Card = () => {
//   return (
//     <div>
//       <h1>Card Component</h1>
//     </div>
//   )
// }

// export default Card;




// HOW JSX AND BABEL WORKS:
// "JSX" Code which is modern code, for writing HTML and JavaScript together

// Browser cannot understand "JSX" code, but it can understand "Vanilla JavaScript" code
// So we need to convert our "JSX" code into "Vanilla JavaScript" code so Browser can understand it,
// So we need a Compiler called "Babel"

// "Babel" convert "JSX" code into Plain JavaScript code which Browser can understand and render

// So in short, we always use "JSX" for our components, and "Babel" will compile the code into "JSX" function 
// And that's the reason we don't have to compulsary import react library at the top

// But before "React 18" update, we need to import react at the top



// ADDING ELEMENTS IN COMPONENT

// import React from 'react'

// const Card = () => {
//   return (
//     <div>
//       <h1>Card Component</h1>
//       <button>Add Task</button>
//     </div>
//   );
// };

// export default Card;

// In  React, we have one method called "Fragment", 
// This "Fragment" is used to add Parent Element in our JSX, but it will not return any UI component on Browser

// import React from 'react'

// const Card = () => {
//   return (
//     <React.Fragment>
//       <h1>Card Component</h1>
//       <button>Add Task</button>
//     </React.Fragment>
//   );
// };

// export default Card;

// OR

// import React from 'react'

// const Card = () => {
//   return (
//     <>
//       <h1>Card Component</h1>
//       <button>Add Task</button>
//     </>
//   );
// };

// export default Card;

// These Empty tags "<> </>" also work the same as "React Fragment"



// JAVASCRIPT EXPRESSION IN JSX:

// import React from 'react'

// const Card = () => {
//   const task = 5;

//   const countTask = () => {
//     // if (task === 0) {
//     //   return "No Task Available";
//     // } else {
//     //   return `Tota Task: ${task}`;
//     // }

//     return task === 0 ? "No Task Available" : `Total Task: ${task}`;
//   };
//   return (
//     <>
//       <h1>Total Tasks: {countTask()}</h1>
//       <button>Add Task</button>
//     </>
//   )
// }

// export default Card;



// SETTING ATTRIBUTES:

// import React from 'react'

// const Card = () => {
//   const task = 5;

//   const hideButton = true;

//   const countTask = () => {
//     if (task === 0) {
//       return "No Task Available";
//     } else {
//       return `Tota Task: ${task}`;
//     }
//   }

//   const styles = {
//     backgroundColor: 'red',
//     color: '#000',
//   }
//   return (
//     <div>
//       <h1 style={styles}>Total Tasks: {countTask()}</h1>
//       <button className='btn' disabled={hideButton} value="Add Task Button">Add Task</button>
//     </div>
//   )
// }

// export default Card




// ADDING EVENTS:
// "Handling Events" in React is very similar to Handling Events in HTML

// import React from 'react'

// const Card = () => {
//   let task = 0;

//   const handleClick = (e) => {
//     task++;
//     console.log("Add Task", task);
//   }
//   return (
//     <div>
//       <h1>Total Tasks: {task}</h1>
//       <button onClick={handleClick} value="Add Value Here">Button</button>
//     </div>
//   )
// }

// export default Card;



// WHAT IS STATE ?
// When we want to display something change on our DOM, then we can define that variable or Object or Array as the Normal JavaScript variable

// So for displaying the change in DOM, we have "State" in React

// "State" allows us to "manage and display" the changing data in our Application
// So when we define our variable as a Normal JavaScript Variable, then React will not reflect that changes 
// But if we define our variable as a 'State', then React will reflect that changes

// In simple words, if we define our variable as state variable, then react will watch that variable and if its value change, then react will reflect that change immediately.

// HOW CAN WE DEFINE VARIABLE AS A STATE VARIABLE ?
// So to define variable as a State in Functional component, we have to use one "Hook"



// WHAT ARE HOOKS
// "Hooks" in React are functions that allow us to add State and other React features to functional components.

// In other words, "Hooks" are Functions that make "Functional Components" work like "Class Components"

// Problems With Class Components:-
// * Little Difficult
// * Confusing with This Keyword
// * Write boilerplate again and again



// USE-STATE HOOK:

// So to use any "Hook", First we need to import that Hook from the react library
// All "Hooks" name start with prefix "use", so all those functions that start with "use" are react Hooks

// "useState" hook is used to create State Variables in Functional Component
// To use "useState" hook, we need to first import that and use it inside the Functional Component


// import React, { useState } from 'react';

// const Card = () => {
//   // const countArray = useState(0);  // This function will return an Array
//   // const count = countArray[0];
//   // const setCount = countArray[1];

//   const [count, setCount] = useState(0);

//   const handleClick = (e) => {
//     task++;
//     setCount(count + 1);
//     console.log("Add Task", task);
//   }
//   return (
//     <div>
//       <h1>Total Tasks: {count}</h1>
//       <button onClick={handleClick} value="Add Value Here">Button</button>
//     </div>
//   )
// }

// export default Card;



// HANDLING USER INPUTS:

// Now, many times in our Application we have to take User Input, For eg: User will Login in Form or User write something in Search Bar, then we need to get that Input value in our Component

// import React, { useState } from 'react';

// const Card = () => {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState("");

//   const handleClick = (e) => {
//     setCount(count + 1);
//   }

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };
//   return (
//     <div>
//       <h1>Total Tasks: {count}</h1>
//       <input type='text' onChange={handleChange}></input>
//       <button onClick={handleClick} value="Add Value Here">Button</button>

//       <h1>{input}</h1>
//     </div>
//   )
// }

// export default Card;



// MAPPING LIST ITEMS:
// Now, Let's see how can we display the list of Arrays in React

// import React, { useState } from 'react';

// const Card = () => {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState("");
//   const tasks = ["Task 1", "Task 2", "Task 3"];

//   const handleClick = (e) => {
//     setCount(count + 1);
//   }

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };
//   return (
//     <div>
//       <h1>Total Tasks: {count}</h1>
//       <input type='text' onChange={handleChange}></input>
//       <button onClick={handleClick} value="Add Value Here">Button</button>
//       <h1>{input}</h1>
//       <ul>
//         {
//           tasks.map((list) => {
//             return <li key={list}>{list}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Card;




