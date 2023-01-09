import { useDispatch } from "react-redux"
import {login} from "../../component/store/action/auth"
import { useNavigate } from "react-router"
import { useState } from "react"
import styles from '../../assets/styles.css'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
     const handleSubmit = (e) =>{

        dispatch(login({username, password}))
        navigate("/")
        e.preventDefault()
     }

    return (
        <>
                <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name required />
                    <label>Username</label>
                    </div>
                    <div className="user-box">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name required />
                    <label>Password</label>
                    </div>
                    <button type="submit" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    Submit
                    </button>
                </form>
                </div>

        </>
    )
}

export default Login;