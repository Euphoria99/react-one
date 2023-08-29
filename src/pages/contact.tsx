import { useSelector } from "react-redux"

export const Contact = () => {
    const username = useSelector((state:any) => state.user.value.username)
    return(
        <div>
            <h1>This is contacts page {username}</h1>
        </div>
    )
}