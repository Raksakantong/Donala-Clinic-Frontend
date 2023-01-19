import React, { useState, useEffect } from "react";
import { apiDeleteDoctor, apiGetDoctors } from "../../../Service/api";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup } from "@mui/material";
import Doctor from "../../../Assets/Doctor.jpg";
import Grid from "@mui/material/Grid";
import "./showDoctor.scss";

import axios from "axios";

export default function ShowDoctor() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let getData = apiGetDoctors();
    getData.then((res) => {
      console.log("apiGetDoctors", res.data);
      setDoctors(res.data);
    });
  }
  function del(id, e) {
    let idParse = id.toString();
    let ID = {
      id: idParse,
    };
    console.log("ID", ID);
    apiDeleteDoctor(ID).then((res) => {
      console.log(res);
      console.log(res.data);
      getData();
    });
  }
  function update_doctor(ID) {
    console.log("number id == ", ID);
    let idParse = ID.toString();
    navigate("/doctor/updateDoctor", {
      state: {
        id: idParse,
      },
    });
  }
  function goToAdd() {
    navigate("/doctor/AddDoctor");
  }

  return (
    <>
      <Header />
      <br />
      <div className="add-customer">
        <button type="" onClick={() => goToAdd()}>
          เพิ่มข้อมูล
        </button>
      </div>

      {doctors.map((data) => (
        <div className="doctor">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="doctor-img">
                <img src={Doctor} alt="" />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className="grid-detail"
            >
              <div className="doctor-detail">
                <h2>
                  {data.fname} {data.lname}
                </h2>
                <h3>{data.specialist}</h3>
                <p>{data.profile}</p>
                <div className="button-group">
                  <ButtonGroup
                    aria-label=" contained button group"
                    variant="contained"
                  >
                    <Button
                      color="primary"
                      onClick={() => update_doctor(data.number_id)}
                    >
                      Edit
                    </Button>
                    <Button color="error" onClick={() => del(data.number_id)}>
                      Delete!
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
      {/* <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead
              sx={{
                "& th": {
                  color: "#fff",
                  backgroundColor: "#0F3A5D",
                },
              }}
            >
              <TableRow>
                <TableCell align="center">No.</TableCell>
                <TableCell align="right">ชื่อ</TableCell>
                <TableCell align="right">นามสกุล</TableCell>
                <TableCell align="center">ตัวเลือก</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center" component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell align="right">{row.fname}</TableCell>
                  <TableCell align="right">{row.lname}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup aria-label="outlined primary button group">
                      <Button
                        color="primary"
                        onClick={() => update_doctor(row.id)}
                      >
                        Edit
                      </Button>
                      <Button color="error" onClick={() => del(row.id)}>
                        Delete!
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> */}
    </>
  );
}
