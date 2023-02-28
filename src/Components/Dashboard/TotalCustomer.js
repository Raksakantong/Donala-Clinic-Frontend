import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { apiGetTreatment } from '../../Service/api';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Grid from '@mui/material/Grid';

const TotalCustomer = () => {

  const [data, setData] = useState([])
  const [allCase, setAllCase] = useState()

  useEffect(() => {
    getData()

  }, [])

  const getData = async () => {
    await apiGetTreatment().then((res) => {
      setData(res.data)
      console.log(res.data);
      console.log(new Date().getDate())
      // นับเคสทั้งหมดจากข้อมูลที่ดึงมา
      const totalCases = res.data.length;
      console.log("totalCases ===",totalCases);
      setAllCase(totalCases)


    })
  }
  return (

    <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
      <GroupAddIcon fontSize='large' color='primary' />
      <Box p={1}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>จำนวนเคสทั้งหมด</Typography>
        <Typography variant="h5">{allCase} เคส</Typography>
      </Box>
    </Paper>

  )
}

export default TotalCustomer