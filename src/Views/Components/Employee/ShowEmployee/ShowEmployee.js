import React, { useState, useEffect } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';

export function ShowEmployee() {
    const [Employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/users').then(res => {
            console.log(res.data);
            setEmployees(res.data)
        })

    },[])
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Employees.map((row) => (
                            <TableRow key={row.number_id}>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
