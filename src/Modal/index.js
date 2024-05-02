import React from "react";
import ReactDOM from 'react-dom'
import "./Modal.css"
import { TodoCotext } from "../TodoContex";
function Modal(){
    const {
        addNewTodo,
        setOpenModal,
    } = React.useContext(TodoCotext)

    const [addTodoValue, SetTodoValue] = React.useState("")

    const onSubmit = (event)=>{
        event.preventDefault();
        if(addTodoValue === ""){
            setOpenModal(false)
        }else{
            addNewTodo(addTodoValue);
            SetTodoValue("");
            setOpenModal(false);
        }
    }

    const onCancel = ()=>{
        setOpenModal(false)
    }
    const onChange = (event)=>{
        SetTodoValue(event.target.value)

    }

    return ReactDOM.createPortal(
        

        <form className="Modal-container" onSubmit={onSubmit} >
                <label>Add a new TODO</label>
               <textarea 
                    className="Modal-container--input" 
                    placeholder="Lear English on Platzi" 
                    value= {addTodoValue}
                    onChange={onChange}>

                </textarea>
               <div className="TodoForm-buttonContainer">
                <button 
                        type="button"
                        className="TodoForm-button"
                        id="calcel-button"
                        onClick= {onCancel}
                >Cancel
                </button>
                    

                <button
                        type="submit"
                        className="TodoForm-button TodoForm-button--add"
                        id="Adding-button"  
                        >Add</button>
               </div>
               
        </form>,
        document.getElementById("modal")
    )
}

export{Modal}