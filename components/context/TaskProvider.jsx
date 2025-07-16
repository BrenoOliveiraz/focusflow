import { createContext, useState } from "react";

export const TaskContext = createContext()

export function TaskProvider({children}){

    const [tasks, setTasks] = useState([])
    const addTask = (description) =>{
        setTasks(prevState => {
            return[...prevState, {description, id: prevState + 1}]
        })
    }

    const toggleTaskCompleted  = (id) =>{
        setTasks(prevState =>{
            return prevState.map(t=>{
                if(t.id ==id){
                   t.completed = !t.completed 
                }
                return t
            })
        })
    }
    const deleteTask = (id) =>{
        setTasks(prevState =>{
            return prevState.filter(t => t.id !== id)
        })
    }

    return(
        <TaskContext.Provider value={{
            tasks,
            addTask,
            toggleTaskCompleted ,
            deleteTask
        }}>
            { children }
        </TaskContext.Provider>
    )
}