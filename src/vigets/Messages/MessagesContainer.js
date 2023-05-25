import {Message} from "./Message";
import style from './Message.module.css'
import {deleteMessage, getFriendMessage, markMessageToSpam} from "../../store/reducers/dialogsReduser";

import {useSelector} from "react-redux";

export const MessagesContainer =({dispatch,urlId,rootId})=>{

    const userMessage = useSelector((state) => state.dialogsReducer.messages)

    const markToSpam =(messageId)=>{
        dispatch(markMessageToSpam(messageId))
    }

    const  deleteUserMessage  = async (messageId)=>{

        await dispatch(deleteMessage(messageId))
        await dispatch(getFriendMessage(urlId))
    }
    return(
        <div className={style.wrapper}>
            {userMessage.map(mes=><Message addedAt={mes.addedAt} body={mes.body} id={mes.id} senderId={mes.senderId}
                                           recipientId={mes.recipientId} senderName={mes.senderName} key={mes.id}
                                           translatedBody={mes.translatedBody} viewed={mes.viewed}
                                           deleteUserMessage={deleteUserMessage}
                                           markToSpam={markToSpam} rootId={rootId}/>)
            }
        </div>
    )

}