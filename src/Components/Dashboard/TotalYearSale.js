import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import SavingsIcon from '@mui/icons-material/Savings';
import Grid from '@mui/material/Grid';

const TotalYearSale = () => {
  return (
    
    <Paper  sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1,paddingRight:1,paddingBottom:1,paddingLeft:2 }}>
        <SavingsIcon fontSize='large' color='success' />
        <Box p={1}>
            <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>ยอดรายรับปีนี้</Typography>
            <Typography variant="h5">60000</Typography>
        </Box>
    </Paper>

    
  )
}

export default TotalYearSale