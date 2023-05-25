import {useSelector} from "react-redux";
import {getFollow, getUnFollow} from "../../../../store/reducers/usersReduser";
import {CustomButton} from "../CustomButton/CustomButton";


export const FolUnFolButton = ({id, dispatch}) => {

    const findFunc =(el)=>{
        while(el.id===id){return true}
    }

    const isFollowed =useSelector(state=>
        state.getUsers.items[state.getUsers.items.findIndex(findFunc)].followed)

    const freezeButtonToId = useSelector((state) => state.getUsers.helpersToUsersData.freezeButtonToId)
    const isBlockButtonToId = (el)=>id===el

    const wrapperCustomButton = {
        onClick: () => {
            isFollowed
                ? dispatch(getUnFollow({id, dispatch}))
                : dispatch(getFollow({id, dispatch}))
        },
        disabled: freezeButtonToId.some(isBlockButtonToId)
    }
    return (
        <CustomButton children={isFollowed ? 'Отписаться' : 'Подписаться'}
                      wrapper={wrapperCustomButton}/>
    )
}