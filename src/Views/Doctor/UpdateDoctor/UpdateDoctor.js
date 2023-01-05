import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiGet, apiGetSomeCustomer, apiGetSomeDoctor, apiGetSomeUser, apiUpdate, apiUpdateCustomer, apiUpdateDoctor } from "../../../Service/api";
import axios from "axios";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function UpdateCustomer() {

    const navigate = useNavigate()
    const location = useLocation()

    const [id, setId] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    

    useEffect(() => {

        getDataFromID()
        // your API call func

    }, [])



    const handleSubmit = event => {
        event.preventDefault();
        var data = {

            "fname": fname,
            "lname": lname,
            "id": location.state.id,

        }
        console.log("data : ", data);
        apiUpdateDoctor(data).then(function (res) {
            console.log(data);
            console.log("resss === ",res);
            alert("แก้ไขข้อมูลสำเร็จ")
            if (res['status'] === 200) {
                // window.location.href = '/';
                navigate("/doctor/ShowDoctor")
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
        apiGetSomeDoctor(location.state.id).then(async (res) => {
            let data = await res.data
            console.log("data from id ", data[0].fname
            );
            data.map((m) => {
                console.log("map : ", m.fname);
            })
            if (data) {
                setId(data[0].id)
                setFname(data[0].fname)
                setLname(data[0].lname)
            }


        })
    }




    return (
        <Container maxWidth="xs">
            <div >
                <Typography component="h1" variant="h5">
                    Customer
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                value={id
                                }
                                autoComplete="id"
                                name="id"
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                label="id"
                                // onChange={(e) => setNumber_id(e.target.value)}
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
                                onChange={(e) => { setFname(e.target.value); console.log("ee ==> ", e) }}
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
