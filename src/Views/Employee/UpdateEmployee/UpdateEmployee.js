import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiGet,apiGetSomeUser,apiUpdate } from "../../../Service/api";
import axios from "axios";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import user from "../../../Assets/user.png";
import { fontSize } from "@mui/system";
import Header from "../../../Components/Header/Header.js";

export default function UpdateEmployee() {

    const navigate = useNavigate()
    const location = useLocation()

    const [number_id, setNumber_id] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [start_date, setStart_date] = useState('');
    const [date_of_birth, setdate_of_birth] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood, setBlood] = useState('');
    const [Employees, setEmployees] = useState([])
    const [ID, setId] = useState()
    const [Employees1, setEmployees1] = useState()

    useEffect(() => {

        getDataFromID()
        // your API call func

    }, [])



    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'number_id': number_id,
            'fname': fname,
            'lname': lname,
            'start_date': start_date,
            'date_of_birth': date_of_birth,
            'age': age,
            'sex': sex,
            'height': height,
            'weight': weight,
            'blood': blood,
            'id': location.state.id,
        }
        apiUpdate(data).then(function (res) {
            alert("Update Successfully")
            if (res['status'] === 200) {
                // window.location.href = '/';
                navigate("/Employee/ShowEmployee")
                console.log("!!!!!!!!!!");
            }
            console.log(res.data);
        }
        )
    }

     function getDataFromID() {
        const options = {
            params: {
                id: location.state.id
            }
        };
        apiGetSomeUser(location.state.id).then(async (res) => {
            let data = await res.data
            console.log("ressss data ==>", res.data);
            if (data) {
                setEmployees((data))
                setNumber_id(data[0].number_id)
                setFname(data[0].fname)
                setLname(data[0].lname)
                setStart_date(data[0].start_date)
                setdate_of_birth(data[0].date_of_birth)
                setAge(data[0].age)
                setSex(data[0].sex)
                setHeight(data[0].height)
                setWeight(data[0].weight)
                setBlood(data[0].blood)
                setEmployees(data[0].Employees)
                setId(data[0].id)
            }


        })
    }




    return (
        <div>
           <Header/>
        <Container maxWidth="xs">
            <div >
            <br />
        <div className="title">
          <div className="image">
            <img src={user} alt="" />
          </div>
          <br />
          <Typography component="h1" variant="h6">
            แก้ไขข้อมูลพนักงาน
          </Typography>
        </div>
        {/* 
        <TextField
                autoComplete="fname"
                name="firstName"
                variant="filled"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
                autoFocus
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    color: "white",
                    backgroundColor: "#fff7",
                    height: "15px",
                  },
                }}
              />
        
        */}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                value={number_id
                                }
                                autoComplete="number_id"
                                name="number_id"
                                variant="filled"
                                required
                                fullWidth
                                id="number_id"
                                label="Number id"
                                onChange={(e) => setNumber_id(e.target.value)}
                                autoFocus
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6} >
                            <TextField
                                value={fname}
                                autoComplete="fname"
                                name="firstName"
                                variant="filled"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={(e) => {setFname(e.target.value);console.log("ee ==> ",e)}}
                                autoFocus
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                value={lname}
                                variant="filled"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                onChange={(e) => setLname(e.target.value)}
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6} >
                            <TextField
                                value={start_date}
                                variant="filled"
                                required
                                fullWidth
                                id="Start date"
                                label="Start Date"
                                onChange={(e) => setStart_date(e.target.value)
                                }
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                value={date_of_birth}
                                variant="filled"
                                required
                                fullWidth
                                id="date of birth"
                                label="Date of Birth"
                                onChange={(e) => setdate_of_birth(e.target.value)}
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                value={age}
                                variant="filled"
                                required
                                fullWidth
                                id="age"
                                label="Age"
                                onChange={(e) => setAge(e.target.value)}
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                value={sex}
                                variant="filled"
                                required
                                fullWidth
                                id="sex"
                                label="Sex"
                                onChange={(e) => setSex(e.target.value)}
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4}>
                            <TextField
                                value={height}
                                variant="filled"
                                required
                                fullWidth
                                id="height"
                                label="Height"
                                onChange={(e) => setHeight(e.target.value)}
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4}>
                            <TextField
                                value={weight}
                                variant="filled"
                                required
                                fullWidth
                                id="weight"
                                label="weight"
                                onChange={(e) => setWeight(e.target.value)}
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4}>
                            <TextField
                                value={blood}
                                variant="filled"
                                required
                                fullWidth
                                id="blood"
                                label="Blood"
                                onChange={(e) => setBlood(e.target.value)}
                                inputProps={{
                                    style: {
                                      fontFamily: "Arial",
                                      color: "#0F3A5D",
                                      backgroundColor: "#fff7",
                                      height: "15px",
                                      fontWeight:'bold',
                                      fontSize:'medium'
                                    },
                                  }}
                            />
                        </Grid>
                    </Grid>
                    <br/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"

                    >
                        Edit
                    </Button>
                </form>
            </div>
        </Container> 
        </div>
        
    );
}
