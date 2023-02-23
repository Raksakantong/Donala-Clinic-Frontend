import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import  Paper  from '@mui/material/Paper';


Chart.register(CategoryScale);

const StaticChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 8],
                backgroundColor: 'rgba(218,165,32,1)',
                borderColor: 'rgba(255,165,0, 1)',
                borderWidth: 1,
            },
        ],
    };
    const options = {
        scales: {
            y: 
                {
                    type: 'linear',
                    ticks: {
                        beginAtZero: true,
                    },
                },
            
            x: 
                {
                    type: 'category',
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                },
            
        },
    };
    return (
        <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
            <Bar data={data} options={options} />
        </Paper>
    );
};

export default StaticChart;







//    <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1,paddingRight:1,paddingBottom:1,paddingLeft:2 }}>
{/* <div>StaticChart</div>
<Bar data={data} options={options} />
</Paper> */}