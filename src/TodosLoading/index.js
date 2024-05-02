import React from "react";
import "./TodosLoading.css";

function TodosLoading(){
    return(
    <ul className="loading-container">
        <li className="loading-container--items"></li>
        <li className="loading-container--items"></li>
        <li className="loading-container--items"></li>
        <li className="loading-container--items"></li>
        <li className="loading-circle"></li>
    </ul>
    )
}

export {TodosLoading}