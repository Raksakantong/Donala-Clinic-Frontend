import React, { useEffect, useState } from 'react'
import "../OwnerProfile/OwnerProfile.scss";
import user from "../../../Assets/user.png";
import { apiUpdate, apiGetSomeOwner, apiUpdateOwner } from '../../../Service/api';
import Grid from '@mui/material/Grid';
import { Button, Typography, TextField } from '@mui/material';
import CreditScore from '@mui/icons-material/CreditScore';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../../Components/Header/Header';
// import CreditScore from '@mui/icons-material/CreditScore';

export default function OwnerEdit() {

    const [data, setData] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [numberId,setNumberId] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getProfile()
        console.log("location.state.id ==== ", location.state.id)
    }
        ,
        []);



    function getProfile() {
        apiGetSomeOwner(location.state.id).then((res) => {
            setData(res.data);
            setNumberId(res.data[0].number_id)
            setFname(res.data[0].fname)
            setLname(res.data[0].lname)
            setOldPassword(res.data[0].password)

            console.log('ข้อมูลพนักงาน ===> ', res.data[0].fname);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password != oldPassword) {
            alert('รหัสผ่านเดิมไม่ถูกต้อง')
        }
        else if (newPassword != confirmPassword) {
            alert('รหัสผ่านใหม่ไม่ตรงกัน กรุณาลองใหม่อีกครั้ง')
        }
        else if (newPassword === confirmPassword) {
            var data = {
                fname: fname,
                lname: lname,
                password: password,
                number_id: numberId
            };
            console.log("data : ", data);
            apiUpdateOwner(data).then(function (res) {
                alert(res.data);
                if (res["status"] === 200) {
                    // window.location.href = '/';
                    navigate("/homeOwner/profile");
                    console.log("!!!!!!!!!!");
                }
                console.log(res.data);
            });
        }


    };

    return (
        <>
            <Header />
            <div className='card-profile'>
                <h2>แก้ไขมูลส่วนตัว</h2>
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
                                                        type='password'
                                                        // defaultValue={d.password}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="old password"
                                                        label="รหัสผ่านเดิม"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        type='password'
                                                        defaultValue={d.date_of_birth}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="new password"
                                                        label="รหัสผ่านใหม่"
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        type='password'
                                                        defaultValue={d.age}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="confirm Password"
                                                        label="ยืนยันรหัสผ่าน"
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </Grid>
                                                {/* <Grid item xs={12} md={6} lg={6} xl={6}>
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
                                                </Grid> */}
                                            </Grid>
                                            <br />
                                            <Button type="submit" startIcon={<CreditScore />} color={'info'} fullWidth variant="contained" >
                                                Edit
                                            </Button>
                                        </form>

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
