import {DialogsPage} from "./DialogsPage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllMyDialogs} from "../../../../store/reducers/dialogsReduser";
import style from '../../../../UiStyle/positionStyle/wrapperUserComponent/wrapperUsersComponent.css'

export const DialogsPageContainer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(getAllMyDialogs())
        }, [dispatch]
    )
    const allDialogs = useSelector(state => state.dialogsReducer.userMessage)

    return (<div className={style.wrapperUsersComponent}>
            {allDialogs.map(d =>
                <DialogsPage hasNewMessages={d.hasNewMessages} id={d.id} lastDialogActivityDate={d.lastDialogActivityDate}
                             lastUserActivityDate={d.lastUserActivityDate} newMessagesCount={d.newMessagesCount}
                             photos={d.photos} userName={d.userName} key={d.id}/>)}
    </div>

    )
}