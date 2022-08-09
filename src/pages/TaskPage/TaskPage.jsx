import React, { useEffect, useRef, useState } from 'react';
import ListTask from '../../components/ListTask/ListTask';
import axios from '../../api/axios';
import './TaskPage.css';
import Toast from '../../components/toast/Toast';

const TaskPage = () => {
    const toastRef = useRef(null);
    const [taskInput, setTaskInput] = useState('');
    const [data, setData] = useState([]);
    const URL_TASK = 'task';

    const [tasks, setTasks] = useState([]);

    const getTask = async () => {
        const taskData = await axios.get(URL_TASK);
        setTasks(taskData.data);
        console.log(taskData.data);
    };

    useEffect(() => {
        getTask();
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setTaskInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskInput) return;

        setData([...data, { id: 1, value: taskInput, done: false }]);
        toastRef.current.openToast();
        setTaskInput('');
    };

    return (
        <div className="container-task">
            <Toast
                ref={toastRef}
                title="Success"
                message="Task created successfully!"
                seconds={5}
                type="success"
            />
            <h1 className="container-task__title">Todo App</h1>
            <form className="form-task" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-task__input"
                    placeholder="Task"
                    name="task"
                    onChange={handleChange}
                    value={taskInput}
                />
            </form>
            <ListTask tasks={tasks} />
        </div>
    );
};

export default TaskPage;
