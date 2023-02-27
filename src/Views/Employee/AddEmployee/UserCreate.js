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

export default function UserCreate() {
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
      role:role,
      password:password
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
                  label="Number id"
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
                  label="First Name"
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
                  label="Last Name"
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
                  label="Start Date"
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
                  label="Date of Birth"
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
                  label="Age"
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
                <TextField
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
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <TextField
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
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <TextField
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
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <TextField
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
                      fontWeight: 'bold',
                      fontSize: 'medium'
                    },
                  }}
                />
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
                  label="Password"
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
              Create
            </Button>
          </form>
        </div>
      </Container>
    </div>

  );
}
