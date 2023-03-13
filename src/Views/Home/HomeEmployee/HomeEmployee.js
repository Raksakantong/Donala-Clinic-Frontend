import React,{useEffect,useState} from 'react'
import HeaderEmployee from "../../../Components/Header/HeaderEmployee/HeaderEmployee";
import "./HomeEmployee.scss";
import welcome from "../../../Assets/welcome.png";
import Cookies from 'js-cookie'

export default function HomeEmployee() {
  // const [data,setData] = useState([])

  return (

    
    <div className='employee'>
        <HeaderEmployee />
        <div className='image'>
            <img src={welcome} alt=""/>
        </div>
        
    </div>
  )
}
