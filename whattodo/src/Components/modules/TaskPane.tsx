import React from 'react';
import './TaskPane.css';

interface taskProps {path: string, task: string};

const TaskPane = (props:taskProps) => {
    return <div className="TaskPane">
        <h1>Hello Stephen</h1>
        <h2>Your current task is:</h2>
        <div className="taskDisplay">{props.task}</div>
        <div className="timer"></div>
    </div>
}

export default TaskPane