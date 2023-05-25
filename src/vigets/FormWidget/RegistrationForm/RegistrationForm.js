import {validationToRegistration} from "../../../helpers/Validation/validation";
import {Form, Formik} from "formik";
import {MyTextInput} from "../../../components/simpleComponents/CustomForms/MyTextInput";
import {MyCheckbox} from "../../../components/simpleComponents/CustomForms/MyCheckBox";
import {CustomButton} from "../../../components/simpleComponents/Button/CustomButton/CustomButton";
import {tryRegistration} from "../../../store/reducers/globalData";
import style from './RegistrationForm.module.css'

export const RegistrationForm =({dispatch,errorMessages})=>{

    const loginButtonAttr ={
        type:'submit',
    }

    return(<Formik initialValues={{
        Name: '',
        Email: '',
        Password: '',
        AcceptOffer: false,
    }}
                   validationSchema={validationToRegistration}
                   onSubmit={async (values) => {
                       dispatch(tryRegistration(values))
                   }}>
        <Form>
            <div>
                <MyTextInput label="Login Name"
                             name="Name"
                             type="text"
                             placeholder="Ivan"

                />
                <MyTextInput label="Email Address"
                             name="Email"
                             type="email"
                             placeholder="example@mail.ru"

                />
                <MyTextInput label="Password"
                             name="Password"
                             type="password"/>
            </div>
            <div>

                <MyCheckbox name="AcceptOffer">
                    Я принимаю условия
                </MyCheckbox>
            </div>
            <div className={style.error}>{errorMessages}</div>
            <CustomButton children={'Зарегестрироваться'} wrapper={loginButtonAttr}/>

        </Form>
    </Formik>)
}