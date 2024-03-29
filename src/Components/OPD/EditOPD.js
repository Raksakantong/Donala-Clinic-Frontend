import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  apiGet,
  apiGetSomeCustomer,
  apiGetSomeUser,
  apiUpdate,
  apiUpdateCustomer,
} from "../../Service/api";
import axios from "axios";
import Header from "../../Components/Header/Header";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './EditOPD.scss'

export default function EditOPD() {
  const navigate = useNavigate();
  const location = useLocation();

  const [number_id, setNumber_id] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [sex, setSex] = useState("");
  const [blood, setBlood] = useState("");
  const [drugAllergy, setDrugAllergy] = useState("");
  const [congenitalDisease, setCongenitalDisease] = useState("");
  const [etcNote, setEtcNote] = useState("");
  // const [Employees, setEmployees] = useState([]);
  // const [ID, setId] = useState();
  // const [Employees1, setEmployees1] = useState();

  useEffect(() => {
    getDataFromID();
    // your API call func
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      blood: blood,
      congenital_disease: congenitalDisease,
      drug_allergy: drugAllergy,
      etc_note: etcNote,
      fname: fname,
      lname: lname,
      number_id: location.state.id,
      phone_number: phone_number,
      sex: sex,
    };
    console.log("data : ", data);
    apiUpdateCustomer(data).then(function (res) {
      alert("แก้ไขข้อมูลสำเร็จ");
      if (res["status"] === 200) {
        // window.location.href = '/';
        navigate("/homeEmployee/showOPD");
        console.log("!!!!!!!!!!");
      }
      console.log(res.data);
    });
  };

  function getDataFromID() {
    const options = {
      params: {
        id: location.state.id,
      },
    };
    apiGetSomeCustomer(location.state.id).then(async (res) => {
      let data = await res.data;
      console.log("data from id ", data[0].congenitalDisease);
      data.map((m) => {
        console.log("map : ", m.congenitalDiseaset);
      });
      if (data) {
        setNumber_id(data[0].number_id);
        setFname(data[0].fname);
        setLname(data[0].lname);
        setPhone_number(data[0].phone_number);
        setSex(data[0].sex);
        setBlood(data[0].blood);
        setDrugAllergy(data[0].drugAllergy);
        setCongenitalDisease(data[0].congenitalDisease);
        console.log("Congenital_diseaset === ", data[0].congenitalDisease);
        console.log("Blood", data[0].blood);
        setEtcNote(data[0].etcNote);
      }
    });
  }

  return (
    <div>
      <br />
      <Container maxWidth="xs">
        <div>
          <div className="title">
            <Typography component="h1" variant="h5">
              แก้ไขข้อมูลลูกค้า
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                type='number'
                  value={number_id}
                  autoComplete="number_id"
                  name="number_id"
                  variant="outlined"
                  required
                  fullWidth
                  id="number_id"
                  label="เลขบัตรประจำตัวประชาชน"
                  // onChange={(e) => setNumber_id(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
                  value={fname}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  onChange={(e) => {
                    setFname(e.target.value);
                    console.log("ee ==> ", e);
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
                  value={lname}
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
                type='number'
                  value={phone_number}
                  variant="outlined"
                  required
                  fullWidth
                  id="Phone"
                  label="หมายเลขโทรศัพท์"
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
              <FormControl fullWidth sx={{}}>
                  <InputLabel id="sex-label">เพศ</InputLabel>
                  <Select
                    sx={{ height: 48, minWidth: 80, backgroundColor: '#fff0' }}
                    labelId="demo-simple-select-label"
                    id="sex"
                    value={sex}
                    label="เพศ"
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <MenuItem value='ชาย'>ชาย</MenuItem>
                    <MenuItem value='หญิง'>หญิง</MenuItem>
                   


                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
              <FormControl fullWidth sx={{}}>
                  <InputLabel id="blood-label">กรุ๊ปเลือด</InputLabel>
                  <Select
                    sx={{ height: 48, minWidth: 80, backgroundColor: '#fff0' }}
                    labelId="demo-simple-select-label"
                    id="blood"
                    value={blood}
                    label="กรุ๊ปเลือด"
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
                  value={drugAllergy}
                  variant="outlined"
                  required
                  fullWidth
                  id="drug_allergy"
                  label="แพ้ยา"
                  onChange={(e) => setDrugAllergy(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={congenitalDisease}
                  variant="outlined"
                  required
                  fullWidth
                  id="Congenital diseaset"
                  label="โรคประจำตัว"
                  onChange={(e) => setCongenitalDisease(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={etcNote}
                  variant="outlined"
                  required
                  fullWidth
                  id="etc"
                  label="อื่นๆ"
                  onChange={(e) => setEtcNote(e.target.value)}
                />
              </Grid>
            </Grid>
            <br/>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Edit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
