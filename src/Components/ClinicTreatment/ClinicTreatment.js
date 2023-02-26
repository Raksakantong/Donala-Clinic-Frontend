import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  apiDeleteCustomer,
  apiGetTreatment,
  apiGetCustomer,
} from "../../Service/api";
// import HeaderDoctor from "../../../Components/Header/HeaderDoctor";
import "./ClinicTreatment.scss";

import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
export default function ClinicTreatmentO() {
  const [treatment, setTreatment] = useState([]);
  const [Id, setId] = useState();
  const [date, setDate] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  
  const navigate = useNavigate();
  useEffect(() => {
    GetTreatment();
  }, []);

  function GetTreatment() {
    let getData = apiGetTreatment();
    getData.then((res) => {
      console.log("GetTreatment() ==>", res.data);
      console.log("GetTreatment date ==>", res.data.map((m) => m.date));
      setTreatment(res.data);
      setDate(res.data.map((m) => m.date))
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
      // GetCustomer();
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
    navigate("/customer/AddCustomer");
  }
  function showDate() {
    console.log("วันที่ทั้งหมด ===> ", date);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCases = treatment.filter((item) =>
    item.customer_id.includes(searchTerm)
  );
  // /customer/AddCustomer
  return (
    <>
      <br />
      {/* date:{date} */}

      <div className="add-customer">
        {/* <button type="" onClick={() => goToAdd()}>
          เพิ่มข้อมูล
        </button> */}
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
          <IconButton type="button" sx={{ p: '10px' }}style={{borderRadius: 0,background:'none'}}>
            <SearchIcon color="primary"/>
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
                <TableCell>ลำดับ</TableCell>
                <TableCell align="center">ชื่อเคส</TableCell>
                <TableCell align="center">เลขบัตรประชาชนของลูกค้า</TableCell>
                <TableCell align="center">รายละเอียด</TableCell>
                <TableCell align="center">ราคา</TableCell>
                <TableCell align="center">วันที่ทำ</TableCell>
                {/* <TableCell align="center">ตัวเลือก</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCases.map((row, index) => (
                <TableRow key={row.case_id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.case_name}</TableCell>
                  <TableCell align="center">{row.customer_id}</TableCell>
                  <TableCell align="center">{row.case_detail}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>

                  {/* <TableCell align="center"> */}
                  {/* <ButtonGroup aria-label="outlined primary button group"> */}
                  {/* <Button onClick={() => UpdateUser(user.id)}>Edit</Button> */}
                  {/* 
                       <Button
                    color="primary"
                    onClick={ showDate()}
                  >
                    Edit
                  </Button>
                      <Button color="error" onClick={() => del(row.number_id)}>
                        Delete!
                      </Button>
                    </ButtonGroup> */}
                  {/* </TableCell> */}

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <>
      </>
    </>
  );
}
