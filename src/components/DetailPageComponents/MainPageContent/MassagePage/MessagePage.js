import {MessagesWidget} from "../../../../vigets/MessageWidget/MessagesWidget";
import {UserPhotoWithItems} from "../../../../vigets/UserPhotoWithName/UserPhotoWithItems";
import {NavLink} from "react-router-dom";


export const MessagePage = ({dispatch, fullName, photos, urlId, rootId}) => {

    const imgAtr = {
        src: photos.small
    }



    return (
        <div>
            <NavLink to={`/profile/${urlId}`} >
            <UserPhotoWithItems items={fullName} imgAttribute={imgAtr} dataName='Открыть профиль пользователя'/>
            </NavLink>

            {/*<div>
                <DataWidget/>
            </div>*/}

            <MessagesWidget dispatch={dispatch} urlId={urlId} rootId={rootId}/>
        </div>
    )
}