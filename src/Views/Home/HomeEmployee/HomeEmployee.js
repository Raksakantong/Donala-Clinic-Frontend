import React from 'react'
import HeaderEmployee from "../../../Components/Header/HeaderEmployee/HeaderEmployee";
import "./HomeEmployee.scss";
import welcome from "../../../Assets/welcome.png";
export default function HomeEmployee() {
  return (

    
    <div className='employee'>
        <HeaderEmployee/>
        <div className='image'>
            <img src={welcome} alt=""/>
        </div>
        
    </div>
  )
}
