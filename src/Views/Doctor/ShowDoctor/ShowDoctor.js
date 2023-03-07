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

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { apiGet } from "../../../Service/api";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import CreateIcon from '@mui/icons-material/Create';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ShowDoctor() {
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let getData = apiGetDoctors();
    getData.then((res) => {
      console.log("apiGetDoctors ===>", res.data);
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
      console.log("", res.data);
      getData();
      handleClose()
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
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCases = doctors.filter((item) =>
    item.fname.includes(searchTerm)
  );
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header /><br />

      <div style={{ margin: 20 }}>

        <div >

          <Grid container rowSpacing={1} spacing={1}>
            <Grid item xs={12} sm={12} md={12} xl={7} lg={7}>
              <Typography variant="h5" fontWeight='bold' color='#fff' sx={{ marginTop: '0px', p: '2px 4px', display: 'flex', }}>
                ข้อมูลแพทย์
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8} md={8} xl={3} lg={3}>
              <Paper
                component="form"
                sx={{ p: '0px 0px', display: 'flex', alignItems: 'center', width: '100%', marginBottom: '0px', marginTop: '0px' }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="ค้นหาแพทย์"
                  // inputProps={{ 'aria-label': 'search google maps' }}
                  onChange={handleSearch}

                />
                <IconButton type="button" sx={{ p: '10px' }} style={{ borderRadius: 0, background: 'none' }}>
                  <SearchIcon color="primary" />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} xl={2} lg={2}>
              <Typography variant="h5" fontWeight='bold' color='#fff' sx={{ marginTop: '-2px', p: '2px 4px', display: 'flex', justifyContent: 'end' }}><button type="" onClick={() => goToAdd()}
                style={{
                  borderRadius: 5,
                  margin: 0,
                  borderRadius: '5px',
                  border: 0,
                  padding: '0px',
                  color: '#fff',
                  backgroundColor: '#a47600',
                  alignSelf: 'end', width: '100%', height: 45
                }}>เพิ่มข้อมูล</button></Typography>
            </Grid>
          </Grid>
        </div>
        <div style={{ backgroundColor: '#ffff', height: 1, marginTop: 15, marginBottom: 8, width: 'full' }}></div>
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
                  <TableCell align="center">ชื่อ</TableCell>
                  <TableCell align="center">นามสกุล</TableCell>
                  <TableCell align="center">ความเชี่ยวชาญ</TableCell>
                  <TableCell align="center">ตัวเลือก</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCases.map((row, index) => (
                  <TableRow key={row.number_id}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.fname}</TableCell>
                    <TableCell align="center">{row.lname}</TableCell>
                    <TableCell align="center">{row.specialist}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup aria-label="outlined primary button group">
                        {/* <Button onClick={() => UpdateUser(user.id)}>Edit</Button>  */}

                        <Button
                          color="primary"
                          onClick={() => update_doctor(row.number_id)}
                        >
                          Edit
                        </Button>
                        <Button color="error" onClick={() => handleClickOpen()}>
                          Delete!
                        </Button>
                      </ButtonGroup>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"แจ้งเตือนการลบข้อมูล !"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            กด "ยืนยันการลบ" เพื่อลบข้อมูล ยืนยันที่จะลบข้อมูลหรือไม่? 
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>ยกเลิก</Button>
                          <Button onClick={() =>del(row.number_id)} autoFocus>
                            ยืนยันการลบ
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </TableCell>
                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </>
  );
}
