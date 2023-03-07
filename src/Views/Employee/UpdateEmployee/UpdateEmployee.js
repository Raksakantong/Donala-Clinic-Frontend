import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiGet, apiGetSomeUser, apiUpdate } from "../../../Service/api";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        console.log("data[0].sex ===",data[0].sex);
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
      <Header />
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
                  label="เลขบัตรประจำตัวประชาชน"
                  // onChange={(e) => setNumber_id(e.target.value)}
                  autoFocus
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
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
                  label="ชื่อ"
                  onChange={(e) => { setFname(e.target.value); console.log("ee ==> ", e) }}
                  autoFocus
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
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
                  label="นามสกุล"
                  onChange={(e) => setLname(e.target.value)}
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6} >
                <TextField
                  type='date'
                  value={start_date}
                  variant="filled"
                  required
                  fullWidth
                  id="Start date"
                  label="วันเริ่มงาน"
                  onChange={(e) => setStart_date(e.target.value)
                  }
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
                  type='date'
                  value={date_of_birth}
                  variant="filled"
                  required
                  fullWidth
                  id="date of birth"
                  label="วันเกิด"
                  onChange={(e) => setdate_of_birth(e.target.value)}
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
                type='number'
                  value={age}
                  variant="filled"
                  required
                  fullWidth
                  id="age"
                  label="อายุ"
                  onChange={(e) => setAge(e.target.value)}
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />

              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
              <FormControl fullWidth sx={{ }}>
                  <InputLabel id="demo-simple-select-label">เพศ</InputLabel>
                  <Select
                    sx={{ height: 48, minWidth: 80,backgroundColor:'#fff6' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sex}
                    label="เพศ"
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <MenuItem value='ชาย'>ชาย</MenuItem>
                    <MenuItem value='หญิง'>หญิง</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <TextField
                type='number'
                  value={height}
                  variant="filled"
                  required
                  fullWidth
                  id="height"
                  label="ส่วนสูง"
                  onChange={(e) => setHeight(e.target.value)}
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <TextField
                type='number'
                  value={weight}
                  variant="filled"
                  required
                  fullWidth
                  id="weight"
                  label="น้ำหนัก"
                  onChange={(e) => setWeight(e.target.value)}
                  inputProps={{
                    style: {
                      fontFamily: "Arial",
                      color: "#0F3A5D",
                      backgroundColor: "#fff7",
                      height: "15px",
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
              <FormControl fullWidth sx={{ }}>
                  <InputLabel id="blood-label">กรุ๊ปเลือด</InputLabel>
                  <Select
                    sx={{ height: 48, minWidth: 80,backgroundColor:'#fff6' }}
                    labelId="demo-simple-select-label"
                    id="blood"
                    value={blood}
                    label="กรุ็ปเลือด"
                    onChange={(e) => setBlood(e.target.value)}
                  >
                    <MenuItem value='A'>A</MenuItem>
                    <MenuItem value='B'>B</MenuItem>
                    <MenuItem value='AB'>AB</MenuItem>
                    <MenuItem value='O'>O</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* A+, A-, B+, B-, AB+, AB-, O+ และ O- */}
            </Grid>
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"

            >
              แก้ไข
            </Button>
          </form>
        </div>
      </Container>
    </div>

  );
}
