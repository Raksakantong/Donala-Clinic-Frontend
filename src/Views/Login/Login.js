import { CardTravel, WindowOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../Service/api";
import './Login.css';


import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import logo from "../../Assets/logo.png";
// import { Box } from '@mui/system';


export default function Login() {
    const theme = createTheme({
        typography: {
            fontFamily: ["Kanit", "sans-serif"].join(","),
        },
        TextField: {
            color: 'white'
        }
    });

    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    function login() {
        console.log(user, "-", password);
        // let user = params
        let data = {
            "username": user,
            "password": password
        }
        apiLogin(data).then(async (data) => {
            console.log("dataDoctor", data.data);
            if (data.data != 'User not found') {
                // navigate('/Employee/ShowEmployee')
                // window.location.href = '/ShowEmployee' 
                // navigate('/Home')
                console.log("user data ==> ",data.data);
                console.log("role ==> ",data.data[0].role);
                if (data.data[0].role == '0') {
                   navigate('/Home') 
                }
                else if (data.data[0].role == '2'){
                    navigate('/HomeDoctor')   
                }
            }
            else if (!user ) {
                alert('ชื่อผู้ใช้ไม่ถูกต้อง')
            }
            else {
                alert('ข้อมูลไม่ถูกต้อง')
            }

        })

    }
    return (

        <div className='login' sx={{backgroudColor:'#0F3A5D'}}>
            <Container>

                <Grid
                    item
                    xs={12}
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >

                    <div className='login'>
                        <img src={logo} alt="" />
                        <div className=''>

                        </div>
                        <TextField autoComplete="user"
                            fullWidth
                            name="user"
                            variant="outlined"
                            required
                            id="user"
                            label="User"
                            onChange={(e) => setUser(e.target.value)}
                            autoFocus />

                        {/* <TextField autoComplete="password"
                        type={false}
                        fullWidth
                        name="password"
                        variant="outlined"
                        required
                        id="password"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                        style={{margin:'10px auto'}}
                        /> */}
                        <FormControl sx={{ top: 10, width: '100%', color: '#fff' }} variant="outlined">

                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput

                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <div className='Button'>
                            {/* <Button variant="outlined" onClick={() => {
                                login()
                            }}

                            >Login</Button> */}
                            <Button variant="outlined" fullWidth onClick={() => {
                                login()
                            }}
                            >Login</Button>
                        </div>


                    </div>
                </Grid>
            </Container>
        </div>

    )
}
