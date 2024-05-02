import { TodoCotext } from "../TodoContex"
import "./TodoSearch.css"
import React from "react"


function TodoSearch(){
const {searchValue, setSearchValue} = React.useContext(TodoCotext)
    return(
        <input 
        className="searchInput"
        placeholder="Search chore"
        value={searchValue} 
        onChange={(event)=>{
          setSearchValue(event.target.value)
        }
        } ></input>
    )
}
export {TodoSearch}