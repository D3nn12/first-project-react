import React from "react"

function AddTodo(){
       return <div>
            <h2>Escribe to nuevo TODO</h2>
            <input placeholder="Learn English on Platzi"></input>

            <button>Cancelar</button>
            <button>Add</button>
        </div>
}

export {AddTodo}