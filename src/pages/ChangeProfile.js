import { useState } from "react";
import { useContext } from "react"
import { AppContext } from "../App"

export const ChangeProfile = (props) => {

    const [newUserName, setNewUsername] = useState("")
    const {username, setUsername} = useContext(AppContext)

    return (
        <div>
            <input onChange={(event) => {setNewUsername(event.target.value)}}/>
            <button onClick={()=> {setUsername(newUserName)}}> Change Username</button>
        </div>
    )
}