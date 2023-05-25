import { useSelector} from "react-redux";
import {useEffect} from "react";
import {getCaptcha} from "../../../../store/reducers/globalData";
import {RegistrationPage} from "./RegistrationPage";



export const RegistrationPageContainer = ({dispatch}) => {


    const registrationInfo = useSelector(state => state.globalData)

    useEffect(() => {
        if (registrationInfo.security.isCaptcha) {
            dispatch(getCaptcha())
        }
    }, [dispatch, registrationInfo.security.isCaptcha])




    return (
        <>
            <RegistrationPage registrationInfo={registrationInfo} dispatch={dispatch}/>
        </>

    )

}
