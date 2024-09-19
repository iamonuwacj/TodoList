import './App.css'
import AddTask from './components/TasksBar/addTask'

import Header from './components/TodoHeader/header'

function App() {
  

    return (
        <div className='flex md:w-2/3 lg:w-1/3 mx-auto flex-nowrap overflow-scroll bg-slate-600 flex-col justify-center p-3'>
            <Header />
            <AddTask />
        </div>
    )
}

export default App
