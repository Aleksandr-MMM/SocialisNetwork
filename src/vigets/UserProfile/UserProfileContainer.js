import SendProfilePopup from "../FormWidget/PopupProfileWidget/PopupProfileWidget";
import {UserProfile} from "./UserProfile";
import {useState} from "react";



export const UserProfileContainer = ({dispatch,userRootId,urlId}) => {

    const [popup, changePopup] = useState(false)

    return (<>
            {popup ?
                <SendProfilePopup changePopup={changePopup} dispatch={dispatch}/> :
                <UserProfile userRootId={userRootId} urlId={urlId} dispatch={dispatch}
                             popup={popup} changePopup={changePopup}/>}
        </>
    )
}