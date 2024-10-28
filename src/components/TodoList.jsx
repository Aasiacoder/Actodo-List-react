import TodoItem from "./TodoItem"
import { useState } from "react"

function TodoList (props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return (
        <div className="bg-[#5bf75b] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {activityArr.length===0?<p>You haven't added anything yet</p> :""}

        {
            activityArr.map( (item, index) => {   
               return <TodoItem key={index} index={index} id={item.id} activity={item.activity} activityArr={activityArr} setActivityArr={setActivityArr}/> 
                {/*item={item} TodoItem-> {props.item.activity}*/}
            })
        }
    </div>
    )
}

export default TodoList