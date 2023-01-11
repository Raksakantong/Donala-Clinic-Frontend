import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
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

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import user from "../../../Assets/user.png";

import axios from "axios";
import { Button, ButtonGroup } from "@mui/material";

import "./ShowEmployee.scss";
import Header from "../../../Components/Header/Header";

export function ShowEmployee() {
    const act = ["ลบ", "แก้ไข"];
    const [Employees, setEmployees] = useState([]);
    const [Id, setId] = useState();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(true);
    };
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        let getData = apiGet();
        getData.then((res) => {
            console.log(res.data);
            setEmployees(res.data);
        });
        // axios.get('http://localhost:5000/users').then(res => {
        //     console.log(res.data);
        //
        // })
    }
    function del(id, e) {
        let idParse = id.toString();
        let ID = {
            id: idParse,
        };
        console.log("ID", ID);
        axios
            .delete("http://localhost:5000/users/del/", { data: ID })
            .then((res) => {
                console.log(res);
                console.log(res.data);

                getUsers();
            });
            handleCloseNavMenu() 
    }
    function update_employee(ID) {
        let idParse = ID.toString();
        navigate("/Employee/update", {
            state: {
                id: idParse,
            },
        });
    }
    function goToAdd() {
        navigate('/Employee/create')
    }
    return (
        <>
            {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>เลขบัตรประจำตัวประชาชน</TableCell>
              <TableCell align="right">ชื่อ</TableCell>
              <TableCell align="right">นามสกุล</TableCell>
              <TableCell align="right">อายุ</TableCell>
              <TableCell align="right">กรุ๊ปเลือด</TableCell>
              <TableCell align="right">ส่วนสูง</TableCell>
              <TableCell align="right">น้ำหนัก</TableCell>
              <TableCell align="right">วันเริ่มงาน</TableCell>
              <TableCell align="right">วันเกิด</TableCell>
              <TableCell align="right">เพศ</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead> */}
            {/* <TableBody>
            {Employees.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.number_id}
                </TableCell>
                <TableCell align="right">{row.fname}</TableCell>
                <TableCell align="right">{row.lname}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.blood}</TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.start_date}</TableCell>
                <TableCell align="right">{row.date_of_birth}</TableCell>
                <TableCell align="right">{row.sex}</TableCell>
                <TableCell align="center">
                  <ButtonGroup aria-label="outlined primary button group"> */}
            {/* <Button onClick={() => UpdateUser(user.id)}>Edit</Button> */}

            {/* <Button
                      color="primary"
                      onClick={() => update_employee(row.id)}
                    >
                      Edit
                    </Button>
                    <Button color="error" onClick={() => del(row.id)}>
                      Delete!
                    </Button> */}
            {/* </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <>{Id}</> */}

            {/* card employee */}
            <Header />
            <br/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} >
                    <div className="add-employee"> 
                        <button type="" onClick={()=>goToAdd()}>เพิ่มข้อมูล</button>
                    </div>
                </Grid>
                {Employees.map((data) => (
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                        <div className="employee-card">

                            <div className="employee-img">
                                <img src={user} alt="" />
                            </div>
                            <div className="employee-detail">
                                <h4>ID : {data.number_id}</h4>
                                <div className="details">
                                    <p>
                                        ชื่อ {data.fname} {data.lname}
                                    </p>
                                    <p>อายุ {data.age} ปี</p>
                                    <p>กรุ๊ปเลือด : B</p>
                                    <p>ส่วนสูง {data.height} ซม.</p>
                                    <p>น้ำหนัก {data.weight} กก.</p>
                                    <p>เริ่มงาน : {data.start_date}</p>
                                    <p>เพศ : {data.sex}</p>
                                </div>
                            </div>
                            <div className="more-vert">
                                <Box sx={{marginRight:1,display:'flex'}}>
                                    <DeleteForeverTwoToneIcon sx={{ color: 'rgb(207, 207, 207)' }} onClick={() => del(data.id)}/>
                                    <CreateIcon sx={{ color: 'rgb(207, 207, 207)' }} onClick={() => update_employee(data.id)}/>
                                    
                                </Box>

                            </div>

                        </div>

                    </Grid>
                
                ))}
            </Grid>
        </>
    );
}
