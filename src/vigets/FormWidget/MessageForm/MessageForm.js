import {Form, Formik} from "formik";
import {validationMessage} from "../../../helpers/Validation/validation";
import inputAttr from '../../../UiStyle/FormStyle/MessageInputStyle/ImputAttr'
import style from './MessageForm.module.css'
import messageIcon from '../../../assets/svg/sendMessage.svg'
import loadingPreloader from '../../../assets/svg/LoadingPreloaderV2.svg'
import {getFriendMessage, sendFriendMessage, sendMyMessage} from "../../../store/reducers/dialogsReduser";
import {useState} from "react";
import {MyTextInput} from "../../../components/simpleComponents/CustomForms/MyTextInput";

export const MessageForm = ({dispatch, urlId}) => {

    const [preloader, setPreloader] = useState(false)

    return (
        <Formik initialValues={{
            //input
            message: ''
        }}
                enableReinitialize={true}
                validationSchema={validationMessage}
                onSubmit={async function (values, {resetForm}) {
                    if (values.message !== '') {
                        setPreloader(true)
                        await dispatch(sendMyMessage(urlId))
                        await dispatch(sendFriendMessage({urlId, message: values.message}));
                        await dispatch(getFriendMessage(urlId))
                        await setPreloader(false)
                        resetForm({values: ''})
                    }
                }}>

            <Form>
                <div className={style.wrapper}>
                        <MyTextInput name="message"
                                     type="text"
                                     placeholder="Напишите сообщение..."
                                     addInputAttribute={inputAttr}
                        />
                    {preloader ?
                        <img src={loadingPreloader} alt="preloader" className={style.preloader}/>
                        :
                        <button type="submit" className={style.sendMessageButton} disabled={preloader}>

                            <img src={messageIcon} alt="sendMessage" className={style.iconMessage}/>
                        </button>}
                </div>
            </Form>
        </Formik>
    )
}