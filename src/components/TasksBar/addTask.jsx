/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ShowTasks from '../showTasks/showTasks'

const AddTask = () => {
    const [InpValue, setInpValue] = useState("")
    const [allTasks, setAllTasks] = useState([])
    const [activeTasks, setActiveTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [tasksRemaining, setTaskRemaining] = useState(0)
    const [toggle, setToggle] = useState(true)
    
    const handleSubmit = (e) => {
        e.preventDefault
        setAllTasks((prev) => [...prev, ...[InpValue]])
        setInpValue("")

    }

    console.log(allTasks)
    
  return (
    <div>

        <div className="flex mb-10 justify-between items-center">
            <input type="text" className="input input-bordered w-full max-w-xs"
                onChange={(e) => {setInpValue(e.target.value)}}
                value={InpValue}
            />
            <button type='submit'
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg h-2 w-1/4"
                onClick={(e) => handleSubmit(e)}
                >
                Add
            </button>
        </div>

            <div className="flex justify-between items-center gap-[2%] w-full">
                <button type='submit'
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg h-2 w-[31%]"
                    onClick={() => setToggle(true)}
                    >
                    Show all Tasks
                </button>
                <button type='submit'
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg h-2 w-[31%]"
                    
                    >
                    Show Active Tasks
                </button>
                <button type='submit'
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg h-2 w-[31%]"
                    
                    >
                    Show Completed Tasks
                </button>
            </div>
        <div>
            <ul>
                {
                    allTasks.map((tasks, index) =>
                        <ShowTasks task={tasks} key={index} />
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default AddTask