import axios from "axios";

const apiLogin = async(data) =>{
  return await axios.post('http://localhost:3000/login',data)
}
//Owner APIs Methods

const apiGetSomeOwner = async (id) => {
  return await axios.get(`http://localhost:3000/owner/${id}`);
};

const apiUpdateOwner = async(data) =>{
  return await axios.put(`http://localhost:3000/owner/update/`,data);
}


//Employee APIs Methods
const apiGet = async () => {
  return await axios.get("http://localhost:3000/users");
};
const apiGetSomeUser = async (id) => {
  return await axios.get(`http://localhost:3000/users/${id}`);
};
const apiUpdate = async (data) => {
  return await axios.put("http://localhost:3000/users/update",data);
};


//Customer APIs Methods
const apiGetCustomer = async() =>{
    return await axios.get('http://localhost:3000/customer/')
};

const apiGetSomeCustomer = async(ID) =>{
  return await axios.get(`http://localhost:3000/customer/${ID}`)
};

const apiAddCustomer = async(data) =>{
    return await axios.post('http://localhost:3000/customer/add',data)
}
const apiDeleteCustomer = async(dataID) =>{
  return await axios.delete('http://localhost:3000/customer/delete', { data: dataID })
}
const apiUpdateCustomer = async (data) => {
  return await axios.put("http://localhost:3000/customers/edit",data);
};

//Doctor APIs Methods
const apiGetDoctors = async()=>{
   return axios.get('http://localhost:3000/doctor/');
};
const apiAddDoctor = async(data) =>{
  return await axios.post('http://localhost:3000/doctor/add',data)
}
const apiDeleteDoctor = async(dataID) =>{
return await axios.delete('http://localhost:3000/doctor/delete', { data: dataID })
}
const apiUpdateDoctor = async (data) => {
return await axios.put("http://localhost:3000/doctor/edit",data);
};
const apiGetSomeDoctor = async (ID) => {
  return await axios.get(`http://localhost:3000/doctor/${ID}`)
};

//Treatment APIs methods
const apiAddTreatment = async (data) =>{
  return await axios.post('http://localhost:3000/treatment/add',data);
};

 const apiGetTreatment = async () => {
  return await axios.get('http://localhost:3000/treatment/show');
}


export {
  apiLogin, 
  apiUpdateOwner,
  apiGetSomeOwner,
  apiGet, 
  apiGetSomeUser, 
  apiUpdate,
  apiGetCustomer,
  apiAddCustomer,
  apiDeleteCustomer,
  apiUpdateCustomer,
  apiGetSomeCustomer,
  apiGetDoctors,
  apiAddDoctor,
  apiDeleteDoctor,
  apiUpdateDoctor,
  apiGetSomeDoctor,
  apiAddTreatment,
  apiGetTreatment
 };
