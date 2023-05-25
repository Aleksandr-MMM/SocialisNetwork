import React from "react";
import style from './Logo.module.css'
import logo from '../../../assets/svg/town1.svg'

const Logo =()=>{
    return <div>
        <img src={logo} alt="logoTown" className={style.logo}/>
    </div>



}
export default Logo;