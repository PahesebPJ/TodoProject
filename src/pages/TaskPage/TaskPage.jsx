import React, { useState } from 'react';
import ListTask from '../../components/ListTask/ListTask';
import './TaskPage.css';

const TaskPage = () => {
    const [taskInput, setTaskInput] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setTaskInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskInput('');
        console.log(taskInput);
    };

    return (
        <div className="container-task">
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
            <ListTask tasks={taskInput} />
        </div>
    );
};

export default TaskPage;
