import { useEffect, useState } from "react"
import { Container } from "./styles.ts"

export function Home() {

    interface ITaskList {
        id: number,
        name: string,
    }

    const [task, setTask] = useState<string>("")
    const [taskList, setTaskList] =  useState<ITaskList[]>([]);

    function addNewTask(event: any) {
        event.preventDefault()
        const newTask:ITaskList = {id: taskList.length + 1, name: task}

        if(task.length < 4) {
            return alert("As tarefas precisam ter 4 caractéres ou mais.")
        }

        setTask("")
        setTaskList([...taskList, newTask])
        localStorage.setItem('@todolist', JSON.stringify([...taskList, newTask]));
    }

    function removeTask(id: number) {
        const newTaskList = taskList.filter(task => task.id != id)
        newTaskList.map(tasks => (
            tasks.id = tasks.id - 1
        ))
        setTaskList(newTaskList)
        localStorage.setItem('@todolist', JSON.stringify(newTaskList));
    }

    function removeAllTasks() {
        setTaskList([])
        localStorage.removeItem('@todolist')
    }

    useEffect( () => {
        const values = localStorage.getItem('@todolist');
        if(values) {
            const localList: ITaskList[] = JSON.parse(values)
            setTaskList(localList)
        }
    }, [])


    return (
        <Container>
            <form>
                <h1> INSIRA SUAS TAREFAS </h1>
                <input value={task} onChange={(event) => setTask(event.target.value)}></input>
                <button onClick={(event) => addNewTask(event)}> Adicionar </button>
            </form>

            <ul>
                {
                    taskList.length > 0
                    ? taskList.map(tasks => (
                        <li key={tasks.id}> {tasks.id}. {tasks.name} <button onClick={() => removeTask(tasks.id)}> x </button> </li>
                    ))
                    : <h2> Adicione alguma tarefa... </h2> 
                }
            </ul>

            <button onClick={() => removeAllTasks()}> Limpar todas as tarefas </button>
        </Container>
    )
}