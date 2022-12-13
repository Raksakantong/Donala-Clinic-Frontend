import logo from './logo.svg';
import './App.css';
import { ShowEmployee } from './Views/Components/Employee/ShowEmployee/ShowEmployee';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCreate from "./Views/Components/Employee/AddEmployee/UserCreate";

function App() {
  return (
    <>
      <div>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowEmployee />} />
            <Route path="/ShowEmployee" element={<ShowEmployee />} />
            <Route path='/create' element={<UserCreate />} />
          </Routes>
        </BrowserRouter> */}
        {/* <UserCreate /> */}
        <ShowEmployee />
      </div>

    </>
  );
}

export default App;
