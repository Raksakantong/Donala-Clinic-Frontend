import { Bar, Line, Doughnut } from 'react-chartjs-2';
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

const CourseChart = () => {
  const [data, setData] = useState([])
  const [allCase, setAllCase] = useState()
  const [chart, setChart] = useState()
  const [year, setYear] = useState(String(new Date().getFullYear()))
  const [select, setSelect] = useState()

  useEffect(() => {
    getData()

  }, [year]) //เมื่อค่า year มีการเปลี่ยนแปลง ให้รันฟังก์ชัน ที่อยู่ใน useEffect 

  const getData = async () => {
    await apiGetTreatment().then((res) => {
      setData(res.data)
      console.log(res.data);
      console.log(new Date().getDate())
      // นับเคสทั้งหมดจากข้อมูลที่ดึงมา
      const totalCases = res.data.length;
      console.log("totalCases ===", totalCases);
      setAllCase(totalCases)

      const selectedYear =
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>   <FormControl sx={{ m: 1, minWidth: 100, height: 10, marginBottom: 6 }}>
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
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>

        </FormControl>
        </Box>

      setSelect(selectedYear)

      const filteredData = res.data.filter(item => item.date.startsWith(year));

      const result = filteredData.reduce((accumulator, item) => {
        const { case_name } = item;
        accumulator[case_name] = (accumulator[case_name] || 0) + 1;
        return accumulator;
      }, {});

      console.log("case name === ", result); // จะแสดงผลลัพธ์เป็น Object ที่มี key เป็นชื่อ case_name และ value เป็นจำนวนของ case_name ในปี 2022
      const data = {
        labels: ["ปาก",'คาง', 'เสริมจมูก', 'ตา', 'โบท็อก', 'ฉีดผิวขาว', 'เคสแก้จมูก', 'ตัดปีกจมูก'],
        datasets: [
          {
            label: 'จำนวนเคส',
            data: [result.ปาก?result.ปาก:0,result.คาง?result.คาง:0, result.เสริมจมูก?result.เสริมจมูก:0, result.ตา?result.ตา:0, result.โบท็อก?result.โบท็อก:0, result.ฉีดผิวขาว?result.ฉีดผิวขาว:0, result.เคสแก้จมูก?result.เคสแก้จมูก:0, result.ตัดปีกจมูก?result.ตัดปีกจมูก:0],
            backgroundColor: [
              'rgba(250, 100, 52, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(250, 190, 96, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(220, 162, 235, 0.8)',
              'rgba(130, 206, 86, 0.8)',
              'rgba(110, 120,250, 0.8)',
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
            text: "รายงานยอดตามประเภทคอร์ส",
            font: {
              size: 20,
            },
          },
        },
      };

      const doughnutChart = <Doughnut data={data} options={options} />
      setChart(doughnutChart)

    })
  }

  return (
    <Paper sx={{ alignItems: 'center', gap: 0, paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 2 }}>
      {select}
      {chart}
    </Paper>
  );
};

export default CourseChart;