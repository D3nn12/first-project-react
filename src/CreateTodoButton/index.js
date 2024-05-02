import "./createButton.css"
import React from "react";
import { TodoCotext } from "../TodoContex";
function CreateTodoButton(){
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoCotext)

    return(
        <button type="" id="AddChore" className="createTodoButton" onClick={()=>{
            setOpenModal(!openModal)
        }}>+</button>
    )

    
}


export {CreateTodoButton}




