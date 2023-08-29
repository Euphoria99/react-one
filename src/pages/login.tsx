import {useState} from "react"
import { login, logout} from '../store'
import { useDispatch, useSelector } from "react-redux"

export const Login = () => {

    const [newUserName,setNewUserName] = useState("");

    const dispatch = useDispatch();

    const username = useSelector((state:any) => state.user.value.username)
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <input type="text" placeholder="Username" onChange={(e)=>{setNewUserName(e.target.value)}}/>
            <button onClick={()=> dispatch(login({username: newUserName}))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
            <h1> {username}</h1>
        </div>
    )
}