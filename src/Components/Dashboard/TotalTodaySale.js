import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { apiGetTreatment } from '../../Service/api';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Grid from '@mui/material/Grid';


const TotalTodaySale = () => {

    const [data, setData] = useState([])
    const [date, setDate] = useState()
    const [today, setToday] = useState()
    const [todayRevenue,setTodayRevenue] = useState()

    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {
        await apiGetTreatment().then((res) => {
            setData(res.data)
            console.log(res.data);
            console.log(new Date().getDate())
            const today = new Date();
            const filteredData = res.data.filter(item => {
                const itemDate = new Date(item.date);
                return itemDate.toDateString() === today.toDateString();

            });

            filteredData.map(item => {
                console.log("todayPrices ==", item.price)
                
            });
            const sum = filteredData.reduce((acc, item) => {
                return acc + item.price;
              }, 0);
              const formattedNumber = sum.toLocaleString('en-US');
              setTodayRevenue(formattedNumber)
        })



    }

    return (

        <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
            <MonetizationOnIcon fontSize='large' color='primary' />
            <Box p={1}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>ยอดรายรับวันนี้</Typography>
                <Typography variant="h5">{todayRevenue} บาท</Typography>
            </Box>
        </Paper>


    )
}

export default TotalTodaySale