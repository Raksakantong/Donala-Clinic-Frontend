import React, { useEffect, useState } from 'react'
import "../EmployeeProfile.scss";
import user from "../../../../Assets/user.png";
import { apiUpdate, apiGetSomeUser } from '../../../../Service/api';
import Grid from '@mui/material/Grid';
import { Button, Typography, TextField } from '@mui/material';
import CreditScore from '@mui/icons-material/CreditScore';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderEmployee from '../../../../Components/Header/HeaderEmployee/HeaderEmployee';
// import CreditScore from '@mui/icons-material/CreditScore';

export default function EmployeesEdit() {
    const [data, setData] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [StartDate, setStartDate] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood, setBlood] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getProfile()
            console.log("location.state.id ==== ", location.state.id)
    }
        ,
        []);



    function getProfile() {
        apiGetSomeUser(location.state.id).then((res) => {
            setData(res.data);
            setFname(res.data[0].fname)
            setLname(res.data[0].lname)
            setStartDate(res.data[0].start_date)
            setDateOfBirth(res.data[0].date_of_birth)
            setAge(res.data[0].age)
            setSex(res.data[0].sex)
            setHeight(res.data[0].height)
            setWeight(res.data[0].weight)
            setBlood(res.data[0].blood)
            console.log('ข้อมูลพนักงาน ===> ', res.data[0].fname);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            fname: fname,
            lname: lname,
            start_date: StartDate,
            date_of_birth: dateOfBirth,
            age: age,
            sex: sex,
            height: height,
            weight: weight,
            blood: blood,
            number_id: location.state.id,

        };
        console.log("data : ", data);
        apiUpdate(data).then(function (res) {
            alert(res.data);
            if (res["status"] === 200) {
                // window.location.href = '/';
                navigate("/homeEmployee/profile");
                console.log("!!!!!!!!!!");
            }
            console.log(res.data);
        });
    };

    return (
        <>
            <HeaderEmployee />
            <div className='card-profile'>
                <h2>ข้อมูลพนักงาน</h2>
                <div className='profile'>
                    <div className='image'>
                        <img src={user} alt="" />
                    </div>
                    {data.map((d, index) => {
                        return (

                            <Grid container sx={{ marginLeft: 'auto', marginRight: 'auto', width: 0.9, marginBottom: 5 }} key={index}>
                                <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{ marginLeft: 'auto', marginRight: 'auto', width: 0.9 }}>
                                    <div className='detail'>
                                        <form onSubmit={handleSubmit}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={12}>
                                                    <TextField
                                                        disabled
                                                        value={d.number_id}
                                                        autoComplete="number_id"
                                                        name="number_id"
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="number_id"
                                                        label="เลขบัตรประจำตัวประชาชน"
                                                        // onChange={(e) => setNumber_id(e.target.value)}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={6} xl={6}>
                                                    <TextField
                                                        defaultValue={d.fname}
                                                        // value={d.fname}
                                                        autoComplete="fname"
                                                        name="firstName"
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="firstName"
                                                        label="ชื่อ"
                                                        onChange={(e) => {
                                                            setFname(e.target.value);
                                                            console.log("ee ==> ", e);
                                                        }}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={6} xl={6}>
                                                    <TextField
                                                        defaultValue={d.lname}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="lastName"
                                                        label="Last Name"
                                                        onChange={(e) => setLname(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        defaultValue={d.start_date}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="startDate"
                                                        label="วันเริ่มงาน"
                                                        onChange={(e) => setStartDate(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        defaultValue={d.date_of_birth}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="Date of birth"
                                                        label="วันเกิด"
                                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        defaultValue={d.age}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="age"
                                                        label="อายุ"
                                                        onChange={(e) => setAge(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={6} xl={6}>
                                                    <TextField
                                                        defaultValue={d.sex}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="sex"
                                                        label="เพศ"
                                                        onChange={(e) => setSex(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        defaultValue={d.height}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="height"
                                                        label="ส่วนสูง "
                                                        onChange={(e) => setHeight(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        defaultValue={d.weight}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="weight"
                                                        label="น้ำหนัก"
                                                        onChange={(e) => setWeight(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={6} xl={6}>
                                                    <TextField
                                                        defaultValue={d.blood}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="blood"
                                                        label="กรุ๊ปเลือด"
                                                        onChange={(e) => setBlood(e.target.value)}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Button type="submit" startIcon={<CreditScore />} color={'info'} fullWidth variant="contained" >
                                                Edit
                                            </Button>
                                        </form>
                                        {/* <h4>เลขบัตรประจำตัวประชาชน : {d.number_id}</h4> */}
                                        {/* <h4>ชื่อ : {d.fname}</h4>
                                        <h4>นามสกุล : {d.lname}</h4>
                                        <h4>วันเริ่มงาน : {d.start_date}</h4>
                                        <h4>วันเกิด : {d.date_of_birth}</h4>
                                        <h4>อายุ : {d.age}</h4>
                                        <h4>เพศ : {d.sex}</h4>
                                        <h4>ส่วนสูง : {d.height}</h4>
                                        <h4>น้ำหนัก : {d.weight}</h4>
                                        <h4>กรุ๊ปเลือด : {d.blood}</h4> */}
                                    </div>
                                    <>
                                        {/* <Typography align='center' margin={1}>
                                            <Button variant="contained" startIcon={<CreditScore />} color={'info'} onClick={() => update_employee(d.number_id)}>
                                                แก้ไขข้อมูล
                                            </Button>
                                        </Typography> */}

                                    </>
                                </Grid>

                            </Grid>
                        );
                    })}





                </div>
            </div>
        </>


    );
}
