import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TaskForm = ({
    heading,
    taskTitle = '',
    taskDescription = '',
    taskAssignedTo = '',
    isUpdating = false,
    taskId,
}) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState(taskTitle)
    const [description, setDescription] = useState(taskDescription)
    const [assignedTo, setAssignedTo] = useState(taskAssignedTo)

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const response = await fetch(
                `http://localhost:5005/api/tasks${isUpdating ? `/${taskId}` : ''}`,
                {
                    method: isUpdating ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, description, assignedTo }),
                }
            )
            if (response.status === 201) {
                const parsed = await response.json()
                navigate(`/tasks/${parsed._id}`)
            }
            if (response.status === 200) {
                navigate(`/tasks/${taskId}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     if (cookingTime < 0) {
    //         setCookingTime(0)
    //     }
    // }, [assignedTo])

console.log('hello')

    return (
        <>
            <h1>{heading}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input type='text' value={title} onChange={event => setTitle(event.target.value)} />
                </label>
                <label>
                    Description
                    <input
                        type='text'
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                </label>
                <label>
                    Assigned to
                    <input type='text' value={assignedTo} onChange={event => setAssignedTo(event.target.value)} />
                </label>
                <button type='submit'>{isUpdating ? 'Update' : 'Create'}</button>
            </form>
        </>
    )
}


export default TaskForm