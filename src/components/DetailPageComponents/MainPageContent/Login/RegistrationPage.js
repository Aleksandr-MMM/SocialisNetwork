import {RegistrationFormContainer} from "../../../../vigets/FormWidget/RegistrationForm/RegistrationFormContainer";

export const RegistrationPage = ({registrationInfo,dispatch}) => {


    return (
        <div>
            <h1>
                Страница регистрации
            </h1>
            <RegistrationFormContainer dispatch={dispatch}/>
            {registrationInfo.security.isCaptcha?<img src={registrationInfo.security.captchaUrl} alt="captcha"/>:false}


        </div>

    )

}