import { ChangeProfile } from "./ChangeProfile"

export const Profile = (props) => {
return (
   <div>
    {" "}
       This is {props.username} 
       <ChangeProfile setUsername={props.setUsername}/>
   </div>
)
}