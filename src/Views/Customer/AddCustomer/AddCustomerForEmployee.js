import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { apiAddCustomer } from '../../../Service/api'
import HeaderEmployee from "../../../Components/Header/HeaderEmployee/HeaderEmployee";



const AddCustomerForEmployee = () => {
  const navigate = useNavigate()

  const [number_id, setNumber_id] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [sex, setSex] = useState('');
  const [blood, setBlood] = useState('');
  const [drug_allergy, setDrug_allergy] = useState('ไม่มี');
  const [congenital_diseaset, setCongenital_diseaset] = useState('ไม่มี');
  const [etc_note, setEtc_note] = useState('ไม่มี');


  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      "number_id": number_id,
      "fname": fname,
      "lname": lname,
      "phone_number": phone_number,
      "sex": sex,
      "blood": blood,
      "drug_allergy": drug_allergy,
      "congenital_diseaset": congenital_diseaset,
      "etc_note": etc_note
    }
    apiAddCustomer(data).then(function (res) {
      alert(res.data)
      if (res['status'] === 200) {
        // window.location.href = '/';
        navigate("/homeEmployee/showOPD")
        console.log("!!!!!!!!!!");
      }
      console.log(res.data);
    }
    )
  }

  return (
    <div>
      <HeaderEmployee />
      <Container maxWidth="xs">
        <br />
        <div >
          <div className="title">
            <Typography component="h1" variant="h6">
              เพิ่มข้อมูลลูกค้า
            </Typography>
          </div>

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
              <Grid item xs={12} md={6} lg={6} xl={6} >
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
              <Grid item xs={12} md={6} lg={6} xl={6}>
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
                  id="phone_number"
                  label="Phone number"
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="sex"
                  label="Sex"
                  onChange={(e) => setSex(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
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
                  variant="outlined"
                  required
                  fullWidth
                  id="congenital_diseaset"
                  label="Congenital diseaset"
                  onChange={(e) => setCongenital_diseaset(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="etc_note"
                  label="Note"
                  onChange={(e) => setEtc_note(e.target.value)}
                />
              </Grid>
            </Grid>
            <br />
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
    </div>

  )
}
export default AddCustomerForEmployee
