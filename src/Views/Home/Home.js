import React, { useState } from 'react'
import Header from "../../Components/Header/Header";
import './Home.css'
import Cookies from 'js-cookie'
import { useEffect } from 'react';


export default function Home() {

  const [data,setData] = useState([])
  
  useEffect(()=>
  getCookies,[]
  )
  const getCookies = ()=>{
    let res = JSON.stringify(Cookies.get('data'))
    const json = JSON.parse(Cookies.get('data'))
    setData(json)
    console.log("data cookies ===>",json);
  }

  return (
    <div>
        <Header name={data}/>
        <>แสดงแดชบอร์ดเกี่ยวกับการรักษาภายในคลินิก</>
    </div>
  )
}
