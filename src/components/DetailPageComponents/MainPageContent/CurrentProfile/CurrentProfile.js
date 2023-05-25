import style from './CurrentProfile.module.css'
import {UserProfilePhotoContainer} from "../../../../vigets/UserProfilePhoto/UserProfilePhotoContainer";
import {UserProfileContainer} from "../../../../vigets/UserProfile/UserProfileContainer";

const CurrentProfile = ({userRootId,dispatch,urlId}) => {

    return (<div className={style.wrapper}>
            <UserProfilePhotoContainer dispatch={dispatch} rootId={userRootId}/>
            <UserProfileContainer userRootId={userRootId} dispatch={dispatch} urlId={urlId}/>
        </div>

    )
}
export default CurrentProfile