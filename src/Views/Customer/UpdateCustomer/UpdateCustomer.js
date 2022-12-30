import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiGet,apiGetSomeCustomer,apiGetSomeUser,apiUpdate, apiUpdateCustomer } from "../../../Service/api";
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

    const [number_id, setNumber_id] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [sex, setSex] = useState('');
    const [blood, setBlood] = useState('');
    const [drug_allergy, setDrug_allergy] = useState('');
    const [congenital_diseaset, setCongenital_diseaset] = useState('');
    const [etcNote,setEtcNote] = useState('');
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
            'phone_number': phone_number,
            'sex': sex,
            'blood': blood,
            'drug_allergy': drug_allergy,
            'congenital_diseaset': congenital_diseaset,
            'etc_note': etcNote,
            'number_id': location.state.id,
        }
        console.log("data : ",data);
        apiUpdateCustomer(data).then(function (res) {
            alert("Update Successfully")
            if (res['status'] === 200) {
                // window.location.href = '/';
                navigate("/customer/showCustomers")
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
        apiGetSomeCustomer(location.state.id).then(async (res) => {
            let data = await res.data
            console.log("data from id ",data);
            if (data) {
                setNumber_id(data[0].number_id)
                setFname(data[0].fname)
                setLname(data[0].lname)
                setPhone_number(data[0].phone_number)
                setSex(data[0].sex)
                setBlood(data[0].blood)
                setDrug_allergy(data[0].drug_allergy)
                setCongenital_diseaset(data[0].congenital_diseaset)
                setEtcNote(data[0].etc_note)
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
                                value={phone_number}
                                variant="outlined"
                                required
                                fullWidth
                                id="Phone"
                                label="Phone Number"
                                onChange={(e) => setPhone_number(e.target.value)}
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
                                value={blood}
                                variant="outlined"
                                required
                                fullWidth
                                id="blood"
                                label="Blood"
                                onChange={(e) => setBlood(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={drug_allergy}
                                variant="outlined"
                                required
                                fullWidth
                                id="drug_allergy"
                                label="Drug allergy"
                                onChange={(e) => setDrug_allergy(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={congenital_diseaset}
                                variant="outlined"
                                required
                                fullWidth
                                id="Congenital diseaset"
                                label="Congenital diseaset"
                                onChange={(e) => setCongenital_diseaset(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={etcNote}
                                variant="outlined"
                                required
                                fullWidth
                                id="etc"
                                label="etc note"
                                onChange={(e) => setEtcNote(e.target.value)}
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
