import React from 'react'
import { ShowEmployee } from '../Views/Employee/ShowEmployee/ShowEmployee';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCreate from "../Views/Employee/AddEmployee/UserCreate";
import UpdateEmployee from "../Views/Employee/UpdateEmployee/UpdateEmployee";
import  Login  from "../Views/Login/Login";
import AddCustomer from "../Views/Customer/AddCustomer/AddCustomer";
import ShowCustomer from "../Views/Customer/ShowCustomer/ShowCustomer";
import UpdateCustomer from "../Views/Customer/UpdateCustomer/UpdateCustomer";
import ShowDoctor  from "../Views/Doctor/ShowDoctor/ShowDoctor";
import AddDoctor from "../Views/Doctor/AddDoctor/AddDoctor";
import UpdateDoctor from "../Views/Doctor/UpdateDoctor/UpdateDoctor";
import Home from "../Views/Home/Home";
import HomeDoctor from "../Views/Home/HomeDoctor/HomeDoctor";

export default function Routes1() {
  return (


    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Login/>} />
      {/* <Route exact path="/Login" element={<ShowEmployee />} /> */}
      <Route exact path="/Home" element= {<Home/>} />
      <Route exact path="/HomeDoctor" element= {<HomeDoctor/>} />
      <Route exact path="/Employee/ShowEmployee" element={<ShowEmployee />} />
      <Route exact path='/Employee/create' element={<UserCreate />} />
      <Route exact path='/Employee/update' element={<UpdateEmployee />} />

      <Route exact path='/customer/showCustomers' element={<ShowCustomer />} />
      <Route exact path='/customer/AddCustomer' element={<AddCustomer />} />
      <Route exact path='/customer/updateCustomer' element={<UpdateCustomer />} />
      
      <Route exact path='/doctor/showDoctor' element={<ShowDoctor />} />
      <Route exact path='/doctor/AddDoctor' element={<AddDoctor />} />
      <Route exact path='/doctor/updateDoctor' element={<UpdateDoctor />} />
    </Routes>
  </BrowserRouter>

  )
}
