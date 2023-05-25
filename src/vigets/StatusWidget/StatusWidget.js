import {useState} from "react";
import {StatusForm} from "../FormWidget/StatusForm/StatusForm";
import {Status} from "./Status";
import style from "./StatusInfo.module.css";
import {setStatus} from "../../store/reducers/profileReduser";
import {useSelector} from "react-redux";

const StatusWidget = ({ userId, userRootId,dispatch }) => {

    const status =useSelector(state=>state.profileReducer.status)


    const setProfileStatus = (status) => {
        dispatch(setStatus(status))
    }
    const [inputStatus, setInputStatus] = useState(false)

    return (<div>
            {inputStatus ?
                <StatusForm setInputStatus={setInputStatus} setProfileStatus={setProfileStatus}
                            status={status} userId={userId}/> :
                <>
                    {userRootId.toString() !== userId ?
                        <Status status={status} statusStyle={style.statusAnotherUser}/>
                        :
                        <Status status={status} statusHelpInfo='Изменить статус'
                                onClickFunc={() => setInputStatus(true)} statusStyle={style.myStatus}/>
                    }
                </>
            }
        </div>
    )
}
export default StatusWidget
