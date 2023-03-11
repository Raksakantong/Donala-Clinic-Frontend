
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';


import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { apiGetTreatment } from '../../Service/api';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { margin } from '@mui/system';


Chart.register(CategoryScale);

const StaticChart = () => {

    const [data, setData] = useState([])
    const [allCase, setAllCase] = useState()
    const [lines, setLines] = useState()
    const [year, setYear] = useState(new Date().getFullYear())
    const [select, setSelect] = useState()

    useEffect(() => {
        getData()

    }, [year])

    const getData = async () => {
        await apiGetTreatment().then((res) => {
            setData(res.data)
            console.log(res.data);
            console.log(new Date().getDate())
            // นับเคสทั้งหมดจากข้อมูลที่ดึงมา
            const totalCases = res.data.length;
            console.log("totalCases s ===", totalCases);
            setAllCase(totalCases)
            const selectedYear =
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>   <FormControl sx={{ m: 1, minWidth: 100, height: 10, marginBottom: 4 }}>
                    <FormHelperText>เลือกปี</FormHelperText>
                    <Select
                        sx={{ height: 30, width: 90 }}
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    // sx={{width:3}}
                    >
                        {/* <MenuItem value="">
                            {year}
                        </MenuItem> */}
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                    </Select>

                </FormControl>
                </Box>

            setSelect(selectedYear)

            const filteredData = res.data.filter(item => {
                const _year = new Date(item.date).getFullYear();
                return _year === year;
            });
            console.log("ปี 2022 ===", filteredData);

            const monthlyPrices = filteredData.reduce((acc, cur) => {
                const date = new Date(cur.date);
                const monthYear = date.toLocaleDateString("en-US", {
                    //   year: "numeric",
                    month: "short",
                });

                if (!acc[monthYear]) {
                    acc[monthYear] = 0;
                }

                acc[monthYear] += cur.price;
                return acc;
            }, {});

            console.log("monthlyPrices ===", monthlyPrices);
            //   const revenue =  monthlyPrices

            //   console.log("month1 ===",month1);
            const data1 = {
                labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                datasets: [
                    {
                        label: 'ยอดรายรับ',
                        // data: [month1,month2,month3,month4,month5,month6,month7,month8,month9,month10,month11,month12],
                        data: [monthlyPrices.Jan ? monthlyPrices.Jan : 0, monthlyPrices.Feb ? monthlyPrices.Feb : 0, monthlyPrices.Mar ? monthlyPrices.Mar : 0, monthlyPrices.Apr ? monthlyPrices.Apr : 0, monthlyPrices.May ? monthlyPrices.May : 0, monthlyPrices.Jun ? monthlyPrices.Jun : 0, monthlyPrices.Jul ? monthlyPrices.Jul : 0, monthlyPrices.Aug ? monthlyPrices.Aug : 0, monthlyPrices.Sep ? monthlyPrices.Sep : 0, monthlyPrices.Oct ? monthlyPrices.Oct : 0, monthlyPrices.Nov ? monthlyPrices.Nov : 0, monthlyPrices.Dec ? monthlyPrices.Dec : 0],
                        fill: true,
                        borderColor: 'rgba(75,192,192,1)',
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        tension: 0.1,
                        // borderWidth: 1,
                    },
                ],
            };
            const options = {
                responsive: true,
                // aspectRatio:,
                scales: {
                    y:
                    {
                        ticks: {
                            beginAtZero: true,
                            stepSize: 5000

                        },
                    },

                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end'
                    },
                    title: {
                        display: true,
                        text: "สถิติยอดรายได้ตามเดือน",
                        font: {
                            size: 20,
                        },
                    },
                },
            };

            const LineChart = <Line data={data1} options={options} />
            setLines(LineChart)

        })
    }






    return (
        <Paper sx={{ alignItems: 'center', gap: 0, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
            {select}
            {lines}
        </Paper>
    );
};

export default StaticChart;







//    <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: 1,paddingRight:1,paddingBottom:1,paddingLeft:2 }}>
{/* <div>StaticChart</div>
<Bar data={data} options={options} />
</Paper> */}


    // const data = {
    //     // labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    //     datasets: [
    //         {
    //             label: 'ยอดรายรับ',
    //             data: [12, 19, 3, 5, 2, 3, 8],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.8)',
    //                 'rgba(54, 162, 235, 0.8)',
    //                 'rgba(250, 190, 96, 0.8)',
    //                 'rgba(75, 192, 192, 0.8)',
    //                 'rgba(220, 162, 235, 0.8)',
    //                 'rgba(130, 206, 86, 0.8)',
    //                 'rgba(210, 80, 50, 0.8)',
    //                 'rgba(210, 80, 50, 0.8)',
    //               ],
    //             borderWidth: 0,

    //         },
    //     ],
    // };
    // const options = {
    //     // responsive: true,
    //     aspectRatio:2,
    //     maintainAspectRatio:true,
    //     plugins: {
    //     //   legend: {
    //     //     position: 'top',
    //     //     align:'end'

    //     //   },
    //       title: {
    //         display: true,
    //         text:"รายงานยอดตามประเภทคอร์ส",
    //         font: {
    //             size: 20,
    //           },
    //       },
    //     },
    //     scales: {
    //         y:
    //             {
    //                 type: 'linear',
    //                 ticks: {
    //                     beginAtZero: true,
    //                 },
    //             },

    //         x:
    //             {
    //                 type: 'category',
    //                 labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    //             },

    //     },
    // };