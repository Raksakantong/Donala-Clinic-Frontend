import React, { useState } from 'react'
import Header from "../../Components/Header/Header";
import './Home.css'
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import Dashboard from "../Dashboard/Dashboard";

export default function Home() {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getCookies()
  // }
  //   , []
  // )
  // const getCookies = () => {
  //   let res = JSON.stringify(Cookies.get('data'))
  //   const json = JSON.parse(Cookies.get('data'))
  //   setData(json)
  //   console.log("data cookies ===>", json);
  // }

  return (
    <div>
      <Header />
      {/* <>แสดงแดชบอร์ดเกี่ยวกับการรักษาภายในคลินิก</> */}
      <Dashboard />
    </div>
  )
}
