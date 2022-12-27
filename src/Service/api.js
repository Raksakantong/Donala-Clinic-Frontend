import axios from "axios";

const apiGet = async () => {
  return await axios.get("http://localhost:5000/users");
};
const apiGetSomeUser = async (id) => {
  return await axios.get(`http://localhost:5000/users/${id}`);
};
const apiUpdate = async (data) => {
  return await axios.put("http://localhost:5000/users/update");
};

const apiGetCustomer = async() =>{
    return await axios.get('http://localhost:5000/customer/all')
};

const apiAddCustomer = async(data) =>{
    return await axios.post('http://localhost:5000/customer/add',data)
}


export { apiGet, apiGetSomeUser, apiUpdate,apiGetCustomer,apiAddCustomer };
