import {NavLink} from "react-router-dom";
import style from './DialogsPage.module.css'
import {UserActivity} from "../../../simpleComponents/UserActivity/UserActivity";
import {UserPhotoWithItems} from "../../../../vigets/UserPhotoWithName/UserPhotoWithItems";

export const DialogsPage = ({hasNewMessages, id, lastDialogActivityDate, lastUserActivityDate,
                                newMessagesCount,photos,userName}) => {

    const imgAtr={
        src:photos.small
    }


    return (
        <span className={style.users}>

            <div className={style.wrapper}>
                <NavLink to={`/message/${id}`} className={style.link}>
                    <UserPhotoWithItems items={userName} imgAttribute={imgAtr} dataName='Открыть диалог с пользователем'/>
                </NavLink>
            </div>
            <div className={style.userActivity}>
                {hasNewMessages ?
                    <p className={style.newMessage}>
                        У вас {newMessagesCount===1?'новое сообщение':`${newMessagesCount} новых сообщения`}
                    </p>
                    : false}
                <UserActivity id={id} lastDialogActivityDate={lastDialogActivityDate}
                              lastUserActivityDate={lastUserActivityDate}/>
            </div>
        </span>
    )
}