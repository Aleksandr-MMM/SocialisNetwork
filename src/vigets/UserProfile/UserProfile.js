import {UserProfileInfo} from "../UserProfileInfo/UserProfileInfo";
import StatusWidget from "../StatusWidget/StatusWidget";
import style from "./followButton.module.css";
import {NavLink} from "react-router-dom";
import {CustomButton} from "../../components/simpleComponents/Button/CustomButton/CustomButton";


export const UserProfile = ({changePopup, popup, userRootId,urlId,dispatch}) => {

    const customButtonAtr={onClick:() => {changePopup(!popup)}}

    return (<>




        <div className={style.wrapperProfileInfo}>
            <UserProfileInfo  urlId={urlId}/>

            <StatusWidget userId={urlId} userRootId={userRootId} dispatch={dispatch}/>

            {userRootId.toString() === urlId ?
                    <CustomButton wrapper={customButtonAtr} children={'Редактировать профиль'}/>
                :
                <NavLink to={`/message/${urlId}`} className={style.linkToMessagePage}>
                    <CustomButton children={'Отправить сообщение'}/>
                </NavLink>}
        </div>

    </>)
}