import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

function AllTasksPage() {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const response = await axios.get(
            "http://localhost:5005/api/tasks"
        );
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks()
    }, [])

  return (
    <div>
    <h1>All Tasks</h1>
          <ul>
              {tasks.map(task => (
                  <li key={task._id}>
                      <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                  </li>
              ))}
          </ul>
    
    </div>
  )
}

export default AllTasksPage