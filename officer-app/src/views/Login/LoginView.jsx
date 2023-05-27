import { useContext, useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../hooks/Auth/UserContext'
import auth from '../../services/Auth/auth-api'
import './AuthForms.scss'
function LoginView() {
    const navigate = useNavigate()
    const {login,user} = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function loginUser(){
        if(!username || !password) return
        let res = await auth.login(username, password)
        login(res.data)
        navigate('/')
    }
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    })
    return (
        <div className="Login">
            <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Enter Username" required/>
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" required/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" onClick={(e)=>{e.preventDefault(); loginUser()}}>
                    Login
                </Button>
            </Form>
            <Link to={'/register'}>Register</Link>
        </div>
    )
}

export default LoginView