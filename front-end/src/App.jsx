//import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllTasksPage from './pages/AllTasksPage'
import NewTaskPage from './pages/NewTaskPage'
import TaskPage from './pages/TaskPage'
import UpdateTaskPage from './pages/UpdateTaskPage'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/tasks' element={<AllTasksPage />} />
        <Route path='/tasks/:taskId' element={<TaskPage />} />
        <Route path='/tasks/new' element={<NewTaskPage />} />
        <Route path='/tasks/update/:taskId' element={<UpdateTaskPage />} />

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
