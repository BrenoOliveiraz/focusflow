import { useContext } from "react";
import { TaskContext } from "./TaskProvider";

export default function useTaskContext ( ){
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("Tentando acessar o context fora do Provider")
    }
    return context

}