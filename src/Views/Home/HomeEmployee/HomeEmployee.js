import React,{useEffect,useState} from 'react'
import HeaderEmployee from "../../../Components/Header/HeaderEmployee/HeaderEmployee";
import "./HomeEmployee.scss";
import welcome from "../../../Assets/welcome.png";
import Cookies from 'js-cookie'

export default function HomeEmployee() {
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

    
    <div className='employee'>
        <HeaderEmployee name={data}/>
        <div className='image'>
            <img src={welcome} alt=""/>
        </div>
        
    </div>
  )
}
