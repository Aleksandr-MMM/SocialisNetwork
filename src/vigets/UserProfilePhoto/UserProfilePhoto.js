import style from "./UserProfilePhoto.module.css";
import CloseIcon from "../../assets/svg/CloseIcon";
import {UserPhoto} from "../../components/simpleComponents/UserPhoto/UserPhoto";
import {UserPhotoWithSelect} from "../../components/simpleComponents/UserPhoto/UserPhotoWithSelect/UserPhotoWithSelect";


export const UserProfilePhoto = ({photo,setPhoto,rootId,smallImgAtr,userId,largeWrapperAtr,
                                     smallWrapperAtr,largeImgAtr,hidePhoto}) => {



    return (<div>
        {photo ?
            <UserPhotoWithSelect dataName={rootId === userId ? "Изменить фотографию" : undefined}
                       imgAttribute={smallImgAtr}
                       wrapperAttribute={rootId === userId?undefined:smallWrapperAtr}
            />
            :
            <div className={style.largePhotoContainer}>

                <UserPhoto imgAttribute={largeImgAtr} wrapperAttribute={largeWrapperAtr}/>

                <CloseIcon className={style.closeImg} onClickFunc={() => {
                    hidePhoto(true)
                }}/>
                <div>
                    <input type="file" accept="image/*"
                           className={style.inputStyle}
                           onChange={(e) => {
                               debugger
                               setPhoto(e.target.files[0])
                               hidePhoto(true)
                           }}/>
                </div>
            </div>
        }
    </div>)
}