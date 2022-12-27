import React from 'react'
import { ShowEmployee } from '../Views/Employee/ShowEmployee/ShowEmployee';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCreate from "../Views/Employee/AddEmployee/UserCreate";
import UpdateEmployee from "../Views/Employee/UpdateEmployee/UpdateEmployee";
import  Login  from "../Views/Login/Login";
import AddCustomer from "../Views/Customer/AddCustomer/AddCustomer";
import ShowCustomer from "../Views/Customer/ShowCustomer/ShowCustomer";

export default function Routes1() {
  return (


    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Login/>} />
      {/* <Route exact path="/Login" element={<ShowEmployee />} /> */}
      <Route exact path="/Employee/ShowEmployee" element={<ShowEmployee />} />
      <Route exact path='/Employee/create' element={<UserCreate />} />
      <Route exact path='/Employee/update' element={<UpdateEmployee />} />
      <Route exact path='/customer/showCustomers' element={<ShowCustomer />} />
      <Route exact path='/customer/AddCustomer' element={<AddCustomer />} />

    </Routes>
  </BrowserRouter>

  )
}
