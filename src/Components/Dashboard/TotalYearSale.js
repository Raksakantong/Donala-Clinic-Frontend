import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { apiGetTreatment } from '../../Service/api';
import SavingsIcon from '@mui/icons-material/Savings';
import Grid from '@mui/material/Grid';

const TotalYearSale = () => {
  const [data, setData] = useState([])
  const [yearRevenue, setYearRevenue] = useState()

  useEffect(() => {
    getData()

  }, [])
  const getData = async () => {
    await apiGetTreatment().then((res) => {
      setData(res.data)
      console.log(res.data);
      const currentYear = new Date().getFullYear(); // หาปีปัจจุบัน

      const totalPrice = res.data
        .filter(item =>{
          return new Date(item.date).getFullYear() === currentYear
        }) // กรองเฉพาะข้อมูลในปีปัจจุบัน
        
      console.log("totalPrice ===",totalPrice );

      const pricesThisYear = totalPrice.map(item => item.price);
      console.log("pricesThisYear",pricesThisYear);
    // หาผลรวมของ price ทั้งหมด
    const totalPriceThisYear = pricesThisYear.reduce((total, currentPrice) => total + currentPrice, 0);
    console.log("totalPriceThisYear ===",totalPriceThisYear);

      const formattedNumber = totalPriceThisYear.toLocaleString('en-US');
      setYearRevenue(formattedNumber)
    })



  }
  return (

    <Paper sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
      <SavingsIcon fontSize='large' color='success' />
      <Box p={1}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>ยอดรายรับปีนี้</Typography>
        <Typography variant="h5">{yearRevenue} บาท</Typography>
      </Box>
    </Paper>


  )
}

export default TotalYearSale