import React from "react";
import { useLocalStorege } from "./useLocalStorage";
const TodoCotext = React.createContext();

function TodoProvider({children}){

    const [searchValue, setSearchValue] = React.useState("");
    const {item: todos,
           saveItem: saveTodos,
           error,
           loading
          } = useLocalStorege("TODOS_V1", []);

    const [openModal, setOpenModal] = React.useState()

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length
 
  
  
   const searchedTodos = todos.filter(
      (todo) =>{
        return todo.text.toLowerCase().includes(searchValue.toLowerCase())
      }
   )
  
   const completeTodo = (text) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(todo => todo.text === text)
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos)
   }
  
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
  
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  
  
  }
  const addNewTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({text: text, completed: false})
        saveTodos(newTodos);
  }
return (

    <TodoCotext.Provider value={{
    completedTodos,
    totalTodos,
    todos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    addNewTodo,
    }}>
        {children}

    </TodoCotext.Provider>
)

}




export{TodoCotext, TodoProvider}