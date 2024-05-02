import React from "react";
import { TodoCounter   } from '../todoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItems } from '../TodoItem';
import{TodosLoading} from "../TodosLoading";
import{ErrorTodos} from "../ErrorTodos"
import{EmptyTodos} from "../EmptyTodos";
import { TodoCotext } from "../TodoContex";
import { Modal } from "../Modal";

 function AppUI(){

    const {
      todos,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal, 
    } = React.useContext(TodoCotext)
    return ( 
        // <React.Fragment> tambien puede se llamado de esta forma = <>  </>;
        <React.Fragment>
         
       
           <TodoCounter/>
    
          <TodoSearch/>


          {/* <TodoCotext.Consumer> */}

            {/* {()=>( */}
              <TodoList>

            {loading && <TodosLoading/>}
            {error && <ErrorTodos/>}
            {(!loading && todos.length === 0 )&& <EmptyTodos/>}


            {searchedTodos.map(todo =>(
                <TodoItems 
                 key={todo.text}
                 text={todo.text}
                 completed = {todo.completed}
                 onComplete = {()=> completeTodo(todo.text)}
                 onDelete = {()=> deleteTodo(todo.text)}
                 />
            ))}
            
              </TodoList>
            {/* )} */}
            
           
          {/* </TodoCotext.Consumer> */}
  

          

          <CreateTodoButton/>
          {openModal && (
            <Modal/>
         
          )}
          
          {/* <AddTodo/> */}
        </React.Fragment>
      );
}

export {AppUI}