
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [complete, setComplete] = React.useState("")

  const tasks = ["Learn React", "Build aReact app", "Deploy the React app"]
  const handleTasks = index => {
    setComplete(index)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <ul>
        {
          tasks && tasks.map((item, index) => (
            <li>{item} <button style={{display:complete === index ? "none" : null}} onClick={() => handleTasks(index)}>Complete</button></li>
          ))
        }

      </ul>
    </div>
  )
}

export default App
