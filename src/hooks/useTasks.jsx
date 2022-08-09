import { useEffect, useState } from 'react';
import axios from '../api/axios';

const useTasks = (url) => {
    const [tasks, setTasks] = useState();

    const getTask = async () => {
        const taskData = await axios.get(url);
        setTasks(taskData.data);
        console.log(taskData.data);
    };

    useEffect(() => {
        getTask();
    }, []);

    return { tasks };
};

export default useTasks;
