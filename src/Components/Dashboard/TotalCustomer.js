import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Grid from '@mui/material/Grid';

const TotalCustomer = () => {
  return (
   
    <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1,paddingRight:1,paddingBottom:1,paddingLeft:2 }}>
    <GroupAddIcon fontSize='large' color='primary' />
    <Box p={1}>
        <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>จำนวนลูกค้า</Typography>
        <Typography variant="h5">60000</Typography>
    </Box>
</Paper>

  )
}

export default TotalCustomer