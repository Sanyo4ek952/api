import axios from "axios";

export const settings = {
    withCredentials: true
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': "77879fac-6622-4e1d-8585-a85382d33a5a"
    }
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type ResponseTodolistType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: D
}


type FieldErrorType = {
    error: string
    field: string
}

type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: string
    startDate: number
    deadline: number
    id: string
    todoListId: string
    order: string
    addedDate: number
}





export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseTodolistType>(
            `todo-lists/${todolistId}`,
            {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseTodolistType>(
            `todo-lists/${todolistId}`
        )
    },
    createTodolist(title: string) {
        return instance.post<ResponseTodolistType<{iteme:TodolistType}>>(
            `todo-lists`,
            {title: title},)
    },
    getTodolist() {
        return instance.get<TodolistType>(
            `todo-lists`)

    },
    getTasks(todolistId: string) {
        return instance.get<TaskType>(
            `todo-lists/${todolistId}/tasks`)

    },
    createTasks(todolistId: string, title:string) {
        return instance.post<ResponseTodolistType<TaskType>>(
            `todo-lists/${todolistId}/tasks`, {title})

    },
    updateTasks(todolistId: string, taskId:string, title:string) {
        return instance.put<ResponseTodolistType<TaskType>>(
            `todo-lists/${todolistId}/tasks/${taskId}` , {title})

    },
    deleteTasks(todolistId: string, taskId:string) {
        return instance.delete<ResponseTodolistType>(
            `todo-lists/${todolistId}/tasks/${taskId}`)

    },
}