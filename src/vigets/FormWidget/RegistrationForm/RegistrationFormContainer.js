import {RegistrationForm} from "./RegistrationForm";
import {useSelector} from "react-redux";

export const RegistrationFormContainer =({dispatch})=>{

    const errorMessages = useSelector((state) => state.globalData.tryRegistration.message)
    debugger
    return(
        <RegistrationForm dispatch={dispatch} errorMessages={errorMessages}/>
    )
}