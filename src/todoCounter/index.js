import React from "react";
import "./todoCounter.css";
import { TodoCotext } from "../TodoContex";

function TodoCounter(){
       const {
        loading, 
        todos,
        completedTodos,
        totalTodos

      } = React.useContext(TodoCotext)


        
        const isTrue = todos.every(todo => todo.completed === true)
      if(isTrue && !loading && todos.length > 0){
          return <h1 className="todoCounter"> 
                    Great!! You're done with all your chores
                 </h1>
      }

      if(todos.length === 0 && !loading){
        return <h1 className="todoCounter">
                  Add you first chore!!
               </h1>
      }

    return(
      <h1 className="todoCounter">
        You have completed<br></br> <span>{completedTodos}</span> out of <span>{totalTodos}</span> tasks
      </h1>
    );
  
  }
  export {TodoCounter}