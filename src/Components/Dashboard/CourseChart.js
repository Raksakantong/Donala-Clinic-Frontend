import React from 'react';
import { Pie,Doughnut } from 'react-chartjs-2';
import  Paper  from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';

const CourseChart = () => {
    const data = {
        labels: ['คาง', 'จมูก', 'ตา', 'โบท็อก', 'ฉีดผิวขาว', 'เคสแก้จมูก', 'ตัดปีกจมูก'],
        datasets: [
          {
            label: 'จำนวนเคส',
            data: [25, 80, 20, 25, 30, 10, 15],
            backgroundColor: [
              'rgba(255, 99, 132, 5)',
              'rgba(54, 162, 235, 5)',
              'rgba(250, 190, 96, 10)',
              'rgba(75, 192, 192, 10)',
              'rgba(220, 162, 235, 5)',
              'rgba(130, 206, 86, 10)',
              'rgba(210, 80,50, 10)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text:"รายงานยอดตามประเภทคอร์ส",
            font: {
                size: 20,
              },
          },
        },
      };

  return (
    <Paper elevation={2} sx={{ display: 'flex',flexDirection:'column', alignItems: 'center', gap: 2, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
      <Doughnut data={data} options={options}/>
      </Paper>
  );
};

export default CourseChart;