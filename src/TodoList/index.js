import "./TodoList.css"
import React from "react"



function TodoList({children}){
    return(
        <ul className="list-container">
            {children}
        </ul>
    )
}

export {TodoList}