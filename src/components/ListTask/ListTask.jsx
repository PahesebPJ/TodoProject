import React from 'react';
import './ListTask.css';

const ListTask = ({ tasks }) => {
    const addClass = (e) => {
        e.target.classList.toggle('list-task__item--active');
    };

    return (
        <ul className="list-task">
            <li className="list-task__item" onClick={addClass}>
                Buenas chabales
            </li>
        </ul>
    );
};

export default ListTask;
