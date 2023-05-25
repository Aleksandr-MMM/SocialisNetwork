import SubscribeToUser from "../SubscribeToUser/SubscribeToUser";
import styleUi from '../../UiStyle/positionStyle/wrapperUserComponent/wrapperUsersComponent.css'
import style from '../SubscribeToUser/SubscribeToUser.module.css'
import {FolUnFolButton} from "../../components/simpleComponents/Button/FollowButton/followButton";

const Users = ({dispatch,users}) => {

    return (
        <>
            <div className={styleUi.wrapperUsersComponent}>
                {users?.map((user) =>
                        <span className={style.users} key={user.id}>
                        <SubscribeToUser  name={user.name}  id={user.id}
                                          photos={user.photos} status={user.status}/>
                    <FolUnFolButton dispatch={dispatch} isFollowed={user.followed} id={user.id} />
                </span>

                    )
                }
            </div>

        </>
    )
}
export default Users
