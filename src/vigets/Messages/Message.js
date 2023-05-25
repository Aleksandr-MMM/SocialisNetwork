import style from './Message.module.css'
import closeIcon from '../../assets/svg/closeIcon.svg'
import markToSpamIcon from '../../assets/svg/spamIcon.svg'
import {IconForMessageButton} from "../../components/simpleComponents/Button/IconForMessageButton/IconForMessageButton";
export const Message = ({addedAt, body, id, senderId, recipientId, senderName, translatedBody,
                            viewed,markToSpam,deleteUserMessage,rootId}) => {

    return (
        <div className={rootId === senderId ? style.yourMessage + ' ' + style.readMessage : style.readMessage}>

            <div className={style.widget}>
                <IconForMessageButton Clue='Удалить сообщение' icon={closeIcon}
                                      altText="deleteMessage" callBackFunc={()=>deleteUserMessage(id)}/>

                <IconForMessageButton Clue='Отметить как спам' icon={markToSpamIcon}
                                      altText="mark to spam" callBackFunc={()=>markToSpam(id)}/>
            </div>

            <div className={style.message + ' ' + style.items}>
                {body}
            </div>

            <div className={style.items + ' ' + style.date}>
                {addedAt}
            </div>

            <div className={style.items}>
                {translatedBody}
            </div>
            <div className={style.items + ' ' + style.date}>
                {viewed ? 'Просмотренно' : 'Непросмотренно'}
            </div>

        </div>
    )
}