import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { apiAddCustomer, apiAddDoctor } from "../../../Service/api";
import Header from "../../../Components/Header/Header";

export default function AddDoctor() {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [role, setRole] = useState("2");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      fname: fname,
      lname: lname,
      specialist:specialist,
      role:role,
      password: password,
    };
    apiAddDoctor(data).then(function (res) {
      alert(res.data);
      if (res["status"] === 200) {
        // window.location.href = '/';
        navigate("/doctor/ShowDoctor");
        console.log("!!!!!!!!!!");
      }
      console.log(res.data);
    });
  };
  return (
    <div>
      <Header />
      <br />
      <Container maxWidth="xs">
        <div>
          <div className="title">
            <Typography component="h1" variant="h5">
              เพิ่มข้อมูลแพทย์
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
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
                  label="นามสกุล"
                  onChange={(e) => setLname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // type="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="specialist"
                  label="ความเชี่ยวชาญ"
                  onChange={(e) => setSpecialist(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  // type="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="role"
                  label="หน้าที่"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  type="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="รหัสผ่าน"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

            </Grid>
            <br/>
            <Button type="submit" fullWidth variant="contained" color="primary">
              เพิ่มแพทย์
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
