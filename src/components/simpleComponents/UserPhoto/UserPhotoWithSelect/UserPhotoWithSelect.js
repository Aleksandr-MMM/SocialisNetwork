import style from './UserPhotoWithSelect.module.css'
import {UserPhoto} from "../UserPhoto";

export const UserPhotoWithSelect =({dataName,imgAttribute,wrapperAttribute})=>{

    const addWrapperStyle=style.wrapper


    return(
        <UserPhoto dataName={dataName} addWrapperStyle={addWrapperStyle} imgAttribute={imgAttribute}
                   wrapperAttribute={wrapperAttribute} />
       )
}
