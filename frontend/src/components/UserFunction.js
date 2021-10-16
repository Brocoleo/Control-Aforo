import axios from 'axios'
const API = process.env.REACT_APP_API;

export const register = newUser => {
    return axios
        .post(`${API}/users/register`, {
            name: newUser.name,
            lastname: newUser.lastname,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post(`${API}/users/login`, {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}