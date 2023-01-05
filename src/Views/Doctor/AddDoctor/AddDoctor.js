import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {apiAddCustomer, apiAddDoctor} from '../../../Service/api'

export default function AddDoctor() {

    const navigate = useNavigate()  


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
      event.preventDefault();
      var data = {
        "fname": fname,
        "lname": lname,
        "password": password,

      }
      apiAddDoctor(data).then(function (res)  {
            alert(res.data)
            if (res['status'] === 200) {
              // window.location.href = '/';
              navigate("/doctor/ShowDoctor")
              console.log("!!!!!!!!!!");
            }
            console.log(res.data);
          }
        )
    }
  return (
    <Container maxWidth="xs">
    <div >
      <Typography component="h1" variant="h5">
        Doctor
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              onChange={(e) => setFname(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
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
              type="password"
              variant="outlined"
              required
              fullWidth
              id="phone_number"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </form>
    </div>
  </Container>
  )
}
