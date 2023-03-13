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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventIcon from '@mui/icons-material/Event';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import TransgenderIcon from '@mui/icons-material/Transgender';
import HeightIcon from '@mui/icons-material/Height';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const EmployeeProfile = () => {

  const [data, setData] = useState([])
  const navigate = useNavigate()
  // const location = useLocation()
  // const [cookies,setCookies] = useState()

  useEffect(() => {  
    getProfile()
  }
  
   

    , [])


  //  const getCookies = async() => {
  //   // let res = JSON.stringify(Cookies.get('data'));
  //   const json = await JSON.parse(Cookies.get('data'));
  //   // await setCookies(json);
  //   console.log("data cookies ===>", json);
  //   await getProfile()
  // }
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
                      <h4><FingerprintIcon/>เลขบัตรประจำตัวประชาชน : {d.number_id}</h4>
                      <h4><AccountCircleIcon /> ชื่อ : {d.fname} {d.lname}</h4>
                      {/* <h4>นามสกุล : </h4> */}
                      <h4><EventAvailableIcon />วันเริ่มงาน : {new Date(d.start_date).toLocaleDateString()}</h4>
                      <h4><EventIcon/>วันเกิด : {new Date(d.date_of_birth).toLocaleDateString()}</h4>
                      <h4><LensBlurIcon/>อายุ : {d.age}</h4>
                      <h4><TransgenderIcon/>เพศ : {d.sex}</h4>
                      <h4><HeightIcon/>ส่วนสูง : {d.height}</h4>
                      <h4><MonitorWeightIcon/>น้ำหนัก : {d.weight}</h4>
                      <h4><BloodtypeIcon/>กรุ๊ปเลือด : {d.blood}</h4>
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