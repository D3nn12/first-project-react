import "./TodoItems.css"
import {CompleteIcon} from "../todoIcon/CompleteIcon"
import {DeleteIcon} from "../todoIcon/DeleteIcon"

function TodoItems(props){


    return(
      <li className="todoItem"> 
        <CompleteIcon
         completed = {props.completed}
         onComplete = {props.onComplete}
        />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}> {props.text} {props.level}</p>
        <DeleteIcon
           onDelete = {props.onDelete}
        />
      </li>
    );
  }

  export {TodoItems};