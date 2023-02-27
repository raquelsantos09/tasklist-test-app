import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const TaskPage = () => {
    const { taskId } = useParams()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [task, setTask] = useState()


    const fetchTask = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/tasks/${taskId}`);
            setTask(response.data);
            console.log(response.data);
            if (response.data === null) {
                navigate('/404')
            } else {
                console.log(response.data)
                setTask(response.data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        };
    };


    useEffect(() => {
        fetchTask()
    }, [taskId])



    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5005/api/tasks/${taskId}`)
            navigate('/tasks')
        } catch (error) {
            console.log(error)
        }
    }

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <h1>{task.title}</h1>
            <p>Task description : {task.description}</p>
            <Link to={`/tasks/update/${task._id}`}>
                <button type='button'>Update</button>
            </Link>
            <button type='button' onClick={handleDelete}>
                Delete
            </button>
        </>
    )
}

export default TaskPage