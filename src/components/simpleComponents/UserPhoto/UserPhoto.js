import userDefaultPhoto from "../../../assets/svg/userlogo.svg";
import style from './UserPhoto.module.css'

export const UserPhoto =({dataName,addWrapperStyle,imgAttribute,wrapperAttribute})=>{

    return(
        <div className={addWrapperStyle?`${style.wrapper} ${addWrapperStyle}`:style.wrapper}
             data-name={dataName} {...wrapperAttribute}>
        <img alt="UserPhoto" className={style.photo}
             {...imgAttribute}
             src={imgAttribute.src || userDefaultPhoto }
             />
    </div>)
}
