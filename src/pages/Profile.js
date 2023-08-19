import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeProfile } from "./ChangeProfile"

export const Profile = () => {
    const {username} = useContext()
return (
   <div>
    {" "}
       This is {username} 
       <ChangeProfile/>
   </div>
)
}