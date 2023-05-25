import {Form, Formik} from "formik";
import {MySelect} from "../../../components/simpleComponents/CustomForms/MySelect";
import style from "../../../components/DetailPageComponents/MainPageContent/SettingsPage/Settings.module.css";
import {setPageSize} from "../../../store/reducers/settingsReduser";
import { useState} from "react";
import {CustomButton} from "../../../components/simpleComponents/Button/CustomButton/CustomButton";

export const SettingsForm = ({pageNumber,dispatch}) => {

    const [saveSettings,setSaveSettings] =useState(false)

    const wrapperButton={
        type:"submit"
    }

    return (<Formik initialValues={{
        pageSize: pageNumber,
    }}
                    onSubmit={(values) => {
                        dispatch(setPageSize(values.pageSize))
                        setSaveSettings(true)
                        debugger
                        localStorage.setItem('pageSize', values.pageSize);

                    }}
    >
        <Form className={style.testForm}>
                <MySelect name="pageSize" label='Колличество пользователей на странице поиска:'
                          selectWrapperStyle={style.selectFormStyle}
                          selectStyle={`${style.selectItems} ${style.btnStyle}`}>
                    <option value='5'>5 профиль</option>
                    <option value='10'>10 профилей</option>
                    <option value='25'>25 профилей</option>
                    <option value='50'>50 профилей</option>
                    <option value='100'>100 профилей</option>
                </MySelect>
            <div className={style.saveChangeBtnStyle}>
                <div>
                    {saveSettings?<div>Изменения сохраненны</div>:undefined}
                    <CustomButton wrapper={wrapperButton} children={'Сохранить изменения'} />
                </div>
            </div>
        </Form>
    </Formik>)
}