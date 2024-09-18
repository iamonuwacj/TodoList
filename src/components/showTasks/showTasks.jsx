/* eslint-disable react/prop-types */
// import React from 'react'


const ShowTasks = ({task, onchecked, checkedTag, deleteTask}) => {

  

  return (
    <li>
        {
          task && (
            <div className="text-white">
              <input type="checkbox"
              name="eat" id="eat"
              className="mx-2 m-2"
              onClick={() => onchecked()}
              defaultChecked={checkedTag}
              /> { task }
            </div>
          )
        }

        {
          task && (
            <div className="flex gap-5">
              <button className="btn btn-xs sm:btn-sm h-2 w-[31%]">Edit {task}</button>
              <button className="btn btn-xs sm:btn-sm h-2 w-[31%]" onClick={() => deleteTask()}>Delete {task}</button>
            </div>
          )
        }
    </li>
  )
}

export default ShowTasks