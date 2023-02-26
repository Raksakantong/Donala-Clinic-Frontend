import React from 'react';
import { Pie,Doughnut,Line } from 'react-chartjs-2';
import  Paper  from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';

const TrendChart = () => {
    const data = {
        labels: ['คาง', 'จมูก', 'ตา', 'โบท็อก', 'ฉีดผิวขาว', 'เคสแก้จมูก', 'ตัดปีกจมูก'],
        datasets: [
          {
            label: 'เคส',
            data: [25, 80, 20, 25, 30, 10, 15],
            fill: true,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
            tension: 0.1,
            // borderWidth: 1,
          },
        ],
      };
    
      const options = {
        scales: {
            y: 
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            
          },
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
      <Line data={data} options={options}/>
      </Paper>
  );
};

export default TrendChart ;