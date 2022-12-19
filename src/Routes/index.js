import React from 'react'
import { ShowEmployee } from '../Views/Components/Employee/ShowEmployee/ShowEmployee';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCreate from "../Views/Employee/AddEmployee/UserCreate";
import  Login  from "../Views/Login/Login";

export default function Routes1() {
  return (


    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Login/>} />
      {/* <Route exact path="/Login" element={<ShowEmployee />} /> */}
      <Route exact path="/ShowEmployee" element={<ShowEmployee />} />
      <Route exact path='/ShowEmployee/create' element={<UserCreate />} />

    </Routes>
  </BrowserRouter>

  )
}
