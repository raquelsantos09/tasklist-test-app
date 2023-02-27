import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TaskForm from '../components/TaskForm'

const UpdateTaskPage = () => {
    const { taskId } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [task, setTask] = useState()

    const fetchTask = async () => {
        try {
            const response = await fetch(`http://localhost:5005/api/tasks/${taskId}`)
            const parsed = await response.json()
            setTask(parsed)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTask()
    }, [taskId])

    return isLoading ? (
        <h1>Loading ...</h1>
    ) : (
        <TaskForm
            heading='Update task'
            taskTitle={task.title}
            taskDescription={task.description}
            taskAssignedTo={task.assignedTo}
            isUpdating
            taskId={taskId}
        />
    )
}


export default UpdateTaskPage