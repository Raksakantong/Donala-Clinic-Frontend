import React, { useState, useEffect } from 'react'
import { apiGet } from "../../../../Service/api";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import axios from 'axios';
import { Button, ButtonGroup } from '@mui/material';


export function ShowEmployee() {
    const [Employees, setEmployees] = useState([])
    const [Id, setId] = useState()
    useEffect(() => {
        getUsers()
    }, [])
    async function getUsers() {
        const res = await apiGet()
        console.log("res",res.data);
        setEmployees(res.data)
    }
    function del(id, e) {
        let idParse = id.toString()
        let ID = {
            "id": idParse
        }
        console.log("ID",ID);
        axios.delete('http://localhost:5000/users/del/', {data:ID})
            .then(res => {
                console.log(res);
                console.log(res.data);
                getUsers();
            })
    }
    return (
        <>
            <TableContainer component={Paper}>
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
                    </TableHead>
                    <TableBody>
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
                                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                                        {/* <Button onClick={() => UpdateUser(user.id)}>Edit</Button> */}
                                        <Button onClick={() => del(row.id)}>Delete!</Button>
                                    </ButtonGroup>
                                </TableCell>
                        
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <>
                {Id}
            </>
        </>
    )
}
