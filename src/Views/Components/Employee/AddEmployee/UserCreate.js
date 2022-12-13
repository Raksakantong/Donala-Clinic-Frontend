import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";

export default function UserCreate() {

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
    }
    axios.post('http://localhost:5000/users/add', 
      // headers: {
      //   Accept: 'application/form-data',
      //   'Content-Type': 'application/json',
      // },
     (data)
    ).then(function (res)  {
          alert(res.data)
          if (res['status'] === 200) {
            // window.location.href = '/';
            console.log("!!!!!!!!!!");
          }
          console.log(res.data);
        }
      )
  }

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
                autoComplete="fname"
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
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
