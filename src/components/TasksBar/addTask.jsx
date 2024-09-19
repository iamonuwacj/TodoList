/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ShowTasks from '../showTasks/showTasks'

const AddTask = () => {
    const [InpValue, setInpValue] = useState("")
    const [allTasks, setAllTasks] = useState([])
    const [activeTasks, setActiveTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [toggleAll, setToggleAll] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updatedTask, setUpdatedTask] = useState("")
    const [toggleActive, setToggleActive] = useState(true)
    const [toggleCompleted, setToggleCompleted] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault
        if (InpValue === ""){
            return false
        }

        if (allTasks.includes(InpValue)){
            setInpValue("")
            alert("Task Already Enntered")
            return false
        }
        setAllTasks(() => [...allTasks, ...[InpValue]])
        setActiveTasks(() => [...activeTasks, ...[InpValue]])

        setInpValue("")
        setEdit(false)

    }

    function checked(currentIndex){
        const poped = activeTasks[currentIndex]
        setCompletedTasks(() => [...completedTasks, ...[poped]])

        activeTasks.splice(currentIndex, 1)

        console.log(`This was poped ${poped}, completedTasks ${completedTasks}, allTasks ${allTasks}`);
        
    }

    function handleAllTasks(){
        setToggleAll(true)
        setToggleActive(false)
        setToggleCompleted(false)
    }

    function handleActiveTasks(){
        setToggleAll(false)
        setToggleActive(true)
        setToggleCompleted(false)
    }

    function handleCompletedTasks(){
        setToggleAll(false)
        setToggleActive(false)
        setToggleCompleted(true)

        setCompletedTasks(completedTasks.filter(tasks => tasks != undefined))
    }

    function deleteTask(currentIndex){
        let deletedTask = allTasks[currentIndex]

        setAllTasks(allTasks.filter(task => task !== deletedTask ))
        setCompletedTasks(completedTasks.filter(tasks => tasks !== deletedTask))
        setActiveTasks(activeTasks.filter(task => task !== deletedTask))
    }

    function editTask(currentIndex){
        let taskTobeUpdated = allTasks[currentIndex]
        setUpdatedTask(taskTobeUpdated)
        setInpValue(taskTobeUpdated)

        setAllTasks(allTasks.filter(task => task !== taskTobeUpdated ))
        setCompletedTasks(completedTasks.filter(tasks => tasks !== taskTobeUpdated))
        setActiveTasks(activeTasks.filter(task => task !== taskTobeUpdated))

        setEdit(true)
    }


  return (
    <div>

        <div className="flex mb-10 justify-between items-center">
            <input type="text" className="input input-bordered w-full max-w-xs bg-white text-black"
                onChange={(e) => {setInpValue(e.target.value)}}
                value={InpValue}
            />
            <button type='submit'
                className="btn btn-xs sm:btn-sm h-2 w-1/4"
                onClick={(e) => handleSubmit(e)}
                >
                {
                    edit ? `Update` : `Add`
                }
            </button>
        </div>

            <div className="flex justify-between items-center gap-[2%] w-full mb-8">
                <button type='submit'
                    className="btn btn-xs sm:btn-sm  h-2 w-[31%]"
                    onClick={() => handleAllTasks()}
                    >
                    Show all Tasks
                </button>
                <button type='submit'
                    className="btn btn-xs sm:btn-sm  h-2 w-[31%]"
                    onClick={() => handleActiveTasks()}
                    >
                    Show Active Tasks
                </button>
                <button type='submit'
                    className="btn btn-xs sm:btn-sm  h-2 w-[31%] bg-success"
                    onClick={() => handleCompletedTasks()}
                    >
                    Show Completed Tasks
                </button>
            </div>
        <div>
            
            {
                toggleAll && (
                    <h2 className='mb-6 text-3xl text-white'>{`${allTasks.length} total tasks`}</h2>
                )
            }

            {
                toggleActive && (
                    <h2 className='mb-6 text-3xl text-white'>{`${activeTasks.length} tasks remaining`}</h2>
                )
            }

            {
                toggleCompleted && (
                    <h2 className='mb-6 text-3xl text-white'>{`${completedTasks.length} tasks completed`}</h2>
                )
            }
            
            <ul>
                {
                    toggleAll && allTasks.length > 0 && allTasks.map((tasks, index) =>
                        <ShowTasks task={tasks}
                            key={index}
                            onchecked={() => checked(index)}
                            checkedTag={false}
                            deleteTask={() => deleteTask(index)}
                            editTask={() => editTask(index)}
                        />
                    )
                }
                
            </ul>
            <ul>
                {
                    toggleCompleted && completedTasks.length > 0 && completedTasks.map((tasks, index) =>
                        <ShowTasks
                            key={index}
                            task={tasks}
                            checkedTag={true}
                            deleteTask={() => deleteTask(index)}
                            editTask={() => editTask(index)}
                        />
                    )
                }
            </ul>
            <ul>
                {
                    toggleActive && activeTasks.map((tasks, index) =>
                        <ShowTasks
                            key={index}
                            task={tasks}
                            onchecked={() => checked(index)}
                            checkedTag={true}
                            deleteTask={() => deleteTask(index)}
                            editTask={() => editTask(index)}
                        />
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default AddTask