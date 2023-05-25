import {useState} from "react";
import style from "./UserProfilePhoto.module.css";
import {useSelector} from "react-redux";
import {setUserPhoto} from "../../store/reducers/profileReduser";
import {UserProfilePhoto} from "./UserProfilePhoto";


export const UserProfilePhotoContainer = ({rootId, dispatch}) => {

    const userPhoto = useSelector((state) => state.profileReducer.currentUser.photos)
    const userId = useSelector((state) => state.profileReducer.currentUser.userId)

    const setPhoto=(file)=>{
        debugger
        dispatch(setUserPhoto(file))
    }

    const [photo, hidePhoto] = useState(true)

    const smallImgAtr = {
        onClick: rootId === userId ?
            () => {
                hidePhoto(false)
            } : undefined,
        src: userPhoto?.small
    }


    const largeImgAtr={
        src: userPhoto?.large,
        className:style.largePhoto
    }



    return (<UserProfilePhoto setPhoto={setPhoto} rootId={rootId} photo={photo} smallImgAtr={smallImgAtr}
                              userId={userId}  largeImgAtr={largeImgAtr}
                              hidePhoto={hidePhoto}/>)
}