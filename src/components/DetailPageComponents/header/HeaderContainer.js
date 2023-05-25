import React, {useEffect} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {loginToMyProfile, logoutMyProfile} from "../../../store/reducers/globalData";
import {useNavigate} from "react-router-dom";
import {isNewMessage} from "../../../store/reducers/dialogsReduser";

const HeaderContainer = () => {

    const registrationInfo = useSelector((state) => state.globalData)
    const newMessageCount = useSelector((state) => state.dialogsReducer.newMessageCount)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginToAccount = async (value, isLogin) => {
       await dispatch(loginToMyProfile(value))
        if (isLogin) {
            navigate(`/profile/${registrationInfo.userRoot.id}`)
        }
    }

    const logoutToAccount = () => {
        dispatch(logoutMyProfile())
        navigate('/login')
    }

    useEffect(()=>{
        if(registrationInfo.isLogin){
            dispatch(isNewMessage())
        }

    },[dispatch,registrationInfo.isLogin])


    return (
        <Header isLogin={registrationInfo.isLogin} id={registrationInfo.userRoot.id} dispatch={dispatch}
                logoutToAccount={logoutToAccount} loginToAccount={loginToAccount}
                isCaptcha={registrationInfo.security.isCaptcha} newMessageCount={newMessageCount}
                errorMessages={registrationInfo.security.errorMessages}

        />
    )
}
export default HeaderContainer;