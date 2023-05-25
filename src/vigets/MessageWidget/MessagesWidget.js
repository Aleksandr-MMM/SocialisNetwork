import style from './MessageWidget.module.css'
import {MessageForm} from "../FormWidget/MessageForm/MessageForm";
import {MessagesContainer} from "../Messages/MessagesContainer";

export const MessagesWidget =({dispatch,urlId,rootId})=>{


    return(
        <div className={style.wrapper}>
            <MessagesContainer dispatch={dispatch} urlId={urlId} rootId={rootId}/>
            <MessageForm urlId={urlId} dispatch={dispatch} />
        </div>
    )

}