import React from 'react'
// import { totalTodaySale,totalMonthSale,totalYearSale } from "../../Components/Dashboard/";
import TotalTodaySale from '../../Components/Dashboard/TotalTodaySale';
import TotalMonthSale from '../../Components/Dashboard/TotalMonthSale';
import TotalYearSale from '../../Components/Dashboard/TotalYearSale';
import Grid from '@mui/material/Grid';
import TotalCustomer from '../../Components/Dashboard/TotalCustomer';
import Typography from "@mui/material/Typography";
import StaticChart from '../../Components/Dashboard/StaticChart';

const Dashboard = () => {
    return (
        <div style={{margin:30}}>
            <div><Typography variant='h3'sx={{fontWeight:'bold'}}>Dashboard</Typography><div style={{backgroundColor:'#ffff',height:1,marginTop:8,marginBottom:8}}></div></div>
            
            <Grid container rowSpacing={3} spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                    <TotalTodaySale />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                    <TotalMonthSale />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                    <TotalYearSale />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                    <TotalCustomer />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8} >
                    <StaticChart />
                </Grid>
                
                
                
            </Grid>

        </div>

    )
}

export default Dashboard