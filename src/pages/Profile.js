import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeProfile } from "./ChangeProfile"

export const Profile = () => {
    const {username} = useContext(AppContext)
return (
   <div>
    {" "}
       This is {username} 
       <ChangeProfile/>
   </div>
)
}