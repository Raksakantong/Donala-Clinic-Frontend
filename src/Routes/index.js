import React from 'react'
import ShowEmployee  from '../Views/Employee/ShowEmployee/ShowEmployee';
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
import TreatmentForm from "../Views/Doctor/TreatmentForm/TreatmentForm";
import ShowOPD from "../Views/ShowOPD/ShowOPD";
import ShowClinicTreatment from "../Views/ShowClinicTreatment/ShowClinicTreatment";
import HomeEmployee from "../Views/Home/HomeEmployee/HomeEmployee";
import ShowOPDEmployee from "../Views/ShowOPD/ShowOPDEmployee";
import AllEmployees from "../Views/Employee/AllEmployees/AllEmployees";
import ShowClinicTreatmentE from "../Views/ShowClinicTreatment/ShowClinicTreatmentE";
import AddCustomerForEmployee from "../Views/Customer/AddCustomer/AddCustomerForEmployee";
import EmployeeProfile from "../Views/Employee/EmployeeProfile/EmployeeProfile";
import EmployeesEdit from '../Views/Employee/EmployeeProfile/EmployeeEdit/EmployeesEdit';
import OwnerProfile from '../Views/Owner/OwnerProfile/OwnerProfile';
import OwnerEdit from '../Views/Owner/OwnerEdit/OwnerEdit';
import ShowClinicTreatmentO from "../Views/ShowClinicTreatment/ShowClinicTreatmentO";
import OPDEdit from '../Views/ShowOPD/Edit/OPDEdit';

export default function Routes1() {
  return (


    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Login/>} />
      {/* <Route exact path="/Login" element={<ShowEmployee />} /> */}
      <Route exact path="/Home" element= {<Home/>} />
      <Route exact path="/HomeDoctor" element= {<HomeDoctor/>} />
      <Route exact path="/treatmentform" element= {<TreatmentForm/>} />
      <Route exact path="/Employee/ShowEmployee" element={<ShowEmployee />} />
      <Route exact path='/Employee/create' element={<UserCreate />} />
      <Route exact path='/Employee/update' element={<UpdateEmployee />} />
      <Route exact path="/homeOwner/profile" element= {<OwnerProfile/>} />
      <Route exact path="/homeOwner/profile/edit" element= {<OwnerEdit/>} />
      <Route exact path="/homeOwner/show-clinic-treatment" element= {<ShowClinicTreatmentO/>} />

      <Route exact path='/customer/showCustomers' element={<ShowCustomer />} />
      <Route exact path='/customer/AddCustomer' element={<AddCustomer />} />
      <Route exact path='/customer/updateCustomer' element={<UpdateCustomer />} />
      
      <Route exact path='/doctor/showDoctor' element={<ShowDoctor />} />
      <Route exact path='/doctor/AddDoctor' element={<AddDoctor />} />
      <Route exact path='/doctor/updateDoctor' element={<UpdateDoctor />} />
      
      <Route exact path='/showOPD' element={<ShowOPD/>} />
      <Route exact path='/doctor/show-clinic-treatment' element={<ShowClinicTreatment/>} />

      <Route exact path='/homeEmployee' element={<HomeEmployee/>} />
      <Route exact path='/homeEmployee/showOPD' element={<ShowOPDEmployee/>} />
      {/* /homeEmployee/showOPD */}
      <Route exact path='/homeEmployee/showOPD/edit' element={<OPDEdit/>} />

      <Route exact path='/homeEmployee/add-customer' element={<AddCustomerForEmployee/>} />
      <Route exact path='/homeEmployee/all-employees' element={<AllEmployees/>} />
      <Route exact path='/homeEmployee/show-clinic-treatment' element={<ShowClinicTreatmentE/>} />
      <Route exact path='/homeEmployee/profile' element={<EmployeeProfile/>} />
      <Route exact path='/homeEmployee/profile/edit' element={<EmployeesEdit/>} />
    </Routes>
  </BrowserRouter>

  )
}
