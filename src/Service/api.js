import axios from "axios"

const apiGet = async() =>{
    return await axios.get('http://localhost:5000/users')
}
export {apiGet}
