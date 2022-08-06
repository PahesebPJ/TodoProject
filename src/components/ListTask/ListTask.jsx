import React from 'react';
import './ListTask.css';

const ListTask = ({ tasks }) => {
    const addClass = (e) => {
        e.target.classList.toggle('list-task__item--active');
    };

    return (
        <ul className="list-task">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="list-task__item"
                    onClick={addClass}
                >
                    {task.name}
                </li>
            ))}
        </ul>
    );
};

export default ListTask;
