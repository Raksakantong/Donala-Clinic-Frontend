import React from 'react'
import HeaderDoctor from "../../../Components/Header/HeaderDoctor/HeaderDoctor";
import CourseChart from '../../../Components/Dashboard/CourseChart';
import { Paper } from '@mui/material';

export default function HomeDoctor() {
  return (
    <>
      <HeaderDoctor />
      <Paper sx={{display:'flex',flexDirection:'column',width:'600px',marginTop:2,marginLeft:'auto',marginRight:'auto'}}>
        <div style={{padding:'20px'}}>
          <CourseChart />
        </div></Paper>
      
    </>

  )
}
