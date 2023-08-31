import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

export const Navbar = () => {

    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        const loggedOut = await signOut(auth);
        console.log('The user is successfully Logged out');
        alert('You have Successfully Logged out');
    }
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/" > Home</Link>
                <Link to="/login" >Login</Link>
            </div>
            <div className="user">
                { user && (
                   <>
                      <p>{ user?.displayName}</p>
                      <img src={user?.photoURL || "" } width="40" height="40" />
                      <button onClick={signUserOut}>Log Out</button>
                   </> 
                )}

            </div>
        </div>
    )
}