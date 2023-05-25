import {NavLink} from "react-router-dom";

import style from './SubscribeToUser.module.css'
import {UserPhotoWithItems} from "../UserPhotoWithName/UserPhotoWithItems";



const SubscribeToUser = ({photos, name, status, id}) => {

    const imgPhotoAtr={
        src:photos.small
    }

    const items=[]
    items.push(name,status)

    return (

        <>
            <NavLink to={`/profile/${id}`} className={style.link}>
                <UserPhotoWithItems imgAttribute={imgPhotoAtr} dataName='Открыть профиль пользователя' items={items}/>
            </NavLink>
        </>
    )
}
export default SubscribeToUser