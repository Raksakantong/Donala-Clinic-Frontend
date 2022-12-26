import React from 'react'
import { ShowEmployee } from '../Views/Employee/ShowEmployee/ShowEmployee';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCreate from "../Views/Employee/AddEmployee/UserCreate";
import UpdateEmployee from "../Views/Employee/UpdateEmployee/UpdateEmployee";
import  Login  from "../Views/Login/Login";

export default function Routes1() {
  return (


    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Login/>} />
      {/* <Route exact path="/Login" element={<ShowEmployee />} /> */}
      <Route exact path="/Employee/ShowEmployee" element={<ShowEmployee />} />
      <Route exact path='/Employee/create' element={<UserCreate />} />
      <Route exact path='/Employee/update' element={<UpdateEmployee />} />
 

    </Routes>
  </BrowserRouter>

  )
}
