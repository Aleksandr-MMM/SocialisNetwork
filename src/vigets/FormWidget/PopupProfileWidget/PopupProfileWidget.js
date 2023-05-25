import {Form, Formik} from "formik";
import {validationToPopup} from "../../../helpers/Validation/validation";
import {MyTextInput} from "../../../components/simpleComponents/CustomForms/MyTextInput";
import {MyCheckbox} from "../../../components/simpleComponents/CustomForms/MyCheckBox";
import style from './PopupProfileWidget.module.css'
import {useState} from "react";
import {CustomButton} from "../../../components/simpleComponents/Button/CustomButton/CustomButton";
import {useSelector} from "react-redux";
import {setProfile} from "../../../store/reducers/profileReduser";

const SendProfilePopup = ({dispatch,changePopup}) => {

    const fullName = useSelector((state) => state.profileReducer.currentUser.fullName)
    const lookingForAJob = useSelector((state) => state.profileReducer.currentUser.lookingForAJob)
    const lookingForAJobDescription = useSelector((state) => state.profileReducer.currentUser.lookingForAJobDescription)
    const contacts = useSelector((state) => state.profileReducer.currentUser.contacts)
    const aboutMe = useSelector((state) => state.profileReducer.currentUser.aboutMe)

    const setUserProfile = (value) => {
        dispatch(setProfile(value))
    }


    const [moreInfo, changeInfo] = useState(false)
    // Установить значения из Стора или по умолчанию
    const checkValueNull = (value) => {
        return (value === null ? '' : value)
    }
    // Создание input контактов
    const customButtonAtr = {
        type:"submit"
    }


    const input = Object.keys(contacts)
        .map(site => <MyTextInput label={site} key={site} name={`contacts.${site}`}
                                  type="text" placeholder={`Страничка на ${site}`}/>)

    return (
        <div className={style.popup}>
            <Formik initialValues={{
                //input
                aboutMe: checkValueNull(aboutMe),
                contacts: {
                    github: checkValueNull(contacts.github),
                    vk: checkValueNull(contacts.vk),
                    facebook: checkValueNull(contacts.facebook),
                    instagram: checkValueNull(contacts.instagram),
                    twitter: checkValueNull(contacts.twitter),
                    website: checkValueNull(contacts.website),
                    youtube: checkValueNull(contacts.youtube),
                    mainLink: checkValueNull(contacts.mainLink)
                },
                lookingForAJobDescription: checkValueNull(lookingForAJobDescription),
                fullName: checkValueNull(fullName),
                //checkBox
                lookingForAJob: lookingForAJob,

            }}
                    validationSchema={validationToPopup}

                    onSubmit={async function (values) {
                        await setUserProfile(values)
                        await changePopup(false)
                    }}>
                <Form>
                    <MyTextInput label="aboutMe"
                                 name="aboutMe"
                                 type="text"
                                 placeholder="О себе"/>
                    <MyTextInput label="FullName"
                                 name="fullName"
                                 type="text"
                                 placeholder="FullName"/>
                    <MyCheckbox name="lookingForAJob">
                        У меня есть работа
                    </MyCheckbox>
                    <MyTextInput label="Место работы"
                                 name="lookingForAJobDescription"
                                 type="text"
                                 placeholder="Место работы"/>

                    {
                        moreInfo ? input : false
                    }

                    <div>
                        <p className={style.contacts} data-name='Посмотреть ссылку' onClick={() => {
                            changeInfo(!moreInfo)
                        }}>
                            {moreInfo ? 'Скрыть информацию' : 'Больше информации...'}</p>
                    </div>
                    <CustomButton wrapper={customButtonAtr} children={'Сохранить изменения'}/>
                </Form>
            </Formik>
        </div>

    )
}
export default SendProfilePopup