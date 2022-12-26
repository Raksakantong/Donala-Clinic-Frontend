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
        <Container maxWidth="xs">
            <div >
                <Typography component="h1" variant="h5">
                    User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                value={number_id
                                }
                                autoComplete="number_id"
                                name="number_id"
                                variant="outlined"
                                required
                                fullWidth
                                id="number_id"
                                label="Number id"
                                onChange={(e) => setNumber_id(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                value={fname}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={(e) => {setFname(e.target.value);console.log("ee ==> ",e)}}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={lname}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={start_date}
                                variant="outlined"
                                required
                                fullWidth
                                id="Start date"
                                label="Start Date"
                                onChange={(e) => setStart_date(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={date_of_birth}
                                variant="outlined"
                                required
                                fullWidth
                                id="date of birth"
                                label="Date of Birth"
                                onChange={(e) => setdate_of_birth(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={age}
                                variant="outlined"
                                required
                                fullWidth
                                id="age"
                                label="Age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={sex}
                                variant="outlined"
                                required
                                fullWidth
                                id="sex"
                                label="Sex"
                                onChange={(e) => setSex(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={height}
                                variant="outlined"
                                required
                                fullWidth
                                id="height"
                                label="Height"
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={weight}
                                variant="outlined"
                                required
                                fullWidth
                                id="weight"
                                label="weight"
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={blood}
                                variant="outlined"
                                required
                                fullWidth
                                id="blood"
                                label="Blood"
                                onChange={(e) => setBlood(e.target.value)}
                            />
                        </Grid>
                    </Grid>
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
    );
}
