import React from "react";
import style from './Header.module.css'
import Logo from "../../simpleComponents/HeaderLogo/Logo";
import LoginForm from "../../../vigets/FormWidget/LoginForm/LoginForm";
import {Logout} from "../../simpleComponents/Logout/Logout";
import {NewMessageCounter} from "../../simpleComponents/NewMessageCounter/NewMessageCounter";

const Header =(props)=>{

    return(
         <header className={`${style.wrapper}`} >
                 <Logo />
                 <h1 className={style.headerName}>MEGAPOLIS</h1>
             {props.isLogin?
                 <div>
                     <Logout logoutToAccount={props.logoutToAccount}/>
                     <NewMessageCounter newMessageCount={props.newMessageCount}/>
                 </div>
                 :
                 <LoginForm isLogin={props.isLogin} loginToAccount={props.loginToAccount}
                            isCaptcha={props.isCaptcha} errorMessages={props.errorMessages}/>}
        </header>
    )
}
export default Header;