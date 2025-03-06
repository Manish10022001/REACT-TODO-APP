import { useEffect, useState } from "react";

const TodoAppPage = () =>{
    // Step 1
  //todo app
  //input box => task => on button click => task add to todo
  //when task is completed, remove from the to do list

  //array
  let [list,setList]=useState([]);
  let [task,setTask]=useState("");
   
  useEffect(()=>{
    console.log(list)
  },[list])
  const handleAddTask = () =>{
    // let dummydata = "new dummy";
    let newlist = [...list,task]
    setList(newlist);
    setTask("")//as we want it to appear empty on adding task
  }
  const handleTaskDelete = (taskIndex) =>{
    let newList = list.filter((entry,index)=> taskIndex!== index)
    setList(newList);
  }
  //method 1 for handlechange we can directly give it inthe input as wellas
//   const handleChangeTask=(event) =>{
//     setTask(event.target.value);
//   }
    return(
        <div>
            <div>
            
            {/* method 1: */}
            {/* <input type="text" onChange={handleChangeTask} value={task} style={{padding:"4px, 4px"}}/> */}
            {/* method 2 */}
            <input 
                type="text" 
                onChange={(event)=>{setTask(event.target.value)}} 
                value={task} 
                style={{padding:"4px, 4px"}}
            />
            <button onClick={handleAddTask}>Add Task</button>

            {/* Map madhe callback function milte */}
            <h2>Task List</h2>
            <ul className="todolist">
                {
                    list.map((taskName,taskIndex)=>{
                        return(
                            <li className="todoitem">
                                <span>{taskName}</span>
                                <button 
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        handleTaskDelete(taskIndex)
                                    }}
                                >Delete Task(mark completed)</button>
                                
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </div>
    )
}
export default TodoAppPage;
{/* step 1: input and button create(l23 and l24, and onclick event on button
    , then create the function. 
step2: create an array, to store list, then create variable or string to add task
step3: give useEffect
step4: in handleAddTask,  
step5:in input give event for onchange)
step 6: we want to assign value to task so we use event.target.value 
step 7: after adding task we want it to disapper from the input so we 
    give in <input value={task}* also in handleAddTask give setTask[""]/}
step 8 :now we want the task to appear on the ui so we cgive <h2>task LIst</h2>
step 9:now give ul for lit and here we use map function which has callback function init
        to add task to list and appear on the ui also we give new button for delete
step 10:first we solve for <return> and then go outside <return> to handleDelet function
step11: it that we use filter , it filter i.e shows all expect for the index we don't want
step 12: just like wehen we use event we need to give event infunction in same way we need to give
        handelTasdDelete=(taskIndex)=>{ }
        */}