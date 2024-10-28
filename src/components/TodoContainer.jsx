import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"


function TodoContainer() {

    const [activityArr, setActivityArr] = useState([

        { id: 1, activity: "Read a book" },
        { id: 2, activity: "Go to a walk"},
        { id: 3, activity: "Have a shower"},
         
    ])

    return (
        <section>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </section>
    )
}

export default TodoContainer