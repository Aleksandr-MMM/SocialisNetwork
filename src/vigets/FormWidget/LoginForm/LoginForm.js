import {Form, Formik} from "formik";
import {validationToLogin} from "../../../helpers/Validation/validation";
import {MyTextInput} from "../../../components/simpleComponents/CustomForms/MyTextInput";
import {MyCheckbox} from "../../../components/simpleComponents/CustomForms/MyCheckBox";
import {CustomButton} from "../../../components/simpleComponents/Button/CustomButton/CustomButton";


const LoginForm = (props) => {

    const loginButtonAttr ={
        type:'submit',
    }


    return (
        <Formik initialValues={{
            email: '',
            password: '',
            captcha: '',
            rememberMe: false,
        }}
                validationSchema={validationToLogin}
                onSubmit={async (values) => {

                    await props.loginToAccount(values, props.isLogin)
                }}>
            <Form>
                <div>
                    <MyTextInput label="Email Address"
                                 name="email"
                                 type="email"
                                 placeholder="example@mail.ru"

                    />
                    <MyTextInput label="Password"
                                 name="password"
                                 type="password"/>
                </div>
                <div>
                    {props.isCaptcha ? <MyTextInput label="Captcha"
                                                    name="captcha"
                                                    type="text"/> : undefined}
                    <MyCheckbox name="rememberMe">
                        Запомнить меня
                    </MyCheckbox>
                </div>

                <div>{props.errorMessages}</div>
                <CustomButton children={'Войти'} wrapper={loginButtonAttr}/>


            </Form>
        </Formik>
    )
}
export default LoginForm