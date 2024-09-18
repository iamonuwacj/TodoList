/* eslint-disable no-unused-vars */
// import React from 'react'

// eslint-disable-next-line react/prop-types
const ShowTasks = ({task}) => {

    console.log("This is the task", task);
    
  return (
    <li>
        <div>
            <input type="checkbox" name="eat" id="eat" />Eat
        </div>
        
        <div className="flex gap-5">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg h-2 w-[31%]">Edit {task}</button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg h-2 w-[31%]">Delete {task}</button>
        </div>
    </li>
  )
}

export default ShowTasks