import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API',
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': "77879fac-6622-4e1d-8585-a85382d33a5a"
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistAPI.getTodolist().then(res => setState(res.data))
    }, []);


    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist("WOW").then(res => setState(res.data))
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '8ab29958-bdef-4201-a497-e1b466d650be'
    useEffect(() => {
        todolistAPI.deleteTodolist(todolistId)
            .then(res => {
                setState(res.data)
            })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'aedfbfdc-375b-4acf-a88c-9d0da16ff3a9'
    useEffect(() => {
        todolistAPI.updateTodolist(todolistId, "some new title")
            .then(res => {
                setState(res.data)
            })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '9f91bede-8462-4e4e-84b2-3de9690d521b'
    useEffect(() => {
        todolistAPI.getTasks(todolistId).then(res => setState(res.data))
    }, []);


    return <div>{JSON.stringify(state)}</div>
}

export const PostTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '9f91bede-8462-4e4e-84b2-3de9690d521b'
    useEffect(() => {
        todolistAPI.createTasks(todolistId, "new Task").then(res => setState(res.data))
    }, []);


    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '9f91bede-8462-4e4e-84b2-3de9690d521b'
    const taskId = '6876b0ac-d5a5-4f56-8792-81c4110d5d79'
    useEffect(() => {
        todolistAPI.updateTasks(todolistId, taskId, "change Task").then(res => setState(res.data))
    }, []);


    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '9f91bede-8462-4e4e-84b2-3de9690d521b'
    const taskId = 'd16518f5-1d79-436a-af49-3ce2600fc34f'
    useEffect(() => {
        todolistAPI.deleteTasks(todolistId, taskId).then(res => setState(res.data))
    }, []);


    return <div>{JSON.stringify(state)}</div>
}