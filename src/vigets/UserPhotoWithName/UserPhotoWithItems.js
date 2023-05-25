import {UserPhotoWithSelect} from "../../components/simpleComponents/UserPhoto/UserPhotoWithSelect/UserPhotoWithSelect";
import {SimpleItems} from "../../components/simpleComponents/SimpleItems/SimpleItems";
import style from './UserPhotoWithItems.module.css'

export const UserPhotoWithItems =({dataName,imgAttribute,wrapperAttribute,items})=>{



    return(<div className={style.wrapper}>
            <UserPhotoWithSelect dataName={dataName} imgAttribute={imgAttribute}
                                 wrapperAttribute={wrapperAttribute} />
            <SimpleItems items={items}/>
    </div>
       )
}
