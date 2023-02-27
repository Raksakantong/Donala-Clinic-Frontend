import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import {
  apiDeleteCustomer,
  apiGet,
  apiGetCustomer,
} from "../../../Service/api";
import Header from "../../../Components/Header/Header";
import "./showCustomer.scss";

import axios from "axios";
import { Button, ButtonGroup } from "@mui/material";

export default function ShowCustomer() {
  const [Customers, setCustomers] = useState([]);
  const [Id, setId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    GetCustomer();
  }, []);
  function GetCustomer() {
    let getData = apiGetCustomer();
    getData.then((res) => {
      console.log(res.data);
      setCustomers(res.data);
    });
  }
  function del(id, e) {
    let idParse = id.toString();
    let ID = {
      number_id: idParse,
    };
    console.log("ID", ID);
    apiDeleteCustomer(ID).then((res) => {
      console.log(res);
      console.log(res.data);
      GetCustomer();
    });
  }
  function update_customer(ID) {
    console.log("number id == ", ID);
    let idParse = ID.toString();
    navigate("/customer/updateCustomer", {
      state: {
        id: idParse,
      },
    });
  }
  function goToAdd() {
    navigate('/customer/AddCustomer')
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCases = Customers.filter((item) =>
    item.number_id.includes(searchTerm)
  );
  // /customer/AddCustomer
  return (
    <>
      <Header />
      <br/>
      <div className="add-customer">
        <button type="" onClick={() => goToAdd()} style={{borderRadius:5}}>เพิ่มข้อมูล</button>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="ค้นหาลูกค้า"
            // inputProps={{ 'aria-label': 'search google maps' }}
            onChange={handleSearch}

          />
          <IconButton type="button" sx={{ p: '10px' }} style={{ borderRadius: 0, background: 'none' }}>
            <SearchIcon color="primary" />
          </IconButton>
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <DirectionsIcon />
          </IconButton> */}
        </Paper>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="caption table">
            {/* <caption>A basic table example with a caption</caption> */}
            <TableHead
              sx={{
                "& th": {
                  color: "#fff",
                  backgroundColor: "#0F3A5D",
                },
              }}
            >
              <TableRow>
                <TableCell>เลขบัตรประจำตัวประชาชน</TableCell>
                <TableCell align="center">ชื่อ</TableCell>
                <TableCell align="center">นามสกุล</TableCell>
                <TableCell align="center">เบอร์โทร</TableCell>
                <TableCell align="center">เพศ</TableCell>
                <TableCell align="center">กรุ๊ปเลือด</TableCell>
                <TableCell align="center">แพ้ยา</TableCell>
                <TableCell align="center">โรคประจำตัว</TableCell>
                <TableCell align="center">หมายเหตุ</TableCell>
                <TableCell align="center">ตัวเลือก</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCases.map((row, index) => (
                <TableRow key={row.number_id}>
                  <TableCell component="th" scope="row">
                    {row.number_id}
                  </TableCell>
                  <TableCell align="center">{row.fname}</TableCell>
                  <TableCell align="center">{row.lname}</TableCell>
                  <TableCell align="center">{row.phone_number}</TableCell>
                  <TableCell align="center">{row.sex}</TableCell>
                  <TableCell align="center">{row.blood}</TableCell>
                  <TableCell align="center">{row.drugAllergy}</TableCell>
                  <TableCell align="center">{row.congenitalDisease}</TableCell>
                  <TableCell align="center">{row.etcNote}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup aria-label="outlined primary button group">
                      {/* <Button onClick={() => UpdateUser(user.id)}>Edit</Button> */}

                      <Button
                        color="primary"
                        onClick={() => update_customer(row.number_id)}
                      >
                        Edit
                      </Button>
                      <Button color="error" onClick={() => del(row.number_id)}>
                        Delete!
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <></>
    </>
  );
}
