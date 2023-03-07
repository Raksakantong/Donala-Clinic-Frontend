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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import user from "../../../Assets/user.png";

import axios from "axios";
import { Button, ButtonGroup } from "@mui/material";

import "./AllEmployees.scss";
import HeaderEmployee from "../../../Components/Header/HeaderEmployee/HeaderEmployee";

export default function AllEmployees() {
    const act = ["ลบ", "แก้ไข"];
    const [Employees, setEmployees] = useState([]);
    const [Id, setId] = useState();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [searchTerm, setSearchTerm] = useState("");

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
    // function del(id, e) {
    //     let idParse = id.toString();
    //     let ID = {
    //         id: idParse,
    //     };
    //     console.log("ID", ID);
    //     axios
    //         .delete("http://localhost:5000/users/del/", { data: ID })
    //         .then((res) => {
    //             console.log(res);
    //             console.log(res.data);

    //             getUsers();
    //         });
    //         handleCloseNavMenu() 
    // }
    // function update_employee(ID) {
    //     let idParse = ID.toString();
    //     navigate("/Employee/update", {
    //         state: {
    //             id: idParse,
    //         },
    //     });
    // }
    // function goToAdd() {
    //     navigate('/Employee/create')
    // }
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCases = Employees.filter((item) =>
        item.number_id.includes(searchTerm)
    );
    return (
        <div >
            <HeaderEmployee />
            <br />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} spacing={1}>

                    <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
                        <Typography variant="h5" fontWeight='bold' color='#fff' sx={{ marginTop: '0px', p: '2px 4px', display: 'flex', }}>
                            พนักงานทั้งหมดของคลินิก
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                        <Paper
                            component="form"
                            sx={{ p: '0px 0px', display: 'flex', alignItems: 'center', width: '100%', marginBottom: '0px', marginTop: '0px' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="ค้นหาOPD"
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
                    </Grid>
                    {/* <Grid item xs={4} sm={4} md={4} xl={2} lg={2}>
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
            </Grid> */}
                </Grid>
                <div style={{ backgroundColor: '#ffff', height: 1, marginTop: 15, marginBottom: 8, width: 'full' }}></div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    </Grid>
                    {filteredCases.map((data) => (
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={data.number_id}>
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
                                        <p>กรุ๊ปเลือด : {data.blood}</p>
                                        <p>ส่วนสูง {data.height} ซม.</p>
                                        <p>น้ำหนัก {data.weight} กก.</p>
                                        <p>เริ่มงาน : {new Date(data.start_date).toLocaleDateString()}</p>
                                        <p>เพศ : {data.sex}</p>
                                    </div>
                                </div>
                                {/* <div className="more-vert">
                                <Box sx={{marginRight:1,display:'flex'}}>
                                    <DeleteForeverTwoToneIcon sx={{ color: 'rgb(207, 207, 207)' }} onClick={() => del(data.id)}/>
                                    <CreateIcon sx={{ color: 'rgb(207, 207, 207)' }} onClick={() => update_employee(data.id)}/>
                                    
                                </Box>

                            </div> */}

                            </div>

                        </Grid>

                    ))}
                </Grid>
                </div>

        </div>
    );
}
