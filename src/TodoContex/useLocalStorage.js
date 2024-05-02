import React from "react";

function useLocalStorege(itemName, inicialValue){
     
    const [item, setItem] = React.useState(inicialValue);


    const [loading, setLaoding] = React.useState(true)
    const [error, setError] = React.useState(false)
    
    React.useEffect(()=>{
      
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName)
          let parseItem;
    
          if(!localStorageItem){
              localStorage.setItem(itemName, JSON.stringify(inicialValue))
              // parseItem = inicialValue;
            }else{
            parseItem = JSON.parse(localStorageItem)
            setItem(parseItem)
        }
          setLaoding(false);
          }catch(error){
            setLaoding(false)
            setError(true)
          }
      }, 2000);

    }, []);

    const saveItem = (newItem)=>{  
     
     localStorage.setItem(itemName, JSON.stringify(newItem))
     setItem(newItem);
  } 
  return {
    item, 
    saveItem, 
    loading,
    error,
  }
}

export {useLocalStorege}

// const defaultTodo = [
//   {text: "cortar cebolla", completed: false},
//   {text: "Tomar el curso de intro a react", completed: false},
//   {text: "llorar con la Lloronaa", completed: false},
//   {text: "lalalala", completed: false,},

// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodo))