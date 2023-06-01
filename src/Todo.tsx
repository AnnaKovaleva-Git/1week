import React from "react";

type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

type DataType = {
    title: string
    tasks: TasksType[]
    students: string[]
}

export const Todolist = (props: DataType) => {
    return <div>
        <div>{props.title}</div>
        <div>{props.tasks.map(task=> <Task taskId={task.taskId} title={task.title} isDone={task.isDone}/>)}</div>
        <div>{props.students.map(student => <span>{student}</span>)}</div>
    </div>
}

const Task = (props: TasksType) => {
    return <div>
        <div>{props.title}</div>
        <div>{props.taskId}</div>
        <input checked={props.isDone} type ={"checkbox"}/>
    </div>
}

