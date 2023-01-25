// import React from 'react'
// import HeaderDoctor from "../../../Components/Header/HeaderDoctor/HeaderDoctor";

// export default function TreatmentForm() {
//   return (
//     <>
//     <HeaderDoctor/>
//     <div>TreatmentForm</div>
//     </>
    
//   )
// }
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
import "./TreatmentForm.scss";
import user from "../../../Assets/user.png";
import HeaderDoctor from "../../../Components/Header/HeaderDoctor/HeaderDoctor";
import { apiAddTreatment } from "../../../Service/api";

export default function UserCreate() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      case_name: name,
      customer_id: number_id,
      case_detail:case_datail ,
      price: price,
      date: date,

    };
    apiAddTreatment(data)
      .then((res) =>{
        alert(res.data);
        if (res["status"] === 200) {
          // window.location.href = '/';
        //   navigate("/Employee/ShowEmployee");
          console.log("!!!!!!!!!!");
        }
        console.log(res.data);
      });
  };

  const [name, setName] = useState("");
  const [number_id, setNumber_id] = useState("");
  const [case_datail, setCase_datail] = useState("");
  const [price, setPrice] = useState();
  const [date, setDate] = useState("");
  return (
    <div>
      <HeaderDoctor/>
      <Container maxWidth="xs">
      <div>
        <br />
        <div className="title">
          <div className="image">
            <img src={user} alt="" />
          </div>
          <br />
          <Typography component="h1" variant="h6">
            ฟอร์มบันทึกการรักษา
          </Typography>
        </div>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <TextField
                autoComplete="typeName"
                name="typeName"
                variant="filled"
                required
                fullWidth
                id="typeName"
                label="ชื่อการรักษา"
                onChange={(e) => setName(e.target.value)}
                autoFocus
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    color: "#0F3A5D",
                    backgroundColor: "#fff7",
                    height: "15px",
                    fontWeight:'bold',
                    fontSize:'medium'
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <TextField
                autoComplete="number_id"
                name="number_id"
                variant="filled"
                required
                fullWidth
                id="number_id"
                label="เลขบัตรประชาชนของผู้เข้ารักษา"
                onChange={(e) => setNumber_id(e.target.value)}
                autoFocus
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    color: "#0F3A5D",
                    backgroundColor: "#fff7",
                    height: "15px",
                    fontWeight:'bold',
                    fontSize:'medium'
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="detail"
                label="รายละเอียดการรักษา"
                onChange={(e) => setCase_datail(e.target.value)}
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    color: "#0F3A5D",
                    backgroundColor: "#fff7",
                    height: "15px",
                    fontWeight:'bold',
                    fontSize:'medium'
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="price"
                label="ค่ารักษา"
                onChange={(e) => setPrice(e.target.value)}
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    color: "#0F3A5D",
                    backgroundColor: "#fff7",
                    height: "15px",
                    fontWeight:'bold',
                    fontSize:'medium'
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="date"
                label="วันที่"
                onChange={(e) => setDate(e.target.value)}
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    color: "#0F3A5D",
                    backgroundColor: "#fff7",
                    height: "15px",
                    fontWeight:'bold',
                    fontSize:'medium'
                  },
                }}
              />
            </Grid>
          </Grid>
          <br />
          <Button type="submit" fullWidth variant="contained" color="primary">
            บันทึก
          </Button>
        </form>
      </div>
    </Container>
    </div>
    
  );
}

