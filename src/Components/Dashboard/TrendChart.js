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



Chart.register(CategoryScale);

const TrendChart = () => {
  const [data, setData] = useState([])
  const [allCase, setAllCase] = useState()
  const [lines, setLines] = useState()
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
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>

        </FormControl>
        </Box>

      setSelect(selectedYear)

      const filteredData = res.data.filter(item => item.date.includes(year)); // กรองข้อมูลในปีเลือกจาก dropdown
      const result = filteredData.reduce((acc, curr) => {
        if (acc[curr.case_name]) { // ถ้ามี case_name นี้อยู่แล้วให้เพิ่มราคารวมเข้าไป
          acc[curr.case_name] += curr.price;
        } else { // ถ้ายังไม่มีให้สร้าง case_name นี้และให้ราคารวมเท่ากับราคาของรายการนี้
          acc[curr.case_name] = curr.price;
        }
        return acc;
      }, {}); // ให้เริ่มต้นด้วยออบเจกต์ว่าง

      console.log("result ==", result); // แสดงผลลัพธ์

      const data1 = {
        labels: ['ปาก', 'คาง', 'จมูก', 'ตา', 'โบท็อก', 'ฉีดผิวขาว', 'เคสแก้จมูก', 'ตัดปีกจมูก'],
        datasets: [
          {
            label: 'ยอดรายรับ',
            // data: [month1,month2,month3,month4,month5,month6,month7,month8,month9,month10,month11,month12],
            data: [
              result.ปาก ? result.ปาก : 0, result.คาง ? result.คาง : 0, result.จมูก ? result.จมูก : 0, result.ตา ? result.ตา : 0, result.โบท็อก ? result.โบท็อก : 0, result.ฉีดผิวขาว ? result.ฉีดผิวขาว : 0, result.เคสแก้จมูก ? result.เคสแก้จมูก : 0, result.ตัดปีกจมูก ? result.ตัดปีกจมูก : 0,
            ],
            fill: true,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(5,220,90,0.7)',
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
            text: "สถิติยอดรายรับรวมตามเคส",
            font: {
              size: 20,
            },
          },
        },
      };

      const LineChart = <Bar data={data1} options={options} />
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

export default TrendChart;