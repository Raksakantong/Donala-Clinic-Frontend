import logo from './logo.svg';
import './App.css';
import  Routes1  from "./Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles"

// import { createTheme, ThemeProvider, Typography } from "@material-ui/core";


// import { ShowEmployee } from './Views/Components/Employee/ShowEmployee/ShowEmployee';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import UserCreate from "./Views/Components/Employee/AddEmployee/UserCreate";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });


  return (
    <ThemeProvider theme={theme}>
    <Routes1/>
    </ThemeProvider>
  );
}

export default App;
