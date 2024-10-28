function TodoItem (props) {
    //TodoList activityArr & setactivityArr will be send here with the help of props and i stored here

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function handleDelete (deleteid)
    {
        let temparr = activityArr.filter( (item) => {
            if(item.id === deleteid)
            {
                console.log ("delete")
                return false
            }else{
                //console.log("add")
                //console.log(deleteid)
                //console.log(item.id)
                return true
            }
        })
        setActivityArr(temparr)
    }

    return (
        <div className="flex justify-between">
            <p key={props}> {props.index+1}. {props.activity}</p>
            <button className="text-red-500" 
            onClick={()=>handleDelete(props.id)}>
                Delete</button>            
        </div>
    )
}

export default TodoItem