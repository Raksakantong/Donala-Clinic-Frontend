import axios from "axios"

const apiGet = async () => {
    return await axios.get('http://localhost:5000/users')
}
const apiGetSomeUser = async (id) => {
    return await axios.get(`http://localhost:5000/users/${id}`)
}
const apiUpdate = async (data) => { return await axios.put('http://localhost:5000/users/update') }



export { apiGet, apiGetSomeUser,apiUpdate }
