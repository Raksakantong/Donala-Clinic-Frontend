import axios from "axios";

const apiLogin = async(data) =>{
  return await axios.post('http://localhost:5000/login',data)
}

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

//Doctor APIs Methods
// const apiGetDoctors = async()=>{
//   const getData = await axios.get('http://localhost:5000/doctors/')
//   getData.then(function (res) {
//     return res.data
//   }).catch(function(err){
//     return err
//   })

// }
const apiGetDoctors = async()=>{
   return axios.get('http://localhost:5000/doctor/');
};
const apiAddDoctor = async(data) =>{
  return await axios.post('http://localhost:5000/doctor/add',data)
}
const apiDeleteDoctor = async(dataID) =>{
return await axios.delete('http://localhost:5000/doctor/delete', { data: dataID })
}
const apiUpdateDoctor = async (data) => {
return await axios.put("http://localhost:5000/doctor/edit",data);
};
const apiGetSomeDoctor = async (ID) => {
  return await axios.get(`http://localhost:5000/doctor/${ID}`)
};
//Treatment APIs methods
const apiAddTreatment = async (data) =>{
  return await axios.post('http://localhost:5000/treatment/add',data);
}
export {
  apiLogin, 
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
  apiAddTreatment
 };
