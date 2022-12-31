import axios from "axios";

const apiGet = async () => {
  return await axios.get("http://localhost:5000/users");
};
const apiGetSomeUser = async (id) => {
  return await axios.get(`http://localhost:5000/users/${id}`);
};
const apiUpdate = async (data) => {
  return await axios.put("http://localhost:5000/users/update",data);
};


//Customer APIs Methods
const apiGetCustomer = async() =>{
    return await axios.get('http://localhost:5000/customer/')
};

const apiGetSomeCustomer = async(ID) =>{
  return await axios.get(`http://localhost:5000/customer/${ID}`)
};

const apiAddCustomer = async(data) =>{
    return await axios.post('http://localhost:5000/customer/add',data)
}
const apiDeleteCustomer = async(dataID) =>{
  return await axios.delete('http://localhost:5000/customer/delete', { data: dataID })
}
const apiUpdateCustomer = async (data) => {
  return await axios.put("http://localhost:5000/customers/edit",data);
};

export { apiGet, apiGetSomeUser, apiUpdate,apiGetCustomer,apiAddCustomer,apiDeleteCustomer,apiUpdateCustomer,apiGetSomeCustomer };
