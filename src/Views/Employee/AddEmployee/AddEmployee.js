import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { apiUpdate } from "../../../Service/api";
import "./AddEmployee.scss";
import user from "../../../Assets/user.png";
import Header from "../../../Components/Header/Header";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddEmployee() {

  const [number_id, setNumber_id] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [start_date, setStart_date] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [blood, setBlood] = useState("");
  const [role, setRole] = useState("1");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      number_id: number_id,
      fname: fname,
      lname: lname,
      start_date: start_date,
      date_of_birth: date_of_birth,
      age: age,
      sex: sex,
      height: height,
      weight: weight,
      blood: blood,
      role: role,
      password: password
    };
    axios
      .post(
        "http://localhost:3000/users/add",
        // headers: {
        //   Accept: 'application/form-data',
        //   'Content-Type': 'application/json',
        // },
        data
      )
      .then(function (res) {
        alert(res.data);
        if (res["status"] === 200) {
          // window.location.href = '/';
          navigate("/Employee/ShowEmployee");
          console.log("!!!!!!!!!!");
        } else {
          console.log(res.data);
        }

      });
  };


  return (
    <div>
      <Header />
      <Container maxWidth="xs">
        <div>
          <br />
          <div className="title">
            <div className="image">
              <img src={user} alt="" />
            </div>
            <br />
            <Typography component="h1" variant="h6">
              เพิ่มข้อมูลพนักงาน
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="number_id"
                  name="number_id"
                  variant="filled"
                  required
                  fullWidth
                  id="number_id"
                  label="เลขบัตรประจำตัวประชาชน"
                  onChange={(e) => setNumber_id(e.target.value)}
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
                  autoComplete="fname"
                  name="firstName"
                  variant="filled"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  onChange={(e) => setFname(e.target.value)}
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
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  type='date'
                  variant="filled"
                  required
                  fullWidth
                  id="Start date"
                  label="วันเริ่มงาน"
                  onChange={(e) => setStart_date(e.target.value)}
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
                  InputLabelProps={{ shrink: true }}
                  type='date'
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
                <FormControl fullWidth sx={{}}>
                  <InputLabel id="demo-simple-select-label">เพศ</InputLabel>
                  <Select
                    sx={{ height: 48, minWidth: 80, backgroundColor: '#fff6' }}
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
                <FormControl fullWidth sx={{}}>
                  <InputLabel id="demo-simple-select-label">กรุ๊ปเลือด</InputLabel>
                  <Select
                    sx={{ height: 48, minWidth: 80, backgroundColor: '#fff6' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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
              <Grid item xs={12}>
                <TextField
                  // autoComplete="number_id"
                  type="password"
                  name="Password"
                  variant="filled"
                  required
                  fullWidth
                  id="password"
                  label="รหัสผ่าน"
                  onChange={(e) => setPassword(e.target.value)}
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
            </Grid>
            <br />
            <Button type="submit" fullWidth variant="contained" color="primary">
              บันทึกข้อมูล
            </Button>
          </form>
        </div>
      </Container>
    </div>

  );
}
