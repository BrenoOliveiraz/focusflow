import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const TaskContext = createContext()

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const TASKS_STORAGE_KEY = 'fokus-tasks'

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
                const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTasks(loadedData)
                setIsLoaded(true)
            } catch (e) {
            }

        };
        getData()
    }, [])

    useEffect(() => {
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
            } catch (e) {
                // saving error
            }
        };
        if (isLoaded) {
            storeData(tasks)
        }

    }, [tasks])






    const addTask = (description) => {
        setTasks(prevState => {
            return [
                ...prevState,
                {
                    description,
                    id: String(Date.now()),  // gera id único como string
                    completed: false        // recomenda inicializar completed
                }
            ]
        })
    }


    const toggleTaskCompleted = (id) => {
        setTasks(prevState => {
            return prevState.map(t => {
                if (t.id == id) {
                    t.completed = !t.completed
                }
                return t
            })
        })
    }
    const deleteTask = (id) => {
        setTasks(prevState => {
            return prevState.filter(t => t.id !== id)
        })
    }

    const updateTask = (id, newDescription) => {
        setTasks(oldState =>
            oldState.map(t => {
                if (t.id == id) {
                    return { ...t, description: newDescription }
                }
                return t
            })
        )
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            toggleTaskCompleted,
            deleteTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}