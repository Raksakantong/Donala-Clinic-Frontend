import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Grid from '@mui/material/Grid';
import { apiGetTreatment } from '../../Service/api';


const TotalMonthSale = () => {
    const [data, setData] = useState([])
    const [monthRevenue, setMonthRevenue] = useState()

    useEffect(() => {
        getData()

    }, [])
    const getData = async () => {
        await apiGetTreatment().then((res) => {
            setData(res.data)
            console.log(res.data);
            // หาเดือนปัจจุบันและปี
            const today = new Date();
            const thisMonth = today.getMonth() + 1;
            const thisYear = today.getFullYear();

            console.log(`${thisMonth}-${thisYear}`)

            // หาเดือนที่ตรงกับเดือนปัจจุบันโดยกรองจากข้อมูลที่ดึงมาจากฐานข้อมูล
            const filteredData = res.data.filter(item => {
                const itemDate = new Date(item.date);
                const itemMonth = itemDate.getMonth() + 1;
                const itemYear = itemDate.getFullYear();
                return itemMonth === thisMonth && itemYear === thisYear;
            });
            console.log('filteredData ===',filteredData);

            
            filteredData.map(item => {
                console.log("monthPrices ==", item.price)
                
            });

            const pricesThisMonth = filteredData.map(item => item.price);
            console.log("pricesThisMonth ===",pricesThisMonth);

            const totalPriceThisMonth = pricesThisMonth.reduce((total, currentPrice) => total + currentPrice, 0);
            const formattedNumber = totalPriceThisMonth.toLocaleString('en-US');
            setMonthRevenue(formattedNumber)
        })



    }
    return (

        <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
            <AccountBalanceWalletIcon fontSize='large' color='warning' />
            <Box p={1}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>ยอดรายรับเดือนนี้</Typography>
                <Typography variant="h5">{monthRevenue} บาท</Typography>
            </Box>
        </Paper>




    )
}

export default TotalMonthSale