import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
})

const login = async function(email, password){
    return await instance.get('/login',{
        params: {
            email,
            password
        }
    })
}

const register = async function(activationCode, password, email){
    return await instance.post('/register',{
        activationCode,
        password,
        email
    })
}

export default {
    login,
    register
}