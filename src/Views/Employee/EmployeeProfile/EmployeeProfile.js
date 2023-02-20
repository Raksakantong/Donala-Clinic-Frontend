import React, { useEffect, useState } from 'react'
import "./EmployeeProfile.scss";
import user from "../../../Assets/user.png";
import { apiGetSomeUser } from '../../../Service/api';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import CreditScore from '@mui/icons-material/CreditScore';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderEmployee from '../../../Components/Header/HeaderEmployee/HeaderEmployee';
import Cookies from 'js-cookie';

const EmployeeProfile = () => {

  const [data, setData] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const [cookies,setCookies] = useState()

  useEffect(() => {  
    getCookies()
  }
  
   
    
    , [])


   const getCookies = async() => {
    // let res = JSON.stringify(Cookies.get('data'));
    const json = await JSON.parse(Cookies.get('data'));
    await setCookies(json);
    console.log("data cookies ===>", json);
    await getProfile()
  }
  async function getProfile() {
    const json = await JSON.parse(Cookies.get('data'));
    await apiGetSomeUser(json.id).then((res) => {
      setData(res.data)
      console.log('ข้อมูลพนักงาน ===> ', res.data[0]);
    })
  }

  function update_employee(ID) {
    let idParse = ID.toString();
    navigate("/homeEmployee/profile/edit", {
      state: {
        id: idParse,
      },
    });
  }

  return (
    <>
      <HeaderEmployee />
      <div className='card-profile'>
        <h2>ข้อมูลพนักงาน</h2>
        <div className='profile'>
          <div className='image'>
            <img src={user} alt="" />
          </div>
          {
            data.map((d, index) => {
              return (

                <Grid container sx={{ marginLeft: 'auto', marginRight: 'auto', width: 0.9, marginBottom: 5 }} key={index} >
                  <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{ marginLeft: 'auto', marginRight: 'auto', width: 0.9 }}>
                    <div className='detail'>
                      <h4>เลขบัตรประจำตัวประชาชน : {d.number_id}</h4>
                      <h4>ชื่อ : {d.fname}</h4>
                      <h4>นามสกุล : {d.lname}</h4>
                      <h4>วันเริ่มงาน : {d.start_date}</h4>
                      <h4>วันเกิด : {d.date_of_birth}</h4>
                      <h4>อายุ : {d.age}</h4>
                      <h4>เพศ : {d.sex}</h4>
                      <h4>ส่วนสูง : {d.height}</h4>
                      <h4>น้ำหนัก : {d.weight}</h4>
                      <h4>กรุ๊ปเลือด : {d.blood}</h4>
                    </div>
                    <>
                      <Typography align='center' margin={1}>
                        <Button variant="contained" startIcon={<CreditScore />} color={'info'} onClick={() => update_employee(d.number_id)}>
                          แก้ไขข้อมูล
                        </Button>
                      </Typography>

                    </>
                  </Grid>

                </Grid>
              );
            })
          }





        </div>
      </div>
    </>


  )
}

export default EmployeeProfile